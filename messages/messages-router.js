const express = require("express")
const db = require("../data/config")

const router = express.Router()


/////////////// GET ///////////////

router.get("/", async (req, res, next) => {
    try {
        // SQL Command: SELECT * FROM "messages"
        const messages = await db.select("*").from("messages")
        res.json(messages)
    } catch (err) {
        next(err)
    }

})

router.get("/:id", async (req, res, next) => {
    try {
        // SQL Command: SELECT * FROM "messages" WHERE "id" = ':id'
        const messageById = await db.first("*").from("messages").where("id", req.params.id)
        res.json(messageById)
    } catch (err) {
        next(err)
    }
})


/////////////// POST ///////////////

router.post("/", async (req, res, next) => {
    try {

    } catch (err) {
        next(err)
    }
})

/////////////// PUT ///////////////

router.put("/:id", async (req, res, next) => {

})

/////////////// DELETE ///////////////

router.delete("/:id", async (req, res, next) => {

})

module.exports = router