const Review = require('../models/review.js')

async function create(review) {
    // Create a new review
    const newReview = await Review.create(review);
    console.log("review:")
    return newReview
}
async function index() {

    const reviews = await Review.findAll({});
    console.log("reviews:")
    return reviews
}

const update = async(review) => {
    const updatedReview = await Review.update(review, {
        where: {
          id: review.id
        }
      });
    // const savedReview = await Review.create(Review);
    console.log("updatedReview", updatedReview)
    return updatedReview
}
module.exports = {
    create,
    index,
    update}