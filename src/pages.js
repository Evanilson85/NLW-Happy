const bancoDados = require("../src/database/db")
const saveDados = require("../src/database/saveData")

module.exports = {

    index(req, res) {
        const city = req.query.city   //! quando eu uso query ele se refere as informações depois do ? na minha url
        return res.render("index", { city: "Diamantina", estado: "Minas Gerais" })
    },
    async orphanage(req, res) {

        const id = req.query.id

        try {
            const db = await bancoDados
            const result = await db.all(`SELECT * FROM teste WHERE id = "${id}"`)
            //  console.log(selectOrp)
            //console.log(orphanage[0])
            const orphanage = result[0]
            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            if (orphanage.weekends == "0") {

                orphanage.weekends = false

            } else {

                orphanage.weekends = true
            }

            return res.render("orphanage", { orphanage })

        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }
        //  return res.render("orphanage")
    },
    async orphanages(req, res) {

        try {
            const db = await bancoDados
            const orphanages = await db.all("SELECT * FROM teste")
            //  console.log(selectOrp)
            return res.render("orphanages", { orphanages })

        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")

        }

    },
    createOrphanage(req, res) {

        return res.render("create-orphanage")

    },

    async saveOrphanage(req, res) {

        const fields = req.body
        //console.log(fields)

        if (Object.values(fields).includes("")) {
            return res.send("Todos os campos tem que está preencido")
        }

        //salvar 

        try {

            const db = await bancoDados
            await saveDados(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                about: fields.about,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                hours: fields.hours,
                weekends: fields.weekends
            })


            return res.redirect("/orphanages")

        } catch (error) {
            console.log(error)
            return res.send("Erro no banco de dados")
        }



    }

}