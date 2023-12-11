const { v4: uuidv4 } = require('uuid');

const getData = (req, res) => {
    const date = new Date();
    res.status(200).json({
        message: 'Request succes',
        code: 200,
        data: [
            {
                'id': uuidv4(),
                'Author': "FaezolMp",
                'Quote': 'Lorem ipsum dolor is amet, lipsum Lorem',
                'Date': date
            },
            {
                'id': uuidv4(),
                'Author': "Ren Al",
                'Quote': 'Lorem ipsum dolor is amet, lipsum Lorem',
                'Date': date
            },
            {
                'id': uuidv4(),
                'Author': "An Nuril ic",
                'Quote': 'Lorem ipsum dolor is amet, lipsum Lorem',
                'Date': date
            }
        ]
    })
}

const createData = (req, res) => {
    const dataBody = req.body
    res.status(201).json({
        message: 'Create quote succes',
        code: 201,
        data: dataBody
    })
}

const updateData = (req, res) => {
    const dataBody = req.body
    res.status(200).json({
        message: 'Update quote succes',
        code: 200,
        data: dataBody
    })
}

const deleteData = (req, res) => {
    const {idUser} = req.params
    res.status(200).json({
        message: 'Delete quote succes',
        code: 200,
        data: dataBody
    })
}

module.exports = {
    getData,
    createData,
    updateData,
    deleteData,
}