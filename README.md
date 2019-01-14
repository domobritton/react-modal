# Easy React Modal

This is a simple React utility for implementing Modals. 

Feel free to fork, clone and make your own.

[Codesandbox url](https://codesandbox.io/s/github/domobritton/react-modal/tree/master/)
## A Walk Through the Files

I didn't want the Modal divs to be buried deep inside the node tree, so I added a new div to the index.html below the `<div id="root"></div>`, and named it `<div id="portal"></div>`.
Next I created a Portal.js inside the Utilities folder, which grabs the portal div, appends it, and uses the ReactDOM.createPortal() method to hoist the modal out of the DOM hierarchy.
`<Portal>{...}</Portal>` wraps the Modal.js to complete the implementation. 

I wanted to separate the logic from the rendering components, so hence the Utilities folder. Toggle.js is also there, which handles the Modal open/close.

App.js, ModalPage.js, and Modal.js comprises the rendering components tree.

Finally, styled-components is dope and is a super clean way to add a finish coat to the UI.

## In your terminal:

`git clone https://github.com/domobritton/react-modal.git`
`yarn`
`yarn start`


# Other create-react-app info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
