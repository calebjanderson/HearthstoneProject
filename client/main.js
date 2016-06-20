// React package that deals with DOM interactions
import ReactDOM from 'react-dom';

// React package for constructing components (and all non-DOM related actions)
import React from 'react';

// Import React component from PetShopWindow
import App from './components/App';

// Render that component to the DOM!
ReactDOM.render(<App />, document.getElementById('app'));
