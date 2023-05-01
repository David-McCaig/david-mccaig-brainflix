## Brainflix

Brainflix is a fully responsive full-stack web application that mimics YouTube. This was one of the first React apps that I created while attending the Brainstation Software Engineering bootcamp. Some of the features include being able to select what video you would like to watch, commenting on each video and uploading a video. Initially the project was built using Express and node for the backend but I decided to go back and build a database using MySQL ,Knex, express and node.

![Parts Bin](parts-bin.gif)


## Features
- Bikes and components section
- View and Add a new part or bike for sale with a photo 
- Fully responsive design for Mobile-Tablet-Desktop
- Token based authentication

**Future features**
- Private message system between users 

## Tech Stack

**Client:** 
HTML5,CSS3,SASS,Javascript,React,NodeJS

[![My Skills](https://skillicons.dev/icons?i=js,html,css,sass,react,nodejs,)](https://skillicons.dev)

**Server:**
NodeJS, Express, MySQL, knex
[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql)](https://skillicons.dev)

## Screenshots

### Home Page
![Home Page Screenshot](https://res.cloudinary.com/dui1zm17r/image/upload/v1682915123/Github/Screenshot_2023-05-01_at_4.23.52_PM_adnzwe.png)

### Home Page
![Home Page Screenshot](https://res.cloudinary.com/dui1zm17r/image/upload/v1682915123/Github/Screenshot_2023-05-01_at_4.24.12_PM_ac5jax.png)

### Upload Page
![Upload Page Screenshot](https://res.cloudinary.com/dui1zm17r/image/upload/v1682915571/Github/Screenshot_2023-05-01_at_4.29.59_PM_cir99l.png)

### Upload Page
![Upload Page mobile Screenshot](https://res.cloudinary.com/dui1zm17r/image/upload/v1682915578/Github/Screenshot_2023-05-01_at_4.24.50_PM_yxkkog.png)

## Run Locally

Clone the project

```bash
  git clone git@github.com:David-McCaig/david-mccaig-brainflix.git for front end
  git clone git@github.com:David-McCaig/david-mccaig-brainflix-server.git for back end
```

Install dependencies

```bash
  npm install 
```

In server side 
run migration and seed files to set up your database.

```bash
  npx knex migrate:latest 
  npx knex seed:run 
```
Start the server on the server side 

```bash
  npm run dev 
```
Start the server on the client side 

```bash
  npm run start
```
Now the app should be live! 

## API Documentation


#### Get all videos

```
  GET /videos
```

#### Get videos by id

```
  GET /videos/:id
```

#### Get selected comments by videos id

```
  GET /videos/:id/comments
```

#### Post a video

```
  Post /videos/upload
```

#### Post a comment

```
  Post /comments/upload
```

