const db = require('../db')


class ReviewsController {

async getAllReviews(req, res, next) {
    try {
        const reviews = await db.query('SELECT * FROM reviews;')     
        res.status(200).json(reviews.rows)   
    } catch (error) {
        res.status(500)
        console.error(error);
    }
}

}


module.exports = new ReviewsController()