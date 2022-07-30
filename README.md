# Weather BOT

## ⚠️ PROJET FERME ⚠️
**Ce bot n'est plus fonctionnel en raison de l'évolution de la bibliothèque Discord.js**

### **Objectif** : Avoir un bot discord qui donne la météo d'une ville donnée

#### Compte OpenWeather
- Créer un compte [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)
- Depuis ce compte, créer une nouvelle clé API et la mettre dans le fichier ``src/keys.json``

#### Bot Discord

1. Créer une nouvelle application Discord sur le Portail Developer : [https://discord.com/developers/applications](https://discord.com/developers/applications)
2. Aller dans l'onglet ``OAuth2`` à gauche puis ``URL Generator``
3. Selectionner ``bot`` puis `` Send Messages in Threads``
4. Enfin, copier le lien généré (utiliser le pour inviter le bot dans le serveur)
5. Aller dans l'onglet ``Bot`` à gauche et cliquer sur ``Add Bot``
6. Donner un nom et une photo au Bot
7. Cliquer sur le bouton ``Reset Token``, le copier et le coller dans le fichier ``src/keys.json``
8. En bas de la page, sélectionner :
    - Send Messages in Threads

#### Lancer le bot
- ``npm install``
- ``npm run start``


#### Utiliser le bot sur Discord
Commande : ``!weather [ville]``
