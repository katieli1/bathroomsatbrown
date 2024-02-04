package main;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.concurrent.CompletableFuture;

@RestController
@RequestMapping(value = "/bathrooms") // maps the controller to the "/posters" endpoint.
@CrossOrigin(origins = "http://localhost:5173")
public class BathroomController {
  private final BathroomService bathroomService;
  public BathroomController(BathroomService bathroomService) {
    this.bathroomService = bathroomService;
  }

  @GetMapping("/")
  public CompletableFuture<ResponseEntity<List<Bathroom>>> getAllBathrooms() {
    return this.bathroomService.getBathrooms()
            .thenApply(ResponseEntity::ok)
            .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }

  @PostMapping(value = "/create")
  public CompletableFuture<ServiceResponse<Bathroom>> create(
          @RequestParam String building, @RequestParam int floor, @RequestParam String roomNumber,
          @RequestParam String gender, @RequestParam boolean wheelchairAccessible,
          @RequestParam boolean singleOccupancy, @RequestParam double avgOverallRating,
          @RequestParam double avgCleanlinessRating, @RequestParam double avgSizeRating,
          @RequestParam double latitude, @RequestParam double longitude) {
    Bathroom bathroom = new Bathroom(); // edit constructor / setters to set vals from request params
    this.bathroomService.createBathroom(bathroom);
    return CompletableFuture.completedFuture(
        new ServiceResponse<Bathroom>(bathroom, "saved bathroom"));
  }
}
