import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ArticleViewer from './ArticleViewer';

ReactDOM.render(<ArticleViewer />, document.getElementById('root'));
registerServiceWorker();
