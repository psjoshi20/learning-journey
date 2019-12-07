stalling CLI
Let's start with installing CLI, you can find instructions here. Most preferred way is installing locally like this

$ npm install --save sequelize-cli
Bootstrapping
To create an empty project you will need to execute init command

$ npx sequelize-cli init
This will create following folders

config, contains config file, which tells CLI how to connect with database
models, contains all models for your project
migrations, contains all migration files
seeders, contains all seed files
Configuration
Before continuing further we will need to tell CLI how to connect to database. To do that let's open default config file config/config.json. It looks something like this

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
Now edit this file and set correct database credentials and dialect. The keys of the objects(ex. "development") are used on model/index.js for matching process.env.NODE_ENV (When undefined, "development" is a default value.).

Note: If your database doesn't exists yet, you can just call db:create command. With proper access it will create that database for you.

Creating first Model (and Migration)

before that ---in .env pls set actual database name,username,databasepassword etc
DB_NAME=todosg    
DB_SERVER=localhost
DB_PORT=5436
DB_USERNAME=reachuser
DB_PASSWORD=reachpassword
EXPRESS_SESSION_SECRET=ebe31a49c4deed96460c429d8223c2c5cf5805dd99f9458d5e9f659e5d9efd1894719cdbbd9e8b5d4a869d74d82671e75d2fe1bf53ea8c10cc1fa5454968638
    npx sequelize model:create --force --name User --attributes "username:string, password:string,  user_info:JSON"

Sequelize CLI [Node: 11.15.0, CLI: 5.5.1, ORM: 5.21.2]


ERROR: Unable to find models path (/home/pi/tutorial1/PSENPR/models). Did you run sequelize init?

pi@raspberrypi:~/tutorial1/PSENPR $ npx sequelize model:create --force --name Sg^Cer --attributes "username:string, password:string,  user_info:JSON"
pi@raspberrypi:~/tutorial1/PSENPR $ npx sequelize init

Sequelize CLI [Node: 11.15.0, CLI: 5.5.1, ORM: 5.21.2]


ERROR: The file config/config.json already exists. Run command with --force to overwrite it.

pi@raspberrypi:~/tutorial1/PSENPR $ npx sequelize init --force

Sequelize CLI [Node: 11.15.0, CLI: 5.5.1, ORM: 5.21.2]

Created "config/config.json"
Successfully created models folder at "/home/pi/tutorial1/PSENPR/models".
Successfully created migrations folder at "/home/pi/tutorial1/PSENPR/migrations".
Successfully created seeders folder at "/home/pi/tutorial1/PSENPR/seeders".
pi@raspberrypi:~/tutorial1/PSENPR $ npx sequelize model:create --force --name SgUser --attributes "username:string, password:string,  user_info:JSON"

Sequelize CLI [Node: 11.15.0, CLI: 5.5.1, ORM: 5.21.2]

New model was created at /home/pi/tutorial1/PSENPR/models/sguser.js .
New migration was created at /home/pi/tutorial1/PSENPR/migrations/20191207155747-SgUser.js .

