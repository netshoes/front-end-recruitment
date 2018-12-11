import React, { Component } from 'react';

import Shelf from '../Shelf';
import Banner from '../Banner';
import FloatCart from '../FloatCart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <main>
          <Shelf />
        </main>
        <FloatCart />
      </div>
    );
  }
}

export default App;
