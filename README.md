### Available scripts

`yarn install` - install dependencies

`yarn d` - run development server

`yarn b` - build distributor package

`yarn p` - run prettier formatting

`yarn t` - run type check

### About the project

You can view project here: https://fusionbrain-ai-pictures-generation.vercel.app/

This is the frontend part of the project that allows you to make queries on AI Fusionbrain.ai. This project allows you to generate beautiful images based on the user's request, these images will be stored on the server and shown in the user's search history on the right side. Making requests directly to the Fusionbrain.ai API from the frontend is prohibited, you will get a Cors Error, and your public key and secter can be stolen, so you need a backend layer that will make these requests and securely store your public key and secter. The backend part of this project is here https://github.com/SergeiSolod/fusionbrain-ai-pictures-generator-backend

### .env

`REACT_APP_STATUS` - PROD/DEV depending on whether it’s on dev or prod

`VITE_API_PROD` - backend url to which to make requests in prod, for example https://fusionbrain-ai-pictures-generation-backend.vercel.app/

`VITE_API_DEV` - backend url to which to make requests in dev, for example http://localhost:5000

### Node version

The project is made on nodejs v21.6.1, yarn v1.22.21, any current version will do

### Stack

TypeScript, React, Redux, Saas, HTML5, Vite
