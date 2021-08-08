
/* Part 3: More queries */
use hyf_lesson2;

/* 1. Get all the tasks assigned to users whose email ends in @spotify.com */
SELECT task.title, user.email
FROM task
  JOIN user_task ON user_task.task_id = task.id
  JOIN user ON user_task.user_id = user.id
WHERE user.email LIKE '%@spotify.com';

/* 2. Get all the tasks for 'Donald Duck' with status 'Not started' */
SELECT task.title, user.name as user, status.name as status
FROM task
  JOIN user_task ON user_task.task_id = task.id
  JOIN user ON user_task.user_id = user.id
  JOIN status ON status.id = task.status_id
WHERE status.name LIKE "Not started" AND user.name LIKE "Donald Duck";

/* 3. Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number) */
SELECT task.title, user.name as user, task.created
FROM task
  JOIN user_task ON user_task.task_id = task.id
  JOIN user ON user_task.user_id = user.id
WHERE month(task.created) = 9 AND user.name LIKE "Maryrose Meadows";

/* 4. Find how many tasks where created in each month, e.g. how many tasks were */
/* created in october, how many tasks were created in november, etc. (hint: use group by) */
SELECT COUNT(task.id) as created_tasks, month(task.created) as month
FROM task GROUP BY month(task.created)
ORDER BY created_tasks;

