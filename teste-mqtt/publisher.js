const mqtt = require('mqtt')

const client = mqtt.connect('mqtt://54.88.77.233')

client.on('connect', () => {
    console.log('conectado ao broker MQTT');

        client.publish('test/opic','hello MQTT from EC2',() => {
            console.log('mensagem enviada');
            client.end();
        })
    
});