/**
 * Created by coolbong on 2017-03-15.
 */
navigator.usb.getDevices().then(devices => {
    devices.map(device => {
        console.log(device.productName);
        console.log(device.manufacturerName);
    });
})