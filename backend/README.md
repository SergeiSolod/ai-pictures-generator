### About the project

https://youtu.be/fqXai7GcUw4 video demonstration of the project

You can view project here: https://fusionbrain-ai-pictures-generator.vercel.app/

This is the backend part of the project that allows you to make queries on AI Fusionbrain.ai. This project allows you to generate beautiful images based on the user's request, these images will be stored on the server and shown in the user's search history on the right side. 

Making requests directly to the Fusionbrain.ai API from the frontend is prohibited, you will get a Cors Error, and your public key and secter can be stolen, so you need a backend layer that will make these requests and securely store your public key and secter. The frontend part of this project is here https://github.com/SergeiSolod/fusionbrain-ai-pictures-generator-frontend

This project also has python, this file generates an image and sends a request to the fusionbrain API, node.js interacts with it through child_process. The data that will be requested via the API is obtained from the frontend part of the application. The file name is assigned randomly from 20 random numbers and letters, the files are stored on the server, and URL links are sent to the frontend.

The project uses python3, so python3 must be installed on the system to work. You also need to install the dependencies necessary for python to work so that it can generate the image. To do this, you need to run the command pip install -r requirements.txt (or pip3 install -r requirements.txt). The required dependencies are in the requirements.txt file.

### Node version

The project is made on nodejs v21.6.1, npm v10.2.4, any current version will do

### .env

`STATUS` = PROD/DEV depending on whether it’s on dev or prod

`URL_API` = API where the service will make requests, for example https://api-key.fusionbrain.ai/

`API_KEY` = api key from https://fusionbrain.ai/

`SECRET` = Secret key from https://fusionbrain.ai/

`FRONT_URL_PROD` = URL where the frontend is stored in production, for example https://fusionbrain-ai-pictures-generation.vercel.app/

`FRONT_URL_DEV` = URL where the frontend is stored in dev, for example http://localhost:5173

`URL_BACK_PROD` = URL where this backend application will be located in production, for example https://fusionbrain-ai-pictures-generation-backend.vercel.app/

`URL_BACK_DEV` = URL where this backend application will be located in dev, for example http://localhost:5000/

### Available scripts

`npm install` - install dependencies

`npm start` - run development server with hot reload mode

### Stack

JavaScript, Express
