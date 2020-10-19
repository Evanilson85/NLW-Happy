function orphanages(db, save) {
    return db.run(
        `
        INSERT INTO teste(
            lat ,
            lng ,
            name ,
            about,
            whatsapp ,
            images ,
            instructions,
            hours ,
            weekends )
            VALUES(
                    "${save.lat}",
                    "${save.lng}",
                    "${save.name}",
                    "${save.about}",
                    "${save.whatsapp}",
                    "${save.images}",
                    "${save.instructions}",
                    "${save.hours}",
                    "${save.weekends}"
             )
    `)
    
}

module.exports = orphanages