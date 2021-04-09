

function ChangeTime($uuid, $func){
    var value = ''; 
    var zeit = '';
    switch($func){
        case 1: 
            value = 'garantie'; 
            zeit = document.getElementById('garantie-' + $uuid);
        break; 
        case 2: 
            value = 'mfs'; 
            zeit = document.getElementById('mfs-' + $uuid)
        break;
        case 3: 
            value = 'aufbau'; 
            zeit = document.getElementById('aufbau-' + $uuid)
        break; 
        default: 
            value = ''; 
            zeit = '';
        break;  
    }

    fetch('/api/admin/edittime', {
        method: 'post',
        headers: {
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
        },
        body: 'uuid=' + $uuid + '&value=' + value + '&zeit=' + zeit.value
    })

    .then(function (data) {
        
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
}