## SQL Questions
1. SELECT - Retrieving Data. Write a query to list the titles and release years of all movies in the film table.

        SELECT title, release_year FROM film;


2. WHERE - Filtering Data. Write a query to find all customers whose last name starts with the letter 'S'.


        SELECT * FROM customer WHERE last_name LIKE 'S%';

3. ORDER BY - Sorting Results. List all films titles and their durations, sorted by their rental duration in descending order. If two films have the same rental duration, sort them alphabetically by title.

        SELECT title, rental_duration FROM film ORDER BY rental_duration DESC, title ASC;


4. JOIN - Combining Tables. Write a query to list all films along with their categories. Show the film title and category name.

        SELECT film.title, category.name FROM film INNER JOIN film_category ON film.film_id = film_category.film_id
        INNER JOIN category ON film_category.category_id = category.category_id;


5. AGGREGATE FUNCTIONS - Summarizing Data. Write a query to find the average rental duration for movies in each category.


        SELECT category.name, AVG(film.rental_duration) AS avg_rental_duration
        FROM film
        INNER JOIN film_category ON film.film_id = film_category.film_id
        INNER JOIN category ON film_category.category_id = category.category_id
        GROUP BY category.name;

6. COUNT - Counting Rows. Write a query to count how many films are in the Action category.

        SELECT COUNT(*)
        FROM film
        INNER JOIN film_category ON film.film_id = film_category.film_id
        INNER JOIN category ON film_category.category_id = category.category_id
        WHERE category.name = 'Action';


7. INSERT - Adding Data. Insert a new customer into the customer table. The new customer should have a first name, last name, email, and be linked to an existing store.

        INSERT INTO customer (first_name, last_name, email, store_id, active, address_id)
        VALUES ('Hank', 'Hill', 'hankhill@example.com', 1, 1, 1);


8. UPDATE - Modifying Data. Update the rental rate of all films in the Comedy category, increasing it by 10%.

        UPDATE film
        SET rental_rate = rental_rate * 1.1
        WHERE film_id IN (
            SELECT film_id 
            FROM film_category
            INNER JOIN category ON film_category.category_id = category.category_id
            WHERE category.name = 'Comedy'
        );


9. DELETE - Removing Data. Write a query to delete all films that have never been rented. Make sure to use a subquery to identify the films that haven't been rented.

            SELECT DISTINCT i.film_id
            FROM inventory i
            JOIN rental r ON i.inventory_id = r.inventory_id;

10. CREATE TABLE & ALTER TABLE - Managing Database Structure. Create a new table called movie_reviews with columns for review_id, film_id, reviewer_name, rating, and comments. Then, add a foreign key constraint linking film_id to the film table.

            CREATE TABLE movie_reviews (
            review_id SERIAL PRIMARY KEY,
            film_id INTEGER NOT NULL,
            reviewer_name VARCHAR(100),
            rating INTEGER CHECK (rating >= 1 AND rating <= 5),
            comments TEXT,
            FOREIGN KEY (film_id) REFERENCES film(film_id)
            );


## SQLAlchemy Questions

1. Understanding SQLAlchemy Automap: How do you think the `AutoModels` class works to dynamically generate SQLAlchemy ORM models from the database schema?

    I think the automodles class uses a feature to generate python classes for the database tables. It reads the table definitions directly from the database.

2. Async Database Operations: Explain the use of asynchronous database sessions in this script. Why does the script use AsyncSession instead of a regular Session, and how does this improve the efficiency of database operations?

    The script uses asyncsession because it allows the database operations to run asynchronously and doesnt have to wait for one query to finish before starting another. It improves efficency by letting the program handle other tasks while waiting for the database

3. SQLAlchemy Query Construction: In the `model_examples` function, there is a query that selects all customers whose last names start with the letter "P". See if you can write another questy that selects customers whose first name ends with the letters "n" or "a" using SQLAlchemy syntax.

            query = select(Customer).where( or_(
            Customer.first_name.like('%n'),
            Customer.first_name.like('%a')
                )
            )

4. In the `raw_sql_examples` function, there are two ways to execute SQL queries: directly via the engine using conn.execute() and using an ORM session with session.execute(). Discuss the pros and cons of executing raw SQL directly compared to using SQLAlchemy’s ORM methods.
Hint: Consider the trade-offs in terms of readability, safety (e.g., SQL injection risks), and flexibility when using raw SQL versus ORM abstractions.

            Using raw sql gives more control and flexibility for complex queries and database features, a con would be its harder to maintain and might expose the application to sql injections.
            orm methods make code readable and secure by abstracting query construction and handeling parameters automatically.
            orm queries can be less efficient and it take more effort to learn the orm syntax.