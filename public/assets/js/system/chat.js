var pUUID = document.getElementById('pUUID'),
    myUUID = document.getElementById('myUUID'),
    chat = document.getElementById('chat'),
    left = '',
    i = 0;


const formatedTimestamp = (dated) => {
    var d = new Date(dated);
    var date_format_str = (d.getDate().toString().length == 2 ? d.getDate().toString() : "0" + d.getDate().toString()) + "." + ((d.getMonth() + 1).toString().length == 2 ? (d.getMonth() + 1).toString() : "0" + (d.getMonth() + 1).toString()) + "." + d.getFullYear().toString() + " " + (d.getHours().toString().length == 2 ? d.getHours().toString() : "0" + d.getHours().toString()) + ":" + ((parseInt(d.getMinutes() / 5) * 5).toString().length == 2 ? (parseInt(d.getMinutes() / 5) * 5).toString() : "0" + (parseInt(d.getMinutes() / 5) * 5).toString());
    return date_format_str;
}
document.addEventListener("DOMContentLoaded", function (event) {
    loadChat();
})

async function loadChat() {
    chat.innerHTML = '<div class="loader">Loading...</div>'
    await fetch('/api/chat/getchat', {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: 'pUUID=' + pUUID.value + '&myUUID=' + myUUID.value
        })
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Ohje hier ist ein Fehler entstanden. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    chat.innerHTML = '';
                    for (i = 0; i < Object.keys(data).length; i++) {
                        if (data[i].message_from == pUUID.value) {
                            left = ' chat-left';
                        } else {
                            left = '';
                        }
                        chat.innerHTML += '<div class="chat ' + left + '">' +
                            '<div class="chat-body">' +
                            '<div class="chat-message">' + data[i].message + '<div class="chat-footer">' + formatedTimestamp(data[i].sending_time) + '</div></div>' +
                            '</div>' +
                            '</div>'
                    }
                });
            }
        )
        .catch(function (error) {
            console.log('Request failed', error);
        });
}