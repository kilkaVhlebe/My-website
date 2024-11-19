const express = require('express');
const router = express.Router();
const { ReviewsController }  = require('../controlers/reviews.controller')
const controller = ReviewsController()

router.get('/all/reviews', controller.getAllReviews());

module.exports = router;
