React Web App

This is a React web application for managing recipes. It provides features like login, registration, searching for recipes, and hiding extra recipe details.

Setup Instructions:

1. Clone the repository:
   git clone https://github.com/karaderushabh/foodrecipeweb

2. Navigate to the project directory:
   cd react-web-app

3. Install dependencies using npm:
   npm install

4. Start the development server:
   npm start

5. Open http://localhost:3000 in your web browser to view the app.

Functionality:

- Login:

  - Description: Allows users to log in to their accounts.
  - Input fields: Username, Password.
  - Authentication: Validates user credentials and grants access.

- Register:

  - Description: Allows users to create new accounts.
  - Input fields: Username, Password, Confirm Password.
  - Registration process: Registers new users with unique credentials.

- Search Functionality:

  - Description: Enables users to search for recipes.
  - Input field: Search query for recipes.
  - Integration: Retrieves recipe data from an external API.

- Hiding Extra Data:
  - Description: Provides an option to hide additional recipe details.
  - Functionality: Allows users to toggle between showing/hiding extra information.

API Integration:

- Base URL: [https://api.edamam.com/api/]
- Endpoints:
  - Authentication: /auth
  - Recipe Retrieval: /recipes/v2
