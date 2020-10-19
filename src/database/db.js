const db = require("sqlite-async")


function execute(bancoD) {

    // console.log("estou aqui")
    return bancoD.exec(`
        CREATE TABLE IF NOT EXISTS  teste (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            hours TEXT,
            weekends TEXT
        );
    `)

   
}

module.exports = db.open(__dirname + "/database.sqlite").then(execute) // estou falando que quando o meu banco de dados abrir exexute essa função com a promisse