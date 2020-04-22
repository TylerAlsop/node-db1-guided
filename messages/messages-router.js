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

})


/////////////// POST ///////////////

router.post("/", async (req, res, next) => {

})

/////////////// PUT ///////////////

router.put("/:id", async (req, res, next) => {

})

/////////////// DELETE ///////////////

router.delete("/:id", async (req, res, next) => {

})

module.exports = router