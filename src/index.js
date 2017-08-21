import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HelloWorld from './HelloWorld';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div>
		<App />
		<HelloWorld />
	</div>, document.getElementById('root'));
registerServiceWorker();
