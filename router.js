const BL = require('./BL')

function Router(app) {
    app.get('/', (req, res) => {
        res.send(`<h1>home/</h1>`)
    })


    app.get('/items', async (req, res) => {
        try {
            const result = await BL.items.read()
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/item/:id', async (req, res) => {// עובד רק על _id
        try {
            const { id } = req.params
            const result = await BL.items.readOne(id)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.post('/item', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.items.create(body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.put('/item', async (req, res) => {//אפשר גם בלי האידי בכתובת?
        try {
            const { body } = req
            const result = await BL.items.update(body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.delete('/item/:id', async (req, res) => {//אפשר גם בלי האידי בכתובת?
        try {
            const { id } = req.params
            const result = await BL.items.delete(id)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })


}

module.exports = Router
