'use strict';

import React from 'react';
import App from'./components/app';
import Flux from './Flux';

/**
 * Render App with Flux in context
 */
let flux = new Flux();
React.withContext(
  { flux },
  () => React.render(<App />, document.getElementById('app'))
);
