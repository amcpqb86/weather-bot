// Constantes
const prefix = "!weather";
var now = new Date();
var heure = now.getHours();

// require
const fetch = require("node-fetch");
const discord = require('discord.js');
const client = new discord.Client;
const keys = require('./keys.json');
const request = require("request");
let count = 1;

client.on('ready', () => {
    console.log('\x1b[32m', 'Connexion réussie !', '\x1b[0m');
});

client.on('message', message => {
    if (message.content.startsWith(prefix)) {
        var city = message.content.slice(prefix.length).trim();
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${keys.TOKEN_WEATHER}&units=metric&lang=fr`;
        request(url, function(err, response, body) {
            if (err) {
                message.channel.send(":x: Erreur de connexion à l'API ! :x:");
            } else {
                var json = JSON.parse(body);
                try {
                    var temp = json["main"]["temp"];
                    var description = json["weather"][0]["main"];
                    var emojiName = "temp";
                    var iconName = "temp";
                    switch (description) {
                        case 'Thunderstorm':
                            emojiName = "cloud_lightning";
                            iconName = "11";
                            description = "Orage";
                            break;
                        case 'Drizzle':
                            emojiName = "cloud";
                            iconName = "09"
                            description = "Brouillard";
                            break;
                        case 'Rain':
                            emojiName = "cloud_rain";
                            iconName = "10"
                            description = "Pluie";
                            break;
                        case 'Snow':
                            emojiName = "cloud_snow";
                            iconName = "13";
                            description = "Neige";
                            break;
                        case 'Clear':
                            emojiName = "sunny";
                            iconName = "01";
                            description = "Clair";
                            break;
                        case 'Clouds':
                            emojiName = "white_sun_cloud";
                            iconName = "02";
                            description = "Nuageux";
                            break;
                    }
                    if (heure >= 21 || heure <= 7) {
                        iconName += "n";
                    } else {
                        iconName += "d";
                    }
                    var emoji = (`:${emojiName}:`);

                    message.channel.send({
                        embed: {
                            color: "ff5733",
                            author: {
                                name: city
                            },
                            fields: [{
                                    name: "Météo",
                                    value: emoji + " " + description
                                },
                                {
                                    name: "Température",
                                    value: temp + " °C"
                                }
                            ],
                            timestamp: new Date()
                        }
                    });
                    console.log("\x1b[34m", count, ". Requête pour : ", city, ", Données : ", description, " | ", temp, "\x1b[0m");
                    count++;
                } catch (e) {
                    message.channel.send(":x: Erreur de données ! :x:");
                    console.log("Erreur : ", e);
                }
            }
        });
    }
});

client.login(keys.TOKEN_DISCORD);