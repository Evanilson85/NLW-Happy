
const database = require("./db")
const savedb = require("./saveData")



 database.then(async db => { 



    // await savedb(db, {

     
    //     lat: "-27.2106869",
    //     lng: "-49.6222722",
    //     name: "lar das crianças",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulneralibidade social.",
    //     images: [

    //         "https://i2.wp.com/www.bebesecriancas.com.br/wp-content/uploads/2017/10/tabela-peso-e-altura-meninos-5anos.jpg?resize=620%2C330&ssl=1",
    //         "https://i2.wp.com/www.bebesecriancas.com.br/wp-content/uploads/2017/10/tabela-peso-e-altura-meninos-5anos.jpg?resize=620%2C330&ssl=1"

    //     ].toString(),
    //     whatsapp: "9837323",
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar",
    //     hours: "Horario de visita das 18h até 8h",
    //     weekends: "0"


    // })
    //const deletes =  await db.run("DELETE FROM teste WHERE id = '1' " )
   // console.log(deletes) //delete
     const selectOrp = await db.all("SELECT * FROM teste")
     console.log(selectOrp)

//     const orphanege = await db.all('SELECT * FROM teste WHERE id = "3"')
//   console.log(orphanege)


})
