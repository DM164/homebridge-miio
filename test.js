const miio = require('miio');

let isOn = false
miio.device({ address: '192.168.1.18', token: 'e12e382dcc92306ca841dffdafe77f5f' })
    .then(device => {
        console.log(device);
        // Get if the light is on
        device.power()
            .then(arg => {
                isOn = arg;
                console.log(isOn)
            });
    })
    .catch(err => console.log(err));
