# Sakura Study

![SakuraStudyBanner](https://user-images.githubusercontent.com/103476893/235792567-191bd114-efb2-422b-9f50-db69138e6582.jpg 'Sakura Study Logo')

## Description

Sakura Study is a MERN (MongoDB, Express.js, React, Node.js) language learning app designed to help people study Japanese using a gamified approach, similar to Duolingo. The app offers exercises for users to practice material from the popular Japanese textbook, [Genki: An Integrated Course in Elementary Japanese (3rd edition)](https://genki3.japantimes.co.jp/en/), including hiragana, katakana, kanji, vocabulary, and phrases. It also features leaderboards for users to compete with each other and track their progress, along with a dark mode feature. It was created to assist students of all ages and levels in learning Japanese in a fun and engaging way through self-study.

⭐ Note: The website may require some time for the server to spin up.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Credits](#credits)
- [Links](#links)
- [License](#license)

## Installation

To install Sakura Study on, follow these steps:

1. Clone the repository.
2. Install the dependencies in both the client and server directories by running `npm install` at the root directory.
3. Create a .env file in the server directory and add the following environment variables:

```
MONGODB_URI
JWT_SECRET
```

The MONGODB_URI is the connection string to your MongoDB database. The JWT_SECRET can be any string of your choice.

4. Run `npm run dev` at the root directory to start the development server and launch the app in your browser.
5. Navigate to http://localhost:5173/ to view the project.

## Features

Sakura Study provides a range of features to help users study Japanese including:

- Practice exercises for Hiragana, Katakana, Kanji, vocabulary, and phrases
- Track progress and compete with other users through leaderboards
- Secure user authentication and authorization using JWT
- User data management with MongoDB
- Client-server communication through GraphQL
- Sleek UI, dark mode, and responsive design using Tailwind CSS
- Efficient state management with Redux

Future features include:

- More practice exercises
- Achievements
- Profile settings

## Usage

To use Sakura Study, follow these steps:

1. Sign up and create an account.
2. Navigate to the Dashboard to practice vocabulary and phrases from your lessons.
3. Go to the Characters page to study and practice hiragana, katakana, and kanji from your lessons.
4. Check the Leaderboards to track of your progress and see other users' progress.
5. Access the Profile page to view your statistics and progress. As of now, it only tracks your total xp.
6. Toggle dark mode on or off depending on your preferences.
7. When you are done with your session, log out to protect your account.
8. To start a quiz, click on a 'Start Quiz' button in a section and begin answering questions. Select the correct choice for each question and click on the 'Check' button to check your answer. You can also skip questions by clicking the skip button. Correct answers will increase your progress while incorrect answers or skipped questions will decrease your progress. Once the progress bar is filled, the quiz will end and you will be taken to the results page.

## Screenshots

![homepage-screenshot](https://user-images.githubusercontent.com/103476893/236004214-8d6d83cd-2da8-4c5d-80de-b73d3ff52401.png 'Homepage Screenshot')

![characters-screenshot](https://user-images.githubusercontent.com/103476893/236004396-ca697d4d-8f88-4f0d-a984-2e23c86001eb.png 'Characters Page Screenshot')

![leaderboards-screenshot](https://user-images.githubusercontent.com/103476893/236004651-b7ec2888-c19f-4678-9f38-1124988bbe4b.png 'Leaderboards Page Screenshot')

![profile-screenshot](https://user-images.githubusercontent.com/103476893/236004699-44ce7f1c-a649-43eb-a051-f6f32f17c271.png 'Profile Page Screenshot')

![quiz-screenshot](https://user-images.githubusercontent.com/103476893/236004756-fbe09636-c37d-456c-9475-65c3fde118cc.png 'Quiz Screenshot')

![darkmode-screenshot](https://user-images.githubusercontent.com/103476893/236004790-f5a9ea30-56e6-46fa-a68d-db221d19a6dd.png 'Dark Mode Screenshot')

## Technologies Used

Sakura Study is built using a variety of technologies including:

- Vite
- React
- React Router
- Redux
- Node.js
- Express
- MongoDB
- GraphQL
- JWT
- Tailwind CSS
- Affinity Designer -  Original logo and image designs by [kt946](https://github.com/kt946)

## Contributing

Contributions to Sakura Study are welcome and encouraged! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Credits

- [Duolingo](https://www.duolingo.com/): A language-learning website.
- [Genki: An Integrated Course in Elementary Japanese (3rd edition)](https://genki3.japantimes.co.jp/en/): A Japanese textbook series.
- [kt946](https://github.com/kt946) - Project creator

## Links

- [Link to deployed application](https://sakurastudy.herokuapp.com)

- [Alternate link to deployed application](https://sakurastudy.onrender.com/)

- [Link to GitHub repository](https://github.com/kt946/japanese-quiz-mern-app)

## License

This project is licensed under the MIT License.
