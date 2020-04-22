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
        const messageById = await db("messages").from("messages").where("id", req.params.id).first()
        res.json(messageById)
    } catch (err) {
        next(err)
    }
})


/////////////// POST ///////////////

router.post("/", async (req, res, next) => {
    try {
        const payload = {
            title: req.body.title,
            contents: req.body.contents
        }
        // SQL Command: INSERT INTO "messages" ("title", "contents") VALUES (?, ?)
        const [id] = await db("messages").insert(payload)
        const newMessage = await db("messages").where("id", id).first()
        res.json(newMessage)
    } catch (err) {
        next(err)
    }
})

/////////////// PUT ///////////////

router.put("/:id", async (req, res, next) => {
    try {
        const payload = {
            title: req.body.title,
            contents: req.body.contents
        }
        // SQL Command: UPDATE "messages" SET "title" = '?' AND "contents" = '?' WHERE "id" = '?'
        await db("messages").where("id", req.params.id).update(payload)
        const updatedMessage = await db("messages").where("id", req.params.id).first()
        res.json(updatedMessage)

    } catch (err) {
        next(err)
    }
})

/////////////// DELETE ///////////////

router.delete("/:id", async (req, res, next) => {
    try {
        // SQL Command: DELETE FROM "messages" WHERE "id" = '?'
        await db("messages").where("id", req.params.id).del()
        res.status(204).end()
    } catch (err) {
        next(err)
    }
})

module.exports = router