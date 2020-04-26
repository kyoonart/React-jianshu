import React from 'react';
import Header from './common/header/index'
import store from './store/index'
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './pages/home/index'
import Detail from './pages/detail/loadable.js'
import Login from './pages//login/index'
import Write from './pages/write/index'
function App() {
  return (
   <Provider store={store}>
      <div>
    <BrowserRouter>
    <div>
      <Header></Header>
    <Route path='/' exact  component={Home}></Route>
    <Route path='/detail/:id' exact component={Detail} ></Route>
    <Route path='/login' exact component={Login} ></Route>
    <Route path='/write' exact component={Write} ></Route>
    </div> 
    </BrowserRouter>
      </div>  
   </Provider>
  );
}
export default App;
