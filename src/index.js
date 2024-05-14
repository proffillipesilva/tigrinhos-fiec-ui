import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import Login from './views/Login/Login';
import Games from './views/Games/Games';
import {
  createBrowserRouter,
  RouterProvider,
  HashRouter
} from "react-router-dom";

import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux';
import {thunk} from 'redux-thunk'
import rootReducer from './store/reducer';
import { GoogleOAuthProvider } from '@react-oauth/google';

const middleware = applyMiddleware(thunk)
const composedEnhancers = compose(middleware)

const store = createStore(rootReducer, undefined, composedEnhancers )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <GoogleOAuthProvider clientId="161121188224-jrs3tfapgni52qt4bctebtqrlcdh229g.apps.googleusercontent.com">
  <Provider store={store} >
  <React.StrictMode>
    <HashRouter>
    {/*<RouterProvider router={router} /> */}
    <Main />
    </HashRouter>
  </React.StrictMode>
  </Provider>
  </GoogleOAuthProvider>
);

