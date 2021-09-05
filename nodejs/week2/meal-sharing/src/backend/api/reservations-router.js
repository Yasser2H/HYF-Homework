const express = require("express");
const router = express.Router();

const reservations = require("./../data/reservations.json");

router.get("/", async (request, response) => {
    try {
        response.send(reservations);
    } catch (error) {
        throw response.send(400).json(error);
    }
});

router.get("/:id", async (request, response) => {
    if (isNaN(parseInt(request.params.id)))
        return response.status(406).json({error: "The input is not a number!"});
    try {
        const filteredReservations = reservations.filter(reservation => reservation.id === parseInt(request.params.id));

        if (filteredReservations.length === 0){
            return response.status(200).json({message: "Reservation not found!"});
        } else {
            response.send(filteredReservations[0]);
        }

    } catch (error) {
        throw response.send(400).json(error);
    }
});

module.exports = router;
