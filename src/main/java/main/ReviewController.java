package main;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/reviews")
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {
  private final ReviewService reviewService;

  public ReviewController(ReviewService reviewService) {
    this.reviewService = reviewService;
  }

  @GetMapping("/")
  public CompletableFuture<ResponseEntity<List<Review>>> getAllReviews() {
    return this.reviewService
        .getReviews()
        .thenApply(ResponseEntity::ok)
        .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }

  @PostMapping(value = "/create/{bathroomId}")
  public CompletableFuture<ServiceResponse<Review>> create(
      @RequestBody Review review, @PathVariable String bathroomId) {
    this.reviewService.createReview(review, bathroomId);
    return CompletableFuture.completedFuture(new ServiceResponse<Review>(review, "saved review"));
  }
}
