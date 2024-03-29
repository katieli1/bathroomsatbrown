package main;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class ReviewService {
  private final ReviewRepository reviewRepository;
  private final BathroomRepository bathroomRepository;

  @Autowired
  public ReviewService(ReviewRepository reviewRepository, BathroomRepository bathroomRepository) {
    this.reviewRepository = reviewRepository;
    this.bathroomRepository = bathroomRepository;
  }

  @Async
  public CompletableFuture<List<Review>> getReviews() {
    return CompletableFuture.completedFuture(this.reviewRepository.findAll());
  }

  public ServiceResponse<Review> createReview(Review review, String bathroomId) {
    ServiceResponse<Review> response;

    if (this.reviewRepository
        .findById(review.getId())
        .isEmpty()) { // check if already exists in database
      System.out.println("Saving to mongo now");
      Review savedReview = this.reviewRepository.insert(review);
      this.addReviewToBathroom(bathroomId, savedReview);
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

  @Async
  public CompletableFuture<ServiceResponse<Bathroom>> addReviewToBathroom(
      String bathroomId, Review review) {
    // Find the bathroom by ID
    return this.bathroomRepository
        .findById(bathroomId)
        .map(
            bathroom -> {
              bathroom.getReviews().add(review);
              bathroom.updateOverallRating(review.getOverallRating());
              bathroom.updateCleanlinessRating(review.getCleanlinessRating());
              bathroom.updateSizeRating(review.getSizeRating());
              this.bathroomRepository.save(bathroom);
              return new ServiceResponse<>(bathroom, "Review added to bathroom");
            })
        .map(CompletableFuture::completedFuture) // Remove this line
        .orElse(CompletableFuture.completedFuture(new ServiceResponse<>("Bathroom not found")));
  }
}
