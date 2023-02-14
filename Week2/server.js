const express = require('express');
const app = express();

const PORT = 3000;
    
//List of constructor names
let constructors = [
    {team: "Alfa Romeo"},
    {team: "AplhaTauri"},
    {team: "Alpine"},
    {team: "Aston Martin"},
    {team: "Ferrari"},
    {team: "HAAS"},
    {team: "Mclaren"},
    {team: "Mercedes"},
    {team: "Red Bull"},
    {team: "Williams"}
]
//List of driver names
let drivers = [
    {team: "Red Bull", names:"Max Verstappen & Sergio Perez"},
    {team: "Ferrari", names:"Charles Leclerc & Carlos Sainz"},
    {team: "Mercedes", names:"George Russel & Lewis Hamilton"},
    {team: "Mclaren", names:"Daniel Ricciardo & Lando Norris"},
    {team: "Alpine", names:"Fernando Alonso & Esteban Ocon"},
    {team: "Alpha Romeo", names:"Valtteri Bottas & Zhou Guanyu"},
    {team: "Aston Martin", names:"Sebastian Vettel & Lance Stroll"},
    {team: "HAAS", names:"Kevin Magnussen & Mick Schumacher"},
    {team: "AlphaTauri", names:"Pierre Gasly & Yuki Tsunoda"},
    {team: "Williams", names:"Alexander Albon & Nicholas Latifi"},
]
//List of all the races in the 2022 calendar
let races = [
    {location: "Bahrain International Circuit, Bahrain"},
    {location: "Jeddah Corniche Circuit, Saudi Arabia"},
    {location: "Melbourne Grand Prix Circuit, Australia"},
    {location: "Autodromo Enzo e Dino Ferrari, Italy"},
    {location: "Miami International Autodrome, USA"},
    {location: "Circuit de Barcelona-Catalunya, Spain"},
    {location: "Circuit de Monaco, Italy"},
    {location: "Baku City Circuit, Baku"},
    {location: "Circuit Gilles-Villeneuve, Canada"},
    {location: "Silverstone Circuit, England"},
    {location: "Red Bull Ring, Austria"},
    {location: "Circuit Paul Ricard, France"},
    {location: "Hungaroring, Hungary"},
    {location: "Circuit de Spa-Francorchamps, Belgium"},
    {location: "Circuit Zandvoort, Netherlands"},
    {location: "Autodromo Nazionale Monza, Italy"},
    {location: "Marina Bay Street Circuit, Singapore"},
    {location: "Suzuka International Racing Course, Japan"},
    {location: "Circuit of The Americas, USA"},
    {location: "Autódromo Hermanos Rodríguez, Mexico"},
    {location: "Autódromo José Carlos Pace, Brazil"},
    {location: "Yas Marina Circuit, Abu Dhabi"}
]
//GET http://localhost:3000
app.get('/', (req, res) => {
    res.send('Formula 1 Facts')
})
//GET http://localhost:3000/constructors
app.get('/constructors', (req, res) => {
    res.send(constructors)
});
//GET http"//localhost:3000/drivers
app.get('/drivers', (req, res) => {
    res.send(drivers)
});
//GET http://localhost:3000/races
app.get('/races', (req, res) => {
    res.send(races)
});
//server start logic
app.listen(PORT, () => {
})
