
## How to Run the Project on Your Windows Machine

1. **Install Required Software**:
   - Install [XAMPP](https://www.apachefriends.org/index.html) to set up PHPMyAdmin and MySQL.
   - Install [Composer](https://getcomposer.org/).
   - Install [NodeJS](https://nodejs.org/) for the React frontend.

2. **Clone the Repository**:
   - Clone the project repository to your local machine.

3. **Start Servers**:
   - Using the XAMPP control panel:
     - Start the Apache server.
     - Start the MySQL server.

4. **Create Database**:
   - Open [PHPMyAdmin](https://www.phpmyadmin.net/).
   - Create a database with the following schema:
     - "ID" (int)
     - "title" (string)
     - "description" (string)
     - "created at" (time)

5. **Configure Database Connection**:
   - Open the Laravel backend project.
   - In the `.env` file, configure the database connection settings to match the database you created in Step 4.

6. **Migrate Database**:
   - In the Laravel project directory, run the following command to migrate the database:
     ```shell
     php artisan migrate
     ```

7. **Install Node Modules**:
   - Open the frontend project in your terminal.
   - Run the following command to install all the required Node modules:
     ```shell
     npm i
     ```

8. **Run Laravel Backend**:
   - In the Laravel project directory, start the backend server by running:
     ```shell
     php artisan serve
     ```

9. **Run React Frontend**:
   - In the React frontend project directory, start the frontend by running:
     ```shell
     npm start
     ```

These steps will guide you through setting up and running the project on your Windows machine. Make sure to follow them in order for a successful setup.
