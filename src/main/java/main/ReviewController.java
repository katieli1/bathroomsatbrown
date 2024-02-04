package main;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping(value = "/reviews") // maps the controller to the "/posters" endpoint.
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {
    private final ReviewService reviewService;
    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    @GetMapping("/")
    public CompletableFuture<ResponseEntity<List<Review>>> getAllReviews() {
        return this.reviewService.getReviews()
                .thenApply(ResponseEntity::ok)
                .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
    }

    @PostMapping(value = "/create")
    public CompletableFuture<ServiceResponse<Review>> create(@RequestBody Review review) {
        this.reviewService.createReview(review);
        return CompletableFuture.completedFuture(
                new ServiceResponse<Review>(review, "saved review"));
    }

}