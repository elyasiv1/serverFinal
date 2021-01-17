const BL = require('./BL')
const { query } = require('express')

function Router(app) {
    // app.get('/', (req, res) => {
    //     res.send(`<h1>home/</h1>`)
    // })


    // app.get('/items', async (req, res) => {
    //     try {
    //         const result = await BL.items.readAll()
    //         res.send(result)
    //     } catch (error) {
    //         res.send({ error: error.message || error })
    //     }
    // })
    app.get('/users', async (req, res) => {
        try {
            result = await BL.users.readAll()
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.get('/users/:email', async (req, res) => {
        try {
            const
                { headers, params } = req,
                result = await BL.users.read({ email: params.email, token: headers.authorization })
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/user/:id', async (req, res) => {
        try {
            const { id } = req.params
            const result = await BL.users.readOne(id)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.post('/user', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.users.register(body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.post('/user/login', async (req, res) => {
        try {
            const result = await BL.users.login(req.body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.put('/user', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.users.update(body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.delete('/user/:id', async (req, res) => {
        try {
            const { id } = req.params
            const result = await BL.users.delete(id)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.post('/user', async (req, res) => {
        try {
            const { body } = req
            const result = await BL.users.update(body)
            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }

    })

    app.get('/items', async (req, res) => {
        // app.get('/items/:price=${departmentFilter.barPrice}&department=${departmentFilter.filterName}', async (req, res) => {
        try {


            const { price, department } = req.query

            const result = await BL.items.read(price, department)



            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })
    app.get('/itemss', async (req, res) => {
        try {
            const { price } = req.query

            const result = await BL.items.readAll(price)

            res.send(result)
        } catch (error) {
            res.send({ error: error.message || error })
        }
    })

    app.get('/item/:id', async (req, res) => {
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
