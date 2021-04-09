const kundenname = document.getElementById('kundenname'),
    anrede = document.getElementById('anrede'),
    art = document.getElementById('art'),
    strasse = document.getElementById('strasse'),
    hausnummer = document.getElementById('hausnummer'),
    land = document.getElementById('land'),
    plz = document.getElementById('plz'),
    ort = document.getElementById('ort'),
    rechnungsdatum = document.getElementById('rechnungsdatum'),
    leistungsdatum = document.getElementById('leistungsdatum'),
    telefon = document.getElementById('telefon'),
    email = document.getElementById('email'),
    Ruuid = document.getElementById('uuid'),
    SucheArbeitsleistung = document.getElementById('SucheArbeitsleistung'),
    AusgabeArbeitsleistung = document.getElementById('AusgabeArbeitsleistung'),
    UpdateCustomerText = document.getElementById('UpdateCustomerText');

if (art.value == 1) {
    GetFullArCost(Ruuid.value);
}

const fzArt = document.getElementById('fzArt')
const fzId = document.getElementById('fzID')
const kennzeichen = document.getElementById('kennzeichen')
const km_stand = document.getElementById('kmStand')
const mappe = document.getElementById('mappe')
const ticket = document.getElementById('ticket')
const UpdateVehicelText = document.getElementById('UpdateVehicelText');
const arbeitsleistung = document.getElementById('arbeitsleistung');
const MessageArbeitsleistung = document.getElementById('MessageArbeitsleistung');



kundenname.addEventListener('focusout', () => {
    UpdateCustomer('name', kundenname.value);
});

telefon.addEventListener('focusout', () => {
    UpdateCustomer('telefonnummer', telefon.value);

});

email.addEventListener('focusout', () => {
    UpdateCustomer('email', email.value);
});

anrede.addEventListener('focusout', () => {
    UpdateCustomer('anrede', anrede.value);
});

leistungsdatum.addEventListener('focusout', () => {
    UpdateCustomer('leistungsdatum', leistungsdatum.value);
});

strasse.addEventListener('focusout', () => {
    UpdateCustomer('adresse', strasse.value);
});

hausnummer.addEventListener('focusout', () => {
    UpdateCustomer('hausnummer', hausnummer.value);
});

land.addEventListener('focusout', () => {
    UpdateCustomer('land', land.value);
});

plz.addEventListener('focusout', () => {
    UpdateCustomer('plz', plz.value);
});

ort.addEventListener('focusout', () => {
    UpdateCustomer('ort', ort.value);
});
if (art.value == '1') {
    fzArt.addEventListener('focusout', () => {
        UpdateVehicel('fzArt', fzArt.value);
    });

    mappe.addEventListener('focusout', () => {
        UpdateVehicel('mappe', mappe.value);
    });

    km_stand.addEventListener('focusout', () => {
        UpdateVehicel('km_stand', km_stand.value);
    });

    ticket.addEventListener('focusout', () => {
        UpdateVehicel('ticket_id', ticket.value);
    });

    fzId.addEventListener('focusout', () => {
        UpdateVehicel('fzID', fzId.value);
    });

    kennzeichen.addEventListener('focusout', () => {
        UpdateVehicel('kennzeichen', kennzeichen.value);
    });
}

SucheArbeitsleistung.addEventListener('keyup', () => {
    if (SucheArbeitsleistung.value.length >= 4) {
        Search(1, SucheArbeitsleistung.value);
    } else {
        AusgabeArbeitsleistung.innerHTML = ''
    }
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function UpdateCustomer(key = '', vars = '') {
    fetch('/api/rechnungen/UpdateCustomer', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'uuid=' + Ruuid.value + '&key=' + key + '&value=' + vars
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
    UpdateCustomerText.innerHTML = 'Gespeichert!';
    sleep(500).then(() => {
        UpdateCustomerText.innerHTML = ''
    });

}

function UpdateVehicel(key = '', vars = '') {
    fetch('/api/rechnungen/UpdateVehicel', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'uuid=' + Ruuid.value + '&key=' + key + '&value=' + vars
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
    UpdateVehicelText.innerHTML = 'Gespeichert!';
    sleep(500).then(() => {
        UpdateVehicelText.innerHTML = ''
    });
}

function json(response) {
    return response.json()
}

function text(response) {
    return response.text()
}

function Search(art, searchkey) {
    AusgabeArbeitsleistung.innerHTML = '';
    var i = 0;
    fetch('/api/rechnungen/Search', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'art=' + art + '&value=' + searchkey
        })
        .then(json)
        .then(function (data) {
            for (i = 0; i < data.length; i++) {
                if (data != '' || data != null) {
                    AusgabeArbeitsleistung.innerHTML += '<div class="row col"><p class="text-left" onclick="AddArbeitsleisung(' + data[i].id + ')">' + data[i].beschreibung + '</p></div>';

                }
            }
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}


function AddArbeitsleisung(id) {
    fetch('/api/rechnungen/AddArbeitsleistung', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'uuid=' + Ruuid.value + '&arbeitsleistung=' + id
        })
        .then(json)
        .then(function (data) {
            if (data['status']) {
                AusgabeArbeitsleistung.innerHTML = ''
                SucheArbeitsleistung.value = ''
                MessageArbeitsleistung.innerHTML = 'Position Hinzugefügt!';
                sleep(100).then(() => {
                    location.reload();
                });
            }
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function ChangeArName(uuid) {
    const Text = document.getElementById('name-' + uuid);
    fetch('/api/rechnungen/UpdateArName', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'uuid=' + uuid + '&NewName=' + Text.value
        })
        .then(json)
        .then(function (data) {
            if (data['status']) {
                AusgabeArbeitsleistung.innerHTML = ''
                SucheArbeitsleistung.value = ''
                MessageArbeitsleistung.innerHTML = 'Name aktualisiert!';
                sleep(500).then(() => {
                    MessageArbeitsleistung.innerHTML = ''
                });
            }
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function RemoveAr(uuid) {
    const position = document.getElementById('positon-' + uuid);
    fetch('/api/rechnungen/RemoveAr', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'uuid=' + uuid
        })
        .then(json)
        .then(function (data) {
            if (data['status']) {
                MessageArbeitsleistung.innerHTML = 'Position entfernt';
                position.remove();
                GetFullArCost(Ruuid.value);
                sleep(500).then(() => {
                    MessageArbeitsleistung.innerHTML = ''
                });
            }
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function UpdateArPosition(uuid, param, art) {
    var value = 0;
    if (param == 1) {
        const ArZeit = document.getElementById('zeit-' + uuid);
        value = ArZeit.value;
    } else if (param == 2) {
        const ArStk = document.getElementById('stk-' + uuid);
        value1 = ArStk.value;
        value = value1.replace(',', '.');
    } else {
        const ArWert = document.getElementById('wert-' + uuid);
        value1 = ArWert.value;
        value = value1.replace(',', '.');
    }

    fetch('/api/rechnungen/UpdateArPosition', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'uuid=' + uuid + '&art=' + param + '&value=' + value
        })
        .then(json)
        .then(function (data) {
            if (data['status']) {
                MessageArbeitsleistung.innerHTML = 'Position aktualisiert';
                if (art == 1) {
                    RenderArCost(uuid, 1)
                } else {
                    RenderArCost(uuid, 2)
                }
                sleep(200).then(() => {
                    MessageArbeitsleistung.innerHTML = '';
                    if (art == 1) {
                        RenderArCost(uuid, 1)
                    } else {
                        RenderArCost(uuid, 2)
                    }
                });
            }
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function timeToDecimal(t) {
    t = t.split(':');
    return parseFloat(parseInt(t[0], 10) + parseInt(t[1], 10) / 60);
}

function Commas(x) {
    var number = Number(x);
    return number.toLocaleString('de-DE', {
        style: 'currency',
        currency: 'EUR'
    });
}

function RenderArCost(uuid, param) {
    var temp = 0;
    const ArCost = document.getElementById('wert-' + uuid),
        FullPrice = document.getElementById('gesamt-' + uuid);


    var Cost = ArCost.value;
    var ArCost2 = Number(Cost.replace(',', '.'));
    switch (param) {
        case 1:
            const ArTime = document.getElementById('zeit-' + uuid);
            var ArTime2 = timeToDecimal(ArTime.value);
            temp = ArTime2 * Number(ArCost2);
            break;
        case 2:
            const ArStk = document.getElementById('stk-' + uuid);
            var ArStuk = ArStk.value;
            var ArStk2 = Number(ArStuk.replace(',', '.'));
            temp = ArStk2 * ArCost2;
            break;
        default:
            break;
    }
    FullPrice.innerHTML = Commas(temp.toFixed(2));
    GetFullArCost(Ruuid.value);
}

function GetFullArCost(uuid) {
    const gesamt = document.getElementById('gesamt');
    fetch('/api/rechnungen/GetFullArCost', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'uuid=' + uuid
        })
        .then(json)
        .then(function (data) {
            var ArTime = 0;
            var ArStk = 0;
            for (let i = 0; i < data.length; i++) {
                if (data[i].art == 1) {
                    ArTime += (timeToDecimal(data[i].zeit) * data[i].wert);
                } else {
                    ArStk += (data[i].stk * data[i].wert);
                }

            }
            var price = (ArStk + ArTime);
            gesamt.innerHTML = '<b>' + Commas(price.toFixed(2)) + '</b>';
            UpdateArMwSt(price.toFixed(2))
        })
        .catch(function (error) {
            console.log('Request failed', error);
        });
}

function UpdateArMwSt(x) {
    const gesamtMwstAr = document.getElementById('gesamtMwstAr');

    var sum = x * 1.19;
    gesamtMwstAr.innerHTML = Commas(sum - x);
}