package main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    @Autowired
    public ReviewService(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @Async
    public CompletableFuture<List<Review>> getReviews() {
        return CompletableFuture.completedFuture(this.reviewRepository.findAll());
    }

    public ServiceResponse<Review> createReview(Review review) {
        ServiceResponse<Review> response;

        if (this.reviewRepository
                .findById(review.getId())
                .isEmpty()) { // check if already exists in database
            System.out.println("Saving to mongo now");
            Review savedReview = this.reviewRepository.insert(review);
            // Create a response object
            response = new ServiceResponse<>(savedReview, "added to database");
        } else {
            System.out.println("Saving to mongo now");
            Review savedReview = this.reviewRepository.save(review);
            // Create a response object
            response = new ServiceResponse<>(savedReview, "saved to database");
        }

        return (response);


    }
}