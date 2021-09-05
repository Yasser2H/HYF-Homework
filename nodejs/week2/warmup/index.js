const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week2 homework"));


app.get("/numbers/add", (req, res) => {
    const reqQuery = req.query;
    if (isNaN(reqQuery.first)) {
        return res.status(406).json({error: "The first input is not a number"});
    } else if (isNaN(reqQuery.second)) {
        return res.status(406).json({error: "The second input is not a number"});
    } else {
        const firstNum = parseInt(reqQuery.first);
        const secondNum = parseInt(reqQuery.second);
        const result = firstNum + secondNum;
        res.send("First Number: " + firstNum + " Second Number: " + secondNum + " Sum: " + result);
    }
});

app.get("/numbers/multiply/:x/:y", (req, res) => {
    const reqParams = req.params;
    if (isNaN(reqParams.x)) {
        return res.status(406).json({error: "The first input is not a number"});
    } else if (isNaN(reqParams.y)) {
        return res.status(406).json({error: "The second input is not a number"});
    } else {
        const firstNum = parseInt(reqParams.x);
        const secondNum = parseInt(reqParams.y);
        const result = firstNum * secondNum;
        res.send("First Number: " + firstNum + " Second Number: " + secondNum + " Multiplication: " + result);
    }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));
