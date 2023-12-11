require('dotenv').config()
const express = require('express');
const app = express();

// Get port from environment
const PORT = process.env.PORT


app.use('/', (req, res) => {
    res.status(200).json({
        message: 'Server succes runnig',
        code: 200
    })
})

// MiddleWare for catch general error
app.use((err, req, res, next) => {
    res.status(500).json({
        message: `Server error`,
        code: 500,
        error: err
    })
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})