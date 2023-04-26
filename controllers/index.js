const awesomeFunction = (req, res, next) => {
    res.json("Ryan Jones");
};

const returnAnotherPerson = (req, res, next) => {
    res.json("Steve Rogers");
};

module.exports = { awesomeFunction, returnAnotherPerson };