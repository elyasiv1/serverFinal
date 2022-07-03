require('dotenv').config()//הצפנה
const
    bodyParser = require('body-parser'),
    express = require('express'),
    router = require('./router'),
    app = express(),
    port =5555// ניתן לצנזר ב.env



 app.use(require('cors')()) 
app.use(bodyParser.json())

app.use(express.static('build'))

router(app)

app.listen(port, () => console.log(`Server running: ${port}`))