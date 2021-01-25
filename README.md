# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




4. Implements a design of your choice\
I prepared a project about pokemons

5. Includes a mock authentication functionality, saving a fake token to memory in order to let the user to the private root of the main app view after reloading or reopening the tab\

src->configuration->ProtectedRoute \
I created my own Route which I use in App.js. I set the value to true so that every subpage can be accessed. If it is false, we will be redirected to available pages. Hope I understood the task correctly.


6. Data presented as cards on a grid of your choice\
example: http://localhost:3000/

7. Cards include shortened data from their respective data nodes and navigate to full data view when clicked\
example: http://localhost:3000/pokemonInfo/bulbasaur

8. Allows users to access respective data nodes views by a URL with a name, e.g. `~/Tatooine` to access Tatooine planet full data view in case of Star Wars\
example: http://localhost:3000/pokemonInfo/ivysaur

9. Implements search and filter functionalities to be determined by you\
example: http://localhost:3000/search\
Please enter stench and press "search"
