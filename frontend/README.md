### Available scripts

`yarn install` - install dependencies

`yarn d` - run development server

`yarn b` - build distributor package

`yarn p` - run prettier formatting

`yarn t` - run type check

### About the project

https://youtu.be/fqXai7GcUw4 video demonstration of the project

You can view project here: https://ai-image.jsvar.com

This is the frontend part of the project that allows you to make queries. This project allows you to generate beautiful images based on the user's request, these images will be stored on the server and shown in the user's search history on the right side. Making requests directly to the API from the frontend is prohibited, you will get a Cors Error, and your public key and secter can be stolen, so you need a backend layer that will make these requests and securely store your public key and secter.

### .env

`REACT_APP_STATUS` - PROD/DEV depending on whether it’s on dev or prod

`VITE_API_PROD` - backend url to which to make requests in prod, for example https://ai-image-api.jsvar.com

`VITE_API_DEV` - backend url to which to make requests in dev, for example http://localhost:5000

### Node version

The project is made on nodejs v21.6.1, yarn v1.22.21, any current version will do

### Stack

TypeScript, React, Redux, Saas, HTML5, Vite
