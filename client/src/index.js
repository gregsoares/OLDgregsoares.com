import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

// Bootstrap and Stylesheet

render(<App />, document.getElementById('root'));

serviceWorker.unregister();