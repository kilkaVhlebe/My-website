const express = require('express');
const router = express.Router();
const ReviewsController  = require('../controlers/reviews.controller')


router.get('/all/reviews', ReviewsController.getAllReviews);

module.exports = router;
