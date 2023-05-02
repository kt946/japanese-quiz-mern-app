# Sakura Study

![SakuraStudyBanner](https://user-images.githubusercontent.com/103476893/235792567-191bd114-efb2-422b-9f50-db69138e6582.jpg "Sakura Study Logo")

## Description

Sakura Study is a MERN language learning app designed to help people study Japanese using a gamified approach similar to Duolingo. The app is based on material from the popular Japanese textbook Genki, 3rd edition and provides users with the opportunity to practice hiragana, katakana, kanji, vocabulary, and phrases. The app also includes leaderboards for users to compete with each other and track their progress. Please note that while Sakura Study provides quizzes to help study the material, it does not teach users the Japanese language like the Genki textbooks.

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
JWT_EXPIRATION
```

The MONGODB_URI is the connection string to your MongoDB database. The JWT_SECRET can be any string of your choice. The JWT_EXPIRATION is the time (e.g. '3h') that the JWT token will expire after.

4. Run `npm run dev` at the root directory to start the development server and launch the app in your browser.
5. Navigate to http://localhost:5173/ to view the project.

## Features

Sakura Study provides a range of features to help users learn Japanese including:

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
- Improved UI
- Improved state management

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

![homepage-screenshot](https://user-images.githubusercontent.com/103476893/235795535-2701cb95-338d-49a6-a5c4-7774f1db172a.png "Homepage Screenshot")

![characters-screenshot](https://user-images.githubusercontent.com/103476893/235795705-d80a7564-3091-4528-9417-0bb3055426ce.png "Characters Page Screenshot")

![leaderboards-screenshot](https://user-images.githubusercontent.com/103476893/235795716-68deaf03-bb9e-444e-85c3-d705a2ce9fc4.png "Leaderboards Page Screenshot")

![profile-screenshot](https://user-images.githubusercontent.com/103476893/235795721-ddb6477f-5968-4146-92c7-af18c54fde33.png "Profile Page Screenshot")

![quiz-screenshot](https://user-images.githubusercontent.com/103476893/235795730-2b91f782-6734-4ab4-9230-9b4e46d291d8.png "Quiz Screenshot")

![darkmode-screenshot](https://user-images.githubusercontent.com/103476893/235795741-70df97d7-3f4e-4da0-97b5-276f7f36fb54.png "Dark Mode Screenshot")

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

## Contributing

Contributions to Sakura Study are welcome and encouraged! If you'd like to contribute to this project, please fork the repository and submit a pull request.

## Credits

- DuoLingo: A language-learning website.
- Genki: A Japanese textbook series.
- [kt946](https://github.com/kt946) - Project creator

## Links

- [Link to deployed application](https://sakurastudy.herokuapp.com)

- [Alternate link to deployed application](https://sakurastudy.onrender.com/)

- [Link to GitHub repository](https://github.com/kt946/japanese-quiz-mern-app)

## License

This project is licensed under the MIT License.
