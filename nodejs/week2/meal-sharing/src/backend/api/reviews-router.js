const express = require("express");
const router = express.Router();

const reviews = require("./../data/reviews.json");

router.get("/", async (request, response) => {
    try {
        response.send(reviews);
    } catch (error) {
        throw response.send(400).json(error);
    }
});

router.get("/:id", async (request, response) => {
    if (isNaN(parseInt(request.params.id)))
        return response.status(406).json({error: "The input is not a number!"});
    try {
        const filteredReviews = reviews.filter(reviews => reviews.id === parseInt(request.params.id));

        if (filteredReviews.length === 0){
            return response.status(200).json({message: "Review not found!"});
        } else {
            response.send(filteredReviews[0]);
        }

    } catch (error) {
        throw response.send(400).json(error);
    }
});

module.exports = router;
