/*
    Create a project management application.

    Database:
        Create a task table that has the following columns:

            task_id (SERIAL PRIMARY KEY)
            content (NOT NULL and VARCHAR) - this will contain the task content
            hours (INTEGER) - this will contain how many hours it takes to complete the task
            person (NOT NULL and VARCHAR) - this will contain who needs to complete the task
        
        Create a person table that has the following columns and rows:

            person_id (SERIAL PRIMARY KEY)
            name (NOT NULL and VARCHAR) - name of the person 
                Amir
                Samson
                Samuel
                Surafel
                Estif
                Alpha
                Tinsae
                Anania
                Mule
                Nuseyba
                Eleni
                Natnael


    Backend:

        Create the following endpoints:

            /create:
                Creates the task item. This will take in the following values: task item content, 
                    how long the task will take (in hours), who the task is assigned to.
                
                If no person name is provided, then the endpoint must assign the task to "General".

            /search:
                Allows the user to search for tasks by task_id OR by person

            /edit:
                Allows the user to edit a task and change who it's assigned to

            /delete:
                Allows the user to delete a task based on it's task_id

            /addPerson:
                Allows the user to add a new person to the person table

            /removePerson:
                Allows the user to delete a person from the database
*/