const express = require("express");
const router = express.Router();

const meals = require("./../data/meals.json");

router.get("/", async (request, response) => {
    try {
        const reqQuery = request.query;

        if (reqQuery.maxPrice) {
            if (isNaN(parseInt(reqQuery.maxPrice))) {
                return response.status(400).json({error: "The input is not a number!"});
            } else {
                response.send(meals.filter(meal => meal.price <= reqQuery.maxPrice));
            }
        } else if (reqQuery.title) {
            response.send(meals.filter(meal => meal.title.toLowerCase().includes(reqQuery.title)));
        } else if (reqQuery.createdAfter) {
            if (isNaN(parseInt(reqQuery.createdAfter))) {
                return response.status(400).json({error: "The input is not a date!"});
            } else {
                response.send(meals.filter(meal => Date.parse(meal.createdAt) >= Date.parse(reqQuery.createdAfter)));
            }
        } else if (reqQuery.limit) {
            if (isNaN(parseInt(reqQuery.limit))) {
                return response.status(400).json({error: "The input is not a number!"});
            } else {
                response.send(meals.slice(0, reqQuery.limit));
            }
        } else {
            response.send(meals);
        }
    } catch (error) {
        throw response.send(400).json(error);
    }
});

router.get("/:id", async (request, response) => {
    if (isNaN(parseInt(request.params.id)))
        return response.status(400).json({error: "The input is not a number!"});
    try {
        const filteredMeals = meals.filter(meals => meals.id === parseInt(request.params.id));

        if (filteredMeals.length === 0) {
            return response.status(200).json({message: "Meal not found!"});
        } else {
            response.send(filteredMeals[0]);
        }

    } catch (error) {
        throw response.send(400).json(error);
    }
});

module.exports = router;
