// import { Provider } from "react-redux";

// import Store from './Components/Store';
// import CounterComponent from "./Components/CounterComponent";
// import Component1 from "./Components/Component1";
// import Component2 from "./Components/Component2";
// import Component3 from "./Components/Component3";


// const App=()=> {
//   return (


// <Provider store={Store}>
// <CounterComponent/>
// {/* <Component1/>
// <Component2/>
// <Component3/> */}

// </Provider>
    
//   );
// }

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './Components/CounterComponent'
import CounterComponent from './Components/CounterComponent';
import CounterButton from './CounterButton';
import store from './Components/Store'
import Buttons from './Buttons';
import Members from './Members';
const App = () => {
  return (
    <Provider store={store}>
      {/* <TodoApp /> */}
      <Buttons/>
      <Members/>
{/* <CounterButton/>    */}
 </Provider>
  );
};

export default App;
