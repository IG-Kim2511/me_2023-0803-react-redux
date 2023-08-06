// App.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import CartPage from './CartPage';
import cartReducer from './cartReducer';

const store = createStore(cartReducer, { cart: [] });

function App() {
  return (
    <Provider store={store}>
      <div className="App">



      <h1>coding apple</h1>

      
      <h1>Tutorials Dev</h1>


      <h1>ai-redux</h1>      
        <CartPage />
      </div>
    </Provider>
  );
}

export default App;
