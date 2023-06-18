## Brainflix

Brainflix is a fully responsive full-stack web application that mimics YouTube. Instead of using videos we used photos. This was one of the first React apps that I created while attending the Brainstation Software Engineering bootcamp. Some of the features include being able to select what video you would like to watch, commenting on each video and uploading a video. Initially the project was built using Express and node for the backend but I decided to go back and build a database using MySQL ,Knex, express and node.

![Parts Bin](parts-bin.gif)

## Tech Stack

**Client:** 
HTML5,CSS3,SASS,Javascript,React,NodeJS

[![My Skills](https://skillicons.dev/icons?i=js,html,css,sass,react,nodejs,)](https://skillicons.dev)

**Server:**
NodeJS, Express, MySQL, knex

[![My Skills](https://skillicons.dev/icons?i=nodejs,express,mysql)](https://skillicons.dev)


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DB_LOCAL_HOST`

## Run Locally

Clone the project

```bash
  git clone git@github.com:David-McCaig/david-mccaig-brainflix.git for front end
```

Install dependencies

```bash
  npm install 
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

