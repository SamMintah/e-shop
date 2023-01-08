const Review = require('../models/review');

exports.getReviews = async (req, res, next) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    next(error);
  }
};

exports.getReview = async (req, res, next) => {
  try {
    const reviewId = req.params.reviewId;
    const review = await Review.findById(reviewId);
    if (!review) {
      const error = new Error('Review not found');
      error.status = 404;
      throw error;
    }
    res.json(review);
  } catch (error) {
    next(error);
  }
};

exports.createReview = async (req, res, next) => {
  try {
    const newReview = new Review(req.body);
    await newReview.save();
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};

exports.updateReview = async (req, res, next) => {
  try {
    const reviewId = req.params.reviewId;
    const updatedReview = await Review.findByIdAndUpdate(reviewId, req.body, {
      new: true
    });
    if (!updatedReview) {
      const error = new Error('Review not found');
      error.status = 404;
      throw error;
    }
    res.json(updatedReview);
  } catch (error) {
    next(error);
  }
};

exports.deleteReview = async (req, res, next) => {
    try {
        const reviewId = req.params.reviewId;
        const deletedreview = await Order.findByIdAndDelete(reviewId);
        if (!deletedreview) {
          const error = new Error('review not found');
          error.status = 404;
          throw error;
        }
        res.json(deletedreview);
      } catch (error) {
        next(error);
      }
}