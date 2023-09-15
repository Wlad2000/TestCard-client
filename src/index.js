import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './jsx/App';
import { UserStateProvider } from './jsx/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserStateProvider>
    <App />
    </UserStateProvider>
);


