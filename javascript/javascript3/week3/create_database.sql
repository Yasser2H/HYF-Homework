use meal_sharing;

CREATE TABLE `reservation` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `number_of_guests` int(10) unsigned NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `created_date` DATE,
  `contact_phonenumber` varchar(255) NOT NULL,
  `contact_name` varchar(255) NOT NULL,
  `contact_email` varchar(255) NOT NULL,
  FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `meal` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  `when` DATETIME,
  `max_reservations` int(10) unsigned NOT NULL,
  `price` DECIMAL unsigned NOT NULL,
  `created_date` DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `review` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `title` varchar(255),
  `description` varchar(255) NOT NULL,
  `meal_id` int(10) unsigned NOT NULL,
  `stars` int(10) unsigned NOT NULL,
  `created_date` DATE,
  FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Inserting meal data
INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ("Meal1", "Some description", "Denmark", 10, 200.00, "2021-08-01");
INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ("Meal2", "Some description", "Denmark", 10, 300.00, "2021-08-03");
INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ("Meal3", "Some description", "Denmark", 10, 400.00, "2021-08-04");
INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ("Meal4", "Some description", "Denmark", 10, 200.00, "2021-08-08");
INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ("Meal5", "Some description", "Denmark", 10, 300.00, "2021-08-13");
INSERT INTO meal (title, description, location, max_reservations, price, created_date)
VALUES ("Meal6", "Some description", "Denmark", 10, 400.00, "2021-08-15");

-- Inserting reservation data
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (6, 1, "2021-08-18 17:00:00", "20 10 11 11", "Contact1", "contact1@email.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (7, 2, "2021-08-19 18:00:00", "20 10 11 22", "Contact2", "contact2@email.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (4, 3, "2021-08-20 19:00:00", "20 10 11 33", "Contact3", "contact3@email.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (8, 4, "2021-08-21 17:00:00", "20 10 11 44", "Contact4", "contact4@email.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (5, 5, "2021-08-22 18:00:00", "20 10 11 55", "Contact5", "contact5@email.com");
INSERT INTO reservation (number_of_guests, meal_id, created_date, contact_phonenumber, contact_name, contact_email)
VALUES (9, 6, "2021-08-23 19:00:00", "20 10 11 66", "Contact6", "contact6@email.com");

-- Inserting review data
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Review1", "Some details about the meal", 1, "7", "2021-08-02");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Review2", "Some details about the meal", 2, "4", "2021-08-03");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Review3", "Some details about the meal", 3, "5", "2021-08-06");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Review4", "Some details about the meal", 4, "3", "2021-08-07");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Review5", "Some details about the meal", 5, "2", "2021-08-09");
INSERT INTO review (title, description, meal_id, stars, created_date)
VALUES ("Review6", "Some details about the meal", 6, "9", "2021-08-12");

