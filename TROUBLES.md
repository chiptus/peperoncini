heroku

if had some errors while installing packages remove cache by using:
  heroku config:set NODE_MODULES_CACHE=false
after that unset using 
  heroku config:unset NODE_MODULES_CACHE


if herkou complains on missing .env file change the loading of dotenv:
require('dotenv').config({ silent: true });



create-react-app
get env vars into the app by using adding 
REACT_APP_var to .env
in the app process.env.REACT_APP_
