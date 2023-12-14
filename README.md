# social-network

Mini social network for deployment purpose for our final project in Transactional web application 2 course.

## Endpoint

http://social-network-env.eba-3tceqtv6.us-east-1.elasticbeanstalk.com/login

## Screenshots

![](screenshots/Screenshot%20from%202020-02-28%2023-25-47.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-02-15.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-04-54.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-06-32.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-07-23.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-07-45.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-07-06.png)
![](screenshots/Screenshot%20from%202020-02-29%2002-19-26.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-21-47.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-01-38.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-08-45.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-25-55.png)
![](screenshots/Screenshot%20from%202020-02-29%2019-26-42.png)

## Gif

![](<screenshots/ezgif.com-video-to-gif%20(1).gif>)


## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Redux](https://redux.js.org/) - State managment
- [Semantic UI React](https://react.semantic-ui.com/) - UI
- [Socket.io](https://socket.io/) - Used for realtime features
- [Node](https://nodejs.org/en/) - Used for backend
- [Mongodb](https://www.mongodb.com/) - Database

## Features

- Like posts, comments, replies
- See likes for posts, comments, replies
- Follow, unfollow
- Update user information
- Search users
- Tag people on post and in comments with autocomplete
- Send verification email
- Pagination for home feed, user profile, hashtag page, location page, notifications, comments, replies

### Realtime

- Get notification when someone likes your post, comment, reply, tag you on post or reply on comment
- Chat send text message, image
- Seen feature and activity status of user

## Installing

1. Install dependencies

```
npm i && cd client && npm i && cd ..
```

2. Create variables.env file in the root folder of project and copy and paste these variables into

```
NODE_ENV=development
DATABASE="mongodb+srv://munirkhaliqyar:2vmJgN0QHO0wDFfJ@cluster0.k5q7web.mongodb.net/finalProject"
JWT_KEY="secretkey"
EMAILUSER="example@gmail.com"
EMAILPASS="example"
HOST="localhost:5000"
ENABLE_SEND_EMAIL="false"
TEST_DATABASE="mongodb+srv://munirkhaliqyar:2vmJgN0QHO0wDFfJ@cluster0.k5q7web.mongodb.net/test"
```

3. Create variables.env file in client/ folder and copy and paste thid variable into

```
SKIP_PREFLIGHT_CHECK=true
```
4. Run project

```
npm run dev
```

## Contribute

Show your support by ⭐ the project.
