require('dotenv').config()
const express = require('express');
const app = express();
const routerTest = require('./router/routerTest')
const middleware = require('../src/middleware/middlewareTest')


// Get port from environment
const PORT = process.env.PORT

// Middleware for allow json format
app.use(express.json())
// middleware for tracking
app.use(middleware.middlewareTest)

// Meneruskan ke router test
app.use('/test', routerTest)


// Cek server succes runing
app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Server succes runnig',
        code: 200
    })
})

// MiddleWare for catch general error
app.use(middleware.middlewareCatchError)



app.listen(3000, () => {
    console.log(`Server running on port ${3000}`);
    
})