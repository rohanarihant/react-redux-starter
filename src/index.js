import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { Provider} from "react-redux";
import ReduxToastr from 'react-redux-toastr';
import App from './App';
import store from "./store/store"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider  store={store}>
    <div>
        <App />
          <ReduxToastr
            timeOut={2500}
            preventDuplicates
             />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
