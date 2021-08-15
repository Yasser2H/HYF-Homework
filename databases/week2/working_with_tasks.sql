
/* Part 1: Working with tasks */
/* 1. Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id */
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES
  (
    "Example Task",
    "Example of task description",
    "2021-08-02 12:31:52",
    "2021-08-02 13:47:31",
    "2021-08-02 16:33:40",
    2
  );
INSERT INTO user_task (task_id, user_id) VALUES ("36", "11");

/* 2. Change the title of a task */
UPDATE task SET title = "Example Task Updated" WHERE id = 36;

/* 3. Change a task due date */
UPDATE task SET due_date = "2021-08-04 16:33:25"
WHERE id = 36;

/* 4. Change a task status */
UPDATE task SET status_id = 1
WHERE id = 36;

/* 5. Mark a task as complete */
UPDATE task SET status_id = 3
WHERE id = 36;

/* 6. Delete a task */
DELETE FROM task WHERE id = 36;


