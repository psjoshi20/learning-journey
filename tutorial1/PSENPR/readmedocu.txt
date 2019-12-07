readme
pi@raspberrypi:~/tutorial1 $ mkdir PSENPR
pi@raspberrypi:~/tutorial1 $ cd PSENPR/
pi@raspberrypi:~/tutorial1/PSENPR $ npm init -y
Wrote to /home/pi/tutorial1/PSENPR/package.json:

{
  "name": "PSENPR",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}



npx express-generator --no-view --git
npx: installed 10 in 3.792s
destination is not empty, continue? [y/N] y

   create : public/
   create : public/javascripts/
   create : public/images/
   create : public/stylesheets/
   create : public/stylesheets/style.css
   create : routes/
   create : routes/index.js
   create : routes/users.js
   create : public/index.html
   create : .gitignore
   create : app.js
   create : package.json
   create : bin/
   create : bin/www

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=psenpr:* npm start
npm install --save cors
npm notice created a lockfile as package-lock.json. You should commit this file.
+ cors@2.8.5
added 3 packages from 3 contributors and audited 3 packages in 2.696s
found 0 vulnerabilities
npx eslint --init
npx: installed 123 in 15.367s
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? React
? Does your project use TypeScript? No
? Where does your code run? Browser
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Standard: https://github.com/standard/standard
? What format do you want your config file to be in? JSON
Checking peerDependencies of eslint-config-standard@latest
Local ESLint installation not found.
The config that you've selected requires the following dependencies:

eslint-plugin-react@latest eslint-config-standard@latest eslint@>=6.2.2 eslint-plugin-import@>=2.18.0 eslint-plugin-node@>=9.1.0 eslint-plugin-promise@>=4.2.1 eslint-plugin-standard@>=4.0.0
? Would you like to install them now with npm? Yes
Installing eslint-plugin-react@latest, eslint-config-standard@latest, eslint@>=6.2.2, eslint-plugin-import@>=2.18.0, eslint-plugin-node@>=9.1.0, eslint-plugin-promise@>=4.2.1, eslint-plugin-standard@>=4.0.0
+ eslint-config-standard@14.1.0
+ eslint-plugin-standard@4.0.1
+ eslint-plugin-node@10.0.0
+ eslint-plugin-import@2.18.2
+ eslint-plugin-react@7.17.0
+ eslint@6.7.2
+ eslint-plugin-promise@4.2.1
added 195 packages from 117 contributors and audited 482 packages in 23.885s
found 0 vulnerabilities

Successfully created .eslintrc.json file in /home/pi/tutorial1/PSENPR
ESLint was installed locally. We recommend using this local copy instead of your globally-installed copy.

make change in 
'use strict';
const globals = require('./src/globals.json');
module.exports = {
  parser: require.resolve('@typescript-eslint/parser'),
  extends: [
    'plugin:eslint-plugin/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:node/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: [
    'eslint-plugin',
    'eslint-comments',
    'node',
    'prettier',
    'import',
    '@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2018,
  },
  env: {
    node: true,
    es6: true,
  },
  rules: {
    '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'no-else-return': 'error',
    'no-negated-condition': 'error',
    eqeqeq: ['error', 'smart'],

pm install --save-dev jest eslint-plugin-jest
npm WARN deprecated left-pad@1.3.0: use String.prototype.padStart()
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"arm"})

+ eslint-plugin-jest@23.1.1
+ jest@24.9.0
added 404 packages from 318 contributors and audited 876867 packages in 46.76s
found 0 vulnerabilities
6. Debugging

	Use [Debug](https://github.com/visionmedia/debug) to add your debugging messages to the terminal.

	```javascript
	const debug = require('debug')('app:users')

	debug('Hello World!')
npm install --save dotenv
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"arm"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"arm"})

+ dotenv@8.2.0
added 1 package and audited 877009 packages in 18.128s
found 0 vulnerabilities
Copy the `env.sample` file to `.env` and update the variables in `.env`:

	```
	cp env.sample .env
	```

	You will then be able to view the env variables via `process.env.VAR_NAME`. As a convention, environment variables are all caps and underscore case.

npm install --save passport passport-local sequelize pg pg-hstore
npm WARN tsutils@3.17.1 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules/chokidar/node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"arm"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.9 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.9: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"arm"})

+ pg-hstore@2.3.3
+ passport-local@1.0.0
+ pg@7.14.0
+ sequelize@5.21.2
+ passport@0.4.0
added 38 packages from 96 contributors and audited 877054 packages in 22.874s
found 0 vulnerabilities


