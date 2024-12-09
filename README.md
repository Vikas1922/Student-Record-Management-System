# Student-Record-Management-System
This is a full stack project created by using Node.js, Express js, Ejs & MySQL. Student Can register by entering our name, email & password and login with this creaditials and add our record and also they can have functionality to manipute the data (They performs CRUD operations).

---
## Requirements

For development, you will only need Node.js and npm.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v22.11.0

    $ npm --version
    10.9.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/Vikas1922/Student-Record-Management-System
    $ cd Student-Record-Management-System
    $ npm install

## Configure app

Open `a/nice/path/to/a.file` then edit it with your settings. You will need:

- A setting;
- Another setting;
- One more setting;

  ## **run the database file (queries.sql) in your local database.
  ## **After that open the index.js file and where does we create connection for connecting our node to database. In that connection you may create some changes
  const connection = mysql.connection({
  host: '127.0.0.1', //This is your localhost where you run our project
  user : 'root', //carefully notice the username when you create new connection in your database (by-default it is 'root')
  database: 'college', //this value is write as it is in your code
  password: 'xxxx' //Write password when you install our database at that time you enter a password, that password will use it here!!
  });

## Running the project

    $ node index.js

    //you also install nodemon package globally ('npm install -g nodemon') and run this project.
    $ nodemon index.js

## Simple build for production

    $ yarn build
