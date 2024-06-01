# social-network-api-practice
Node.js application that uses npm packages for Express.js, Mongoose, and Dotenv to connect to a MongoDB database and carry out CRUD (Create, Read, Update, Delete) Process for manipulating that data in the database.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)

## Description
This back-end e-commerce application was built from scratch with Javascript. The application uses the Mongoose npm to interact and build out a MongoDB database through JavaScript controller files, api routes, and models. Since this faux "social media" database is back-end only and utilizes Node.js, it runs shell scripted commands in the terminal in order to connect to MongoDB and then a server is started locally to then test and manipulate data on that database. All of this enables the user to connect to the database and go through the CRUD (Create, Read, Update, and Delete) Process via server routes and Models that have been coded with JavaScript. The Insomnia.Rest platform was used to test each one of the server routes and carry out the entire CRUD process successfully with every step.

<img width="1440" alt="Social-media-app-api-routes-practice-screenshot" src="https://github.com/apurificato/social-network-api-practice/assets/161912493/8ba07707-3f40-4741-8f91-c87105e0a2c7">

## Project Structure
- /config
    - client.js (file containing code that enables a MongoDB database connection)
- /controllers
    - thoughtController.js (file that contains functions that use the Thought.js model and these functions are called by each of the thought routes that have been set up correspondingly)
    - userController.js (file that contains functions that use the User.js model and these functions are called by each of the user routes that have been set up correspondingly)
- /models (folder containing JavaScript files that initialize object models in database)
    - Thought.js
    - User.js
- /node_modules
- /routes (folder of router files that enable user to create, delete, and update for each model in the database)
    - index.js
    - thought_routes.js
    - user_routes.js
- .env (contains env variables needed to connect to MongoDB database)
- .gitignore (file that lists other files to be ignored by Github when pushing to repository, such as /node_modules folder and .env file)
- LICENSE (license used for this repository - MIT License)
- package.json (file containing JSON npm dependencies and script commands)
- README (information file containing information about this specific project/application)
- server.js (JavaScript file that sets up server)

## Tools and Technologies Used in This Project
- Javascript
- Node JS (and node modules)
  - Mongoose module (to connect to MongoDB)
  - Express.js module (found on Expressjs.com)
- MongoDB
- MongoDB Compas (GUI for seeing NoSQL data objects stored in database collections)
- VS Code platform
- Github (code repository)
- Insomnia.REST (to test routes)

## How to Use
Once user opens files in VS Code platform, then they should start this back-end database program by opening their command line terminal and running "mongod". This will connect the user to the specific MongoDB database that's been set up and enabled for this project.


From here, the user needs to start the server in the Node terminal by running either "node server.js" or "npm run dev" (which starts a Nodemon development server, using a script). Once the server is enabled, the database will be connected to through local host and then work can be done.

Note: ensuring that the database is connected and running can be confirmed by opening MongoDB Compas, which will show the database in the left column, as well as show the collections/tables that exist in this database. For example, in this project there is at least two separate collections, one for Users and one for Thoughts.

With MongoDB's Compas GUI (Graphical User Interface) application open, the user can create and directly add data objects to the database if they wanted to. However, for the sake of this project and testing, it is recommended to also test all of the API routes to ensure the CRUD process is working, especially since some of the routes are complex and rely on IDs. Additionally, in Insomnia, data can be created/added or manipulated/deleted in the MongoDB database as well. This is because Insomnia can use each of the API routes that were created and set up in the the files and JSON objects can be created or altered from the platform as well.

From this point on, the user would then open the Insomnia.Rest platform so that they can test and interact with their server's API routes. In Insomnia, the user will create a project collection that contains four folders (Users, Friends, Thoughts, and Reactions - as this relates to the routes and the object data that will be stored in the database). A POST (create), multiple GET (read), a PUT (update), and a DELETE (delete) route(s) will be created in each of these folders, corresponding to their parent data (Users, Thoughts, Reactions, and Friends). From here the user can test routes to see if they are working properly and can then create JSON object data, retrieve and read objects, update, or delete them as they see fit.

Some of the routes have established more complex relationships through use of IDs as well (User ID, Thought ID, Reaction ID, and Friend ID). This enables a user to create a user object, then add friends which will be stored/linked to their user. Additionally, similar to an actual social media platform, they will be able to add thoughts that are stored/linked to their user object "account" and then reactions to each of these thoughts can be created (using other user "accounts" that they are associated with).

## Credits
- Application created by Anthony Purificato
- Rutgers Coding Bootcamp provided resources and support for this project
- OpenAI ChatGPT utilized for general coding assistance and aid upon encountering problems with JavaScript code

## License
Website/Application is available for public use, hosted on Github servers, utilizing an MIT License - see the LICENSE file for details.

![GitHub license](https://img.shields.io/badge/License-MIT-brightgreen.svg)
  
For more information on license please click the [Link](https://opensource.org/licenses/MIT)

## Questions
Check out my [GitHub](https://github.com/apurificato) 
  
For questions, reach out to me on [LinkedIn](https://www.linkedin.com/in/apurificato/)

[![My Skills](https://skillicons.dev/icons?i=linkedin)](https://www.linkedin.com/in/apurificato/)
