'use strict';

require('isomorphic-fetch');
import React from 'react';
import App from './components/App';
import FluxComponent from 'flummox/component';
import Flux from './flux';

require('../styles/main.scss');

let flux = new Flux();
window.snapshot && flux.deserialize(window.snapshot);

React.render(
  <FluxComponent flux={flux}>
    <App />
  </FluxComponent>
, document.getElementById('app'));
