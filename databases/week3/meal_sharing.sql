-- Meal Sharing Queries

-- Meal Queries
-- Get all meals
SELECT * FROM meal;

-- Add a new meal
INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ("NewMeal", "Some description", "Denmark", 10, 400.00, "2021-08-12");

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE meal.id = 1;

-- Update a meal with any id, fx 1.
-- Update any attribute fx the title or multiple attributes
UPDATE meal SET price = 250 WHERE meal.id = 1;

-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id = 7;


-- Reservation Queries
-- Get all reservations
SELECT * FROM reservation;

-- Add a new reservation
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (6, 1, "2021-08-20 17:00:00", "20 10 11 88", "NewContact", "new_contact@email.com");

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE reservation.id = 1;

-- Update a reservation with any id, fx 1.
-- Update any attribute fx the title or multiple attributes
UPDATE reservation SET meal_id = 2 WHERE reservation.id = 1;

-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id = 7;


-- Review Queries
-- Get all reviews
SELECT * FROM review;

-- Add a new review
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("NewReview", "Some details about the meal", 1, "8", "2021-08-12");

-- Get a review with any id, fx 1
SELECT * FROM review WHERE review.id = 1;

-- Update a review with any id, fx 1.
-- Update any attribute fx the title or multiple attributes
UPDATE review SET meal_id = 4 WHERE review.id = 1;

-- Delete a review with any id, fx 1
DELETE FROM review WHERE id = 7;


-- Additional Queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE meal.price < 400;

-- Get meals that still has available reservations
SELECT meal.title AS "Title", meal.max_reservations AS "Max Reservations", reservation.number_of_guests AS "Guests Number"
FROM meal
JOIN reservation ON meal.id = reservation.meal_id
WHERE meal.max_reservations > reservation.number_of_guests;

-- Get meals that partially match a title.
-- Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE meal.title like "%Meal%";

-- Get meals that has been created between two dates
SELECT * FROM meal
WHERE meal.created_date < "2021-08-10" AND meal.created_date > "2021-08-01";

-- Get only specific number of meals fx return only 5 meals
SELECT * FROM meal LIMIT 3;

-- Get the meals that have good reviews
SELECT * FROM meal JOIN review ON meal.id = review.meal_id
WHERE review.stars > 5;

-- Get reservations for a specific meal sorted by created_date
SELECT * FROM reservation JOIN meal ON meal.id = reservation.meal_id
WHERE meal.title LIKE "%Meal%" ORDER BY reservation.created_date ASC;

-- Sort all meals by average number of stars in the reviews
SELECT meal.title AS "Title", review.stars AS "Stars" FROM meal
JOIN review ON review.meal_id = meal.id
ORDER BY review.stars DESC;

