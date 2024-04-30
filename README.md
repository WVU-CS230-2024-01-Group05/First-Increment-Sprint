# Project Name
Nom Nom Next

## Motivation
 The website was designed with college students in mind, but anyone is able to use the website as long as they create an account. The target audience was college students due to us all being in college and having experienced a time, when we looked in our pantry and we had little to no ingredients, without an idea of what to make or what we could prepare with those ingredients. To enhance our website and make it stand out we attempted to incorporate features such as user profiles, recipe categories, search filters, and a rating/comment system to facilitate interaction and recipe discovery.

## Build status
Build status: 'Active and successful'

## Code style
Please note that our project's coding style may differ from standard conventions, especially in CSS, JavaScript, and HTML. Many of us are new to programming, and we are still learning best practices and conventions.

Here are some key points about our coding style:

CSS: We might use inline styles or rely heavily on specific frameworks like Bootstrap for styling.
JavaScript: Our JavaScript code may not follow strict modularization or adhere to advanced patterns.
HTML: We may use simpler HTML structures and may not fully leverage the latest HTML5 features.

## Screenshots
[Logo](https://gyazo.com/fc133cf43a531b70e55af2812054771a) 
[Home page]()

## Tech/framework used
Built with:

React
React Router DOM
AWS Amplify
DynamoDB
API Gateway

## Features
By allowing users to input their available ingredients, our website can generate recipe suggestions based on what ingredients they have on hand. This feature is especially helpful for college students and anyone seeking quick, budget-friendly meal ideas. The ability to create user accounts, post recipes, and engage with others through comments and ratings adds a social and interactive element to the website. Which separates us from other recipe websites.

## Installation
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The project was then initialized using 'amplify' and 'amplify cli' for the backend
Then 'react-router-DOM' was used for navigation throughout the website

## Tests
Smoke testing
    We did a form of smoke testing, because with AWS there is a build every time we send a commit to the repository, and in order for our change to not do anything that would cause a major issue to the website, it would have to successfully build. Because of this it helps to minimize integration risk, because we can actually see errors happening with the build, and it’ll give us a general idea of why the error is occurring. https://gyazo.com/bd1f50c5586e524dd1a773ef5fb5f845
Regression testing
    For regression testing, we used SonarQube which showed us that there were issues with the security review. Selenium was used to make sure our functions were incorporated and are successful. Selenium confirmed that our account creation and login was successful, as well as our search filter, but it also showed us that our profile and post page didn’t work. https://gyazo.com/7062738e4cf4ba44349e3bd8e21e2ef1

## How to use?
Create an account at https://main.d27jakjzz3w69s.amplifyapp.com/. Sign into the website and if you want to search for recipes by ingredients go into the Filter option and type in your ingredients one by one and press "click to add ingredient", when your ready to look for the recipe press "Search Recipes". If you want to just view recipes, on the home page press search and it will just list out recipes for you. If you want to post a recipe for the website, press on the Post button on the homepage, enter the required information in the designated fields, and then press post. To view account information, you can press on account details, in case you need to remember the email associated with the account, and once you are done you can logout by pressing the sign out button in the home page.

## Credits
Built by:

Tiago Breunig,
Ahilleas Fetras,
Ahmad Haidaree,
James Kmetz,
Ian Schiedenhelm,
Arjun Vijay

