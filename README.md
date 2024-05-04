# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Environment Setup

Install [nvm for Windows](https://nodejs.org/en/download/) or [nvm](https://github.com/nvm-sh/nvm) for macOS and Linux.

```bash
# Install Node.js 16.14.2 LTS
nvm install 16.14.2

# Use the newly installed version
nvm use 16.14.2

# Install the yarn package manager
npm install -g yarn
```

### Project Setup

Run the follow commands to set up the development environment.

```bash
# Clone the repository
git clone https://github.com/cy-cheung/homepage

# Go inside the directory
cd homepage

# Install dependencies
yarn
```

To start a development version of the app with hot reload support, run:

```bash
# Start development server
yarn dev
```

To start a production version of the app, run:

```bash
# Build frontend for production
yarn build

# Start backend production server
yarn start

# Commit and push
git add .
git commit -m "commit changes"
git push

#Install gh-pages
yarn add gh-pages 

#Setup gh-pages: Modify package.json
{
  "name": "app-name",
+  "homepage": "https://<username>.github.io/<appname>",
  // ...
}
{
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    // ...
  }
}

#Deploy to GitHub page
yarn deploy
```
