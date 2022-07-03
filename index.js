<<<<<<< HEAD
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

=======
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

>>>>>>> 0f85a81e32a611b34f15a1fbf981d61a7b17a684
app.listen(port, () => console.log(`Server running: ${port}`))