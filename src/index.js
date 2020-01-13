import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import TrafficLight from './TrafficLight'

ReactDOM.render(<TrafficLight />, document.getElementById('root'));

serviceWorker.unregister();
