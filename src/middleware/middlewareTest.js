const middlewareTest = (req, res, next) => {
    console.log(`Patch berikut yang di jalankan ${req.path}`);
    next();
}

const middlewareCatchError = (err, req, res, next) => {
    res.status(500).json({
        message: `Server error`,
        code: 500,
        error: err
    })
}

module.exports = {
    middlewareTest,
    middlewareCatchError
};