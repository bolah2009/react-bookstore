import React from 'react';
import { render } from 'react-dom';
import './css/display.css';
import './css/index.css';
import configureStore from './configureStore';
import Root from './components/Root';

const store = configureStore();

render(<Root store={store} />, document.getElementById('root'));
