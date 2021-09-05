// noinspection DuplicatedCode

const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("nodejs week3 homework"));

// ---------------- Get Requests ----------------
app.get("/calculator/add", (req, res) => {
    const reqQuery = req.query;
    let result = 0;
    for (const param in reqQuery) {
        if (isNaN(Number(reqQuery[param]))){
            return res.status(406).json({ error: "The input is not a number!" });
        } else {
            result = result + Number(reqQuery[param]);
        }
    }
    res.send("Addition Result: " + result);
});

app.get("/calculator/subtract", (req, res) => {
    const reqQuery = req.query;
    let result = 0;
    for (const param in reqQuery) {
        if (isNaN(Number(reqQuery[param]))){
            return res.status(406).json({ error: "The input is not a number!" });
        } else {
            if (result === 0){
                result = Number(reqQuery[param]);
            } else {
                result = result - Number(reqQuery[param]);
            }
        }
    }
    res.send("Subtraction Result: " + result);
});

app.get("/calculator/multiply", (req, res) => {
    const reqQuery = req.query;
    let result = 0;
    for (const param in reqQuery) {
        if (isNaN(Number(reqQuery[param]))){
            return res.status(406).json({ error: "The input is not a number!" });
        } else {
            if (result === 0){
                result = Number(reqQuery[param]);
            } else {
                result = result * Number(reqQuery[param]);
            }
        }
    }
    res.send("Multiplication Result: " + result);
});

app.get("/calculator/divide", (req, res) => {
    const reqQuery = req.query;
    let result = 0;
    for (const param in reqQuery) {
        if (isNaN(Number(reqQuery[param]))){
            return res.status(406).json({ error: "The input is not a number!" });
        } else {
            if (result === 0){
                result = Number(reqQuery[param]);
            } else {
                result = result / Number(reqQuery[param]);
            }
        }
    }
    res.send("Division Result: " + result);
});

// ---------------- Post Requests ----------------
app.post("/calculator/add", (req, res) => {
    if (isNaN(Number(req.body.firstParam))) {
        return res.status(406).json({error: "The first input is not a number"});
    } else if (isNaN(Number(req.body.secondParam))) {
        return res.status(406).json({error: "The second input is not a number"});
    } else {
        const firstNum = Number(req.body.firstParam);
        const secondNum = Number(req.body.secondParam);
        const result = firstNum + secondNum;
        res.send("First Number: " + firstNum + " Second Number: " + secondNum + " Result: " + result);
    }
});

app.post("/calculator/subtract", (req, res) => {
    if (isNaN(Number(req.body.firstParam))) {
        return res.status(406).json({error: "The first input is not a number"});
    } else if (isNaN(Number(req.body.secondParam))) {
        return res.status(406).json({error: "The second input is not a number"});
    } else {
        const firstNum = Number(req.body.firstParam);
        const secondNum = Number(req.body.secondParam);
        const result = firstNum - secondNum;
        res.send("First Number: " + firstNum + " Second Number: " + secondNum + " Result: " + result);
    }
});

app.post("/calculator/multiply", (req, res) => {
    if (isNaN(Number(req.body.firstParam))) {
        return res.status(406).json({error: "The first input is not a number"});
    } else if (isNaN(Number(req.body.secondParam))) {
        return res.status(406).json({error: "The second input is not a number"});
    } else {
        const firstNum = Number(req.body.firstParam);
        const secondNum = Number(req.body.secondParam);
        const result = firstNum * secondNum;
        res.send("First Number: " + firstNum + " Second Number: " + secondNum + " Result: " + result);
    }
});

app.post("/calculator/divide", (req, res) => {
    if (isNaN(Number(req.body.firstParam))) {
        return res.status(406).json({error: "The first input is not a number"});
    } else if (isNaN(Number(req.body.secondParam))) {
        return res.status(406).json({error: "The second input is not a number"});
    } else {
        const firstNum = Number(req.body.firstParam);
        const secondNum = Number(req.body.secondParam);
        const result = firstNum / secondNum;
        res.send("First Number: " + firstNum + " Second Number: " + secondNum + " Result: " + result);
    }
});

app.listen(3000, () => console.log(`Calculator:listening on port 3000`));

