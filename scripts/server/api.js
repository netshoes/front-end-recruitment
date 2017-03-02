'use strict';

import _ from 'lodash';
import express from 'express';
import Flux from '../Flux';

let router = express.Router();

router.route('/products')
  .get(function(req, res, next) {
    res.sendStatus(200);
  });

router.route('/bag/:sku')
  .get(function(req, res, next) {
    res.sendStatus(200);
  })

  .post(function(req, res, next) {
    res.sendStatus(200);
  })

  .delete(function(req, res, next) {
    res.sendStatus(200);
  });

export default router;
