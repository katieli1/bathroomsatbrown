package main;

import java.util.Comparator;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Collectors;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/bathrooms") // maps the controller to the "/bathrooms" endpoint.
@CrossOrigin(origins = "http://localhost:5173")
public class BathroomController {
  private final BathroomService bathroomService;

  public BathroomController(BathroomService bathroomService) {
    this.bathroomService = bathroomService;
  }

  @GetMapping("/")
  public CompletableFuture<ResponseEntity<List<Bathroom>>> getAllBathrooms() {
    return this.bathroomService
        .getBathrooms()
        .thenApply(ResponseEntity::ok)
        .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }

  @GetMapping("/{id}")
  public CompletableFuture<ResponseEntity<ServiceResponse<Bathroom>>> getById(
          @PathVariable String id) {
    return this.bathroomService
            .getById(id)
            .thenApply(ResponseEntity::ok)
            .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }

  @PostMapping(value = "/create")
  public CompletableFuture<ServiceResponse<Bathroom>> create(@RequestBody Bathroom bathroom) {
    this.bathroomService.createBathroom(bathroom);
    return CompletableFuture.completedFuture(
        new ServiceResponse<Bathroom>(bathroom, "saved bathroom"));
  }

  @GetMapping(value = "/getOverallInRange")
  public CompletableFuture<ResponseEntity<List<Bathroom>>> getOverallInRange(
      @RequestParam double min, @RequestParam double max) {
    return this.bathroomService
        .getBathrooms()
        .thenApply(
            bathrooms ->
                bathrooms.stream()
                    .filter(
                        bathroom ->
                            bathroom.getAvgOverallRating() > min
                                && bathroom.getAvgOverallRating() < max)
                    .sorted(
                        Comparator.nullsLast(Comparator.comparing(Bathroom::getAvgOverallRating)))
                    .collect(Collectors.toList()))
        .thenApply(ResponseEntity::ok)
        .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }

  @GetMapping(value = "/getCleanlinessInRange")
  public CompletableFuture<ResponseEntity<List<Bathroom>>> getCleanlinessInRange(
      @RequestParam double min, @RequestParam double max) {
    return this.bathroomService
        .getBathrooms()
        .thenApply(
            bathrooms ->
                bathrooms.stream()
                    .filter(
                        bathroom ->
                            bathroom.getAvgCleanlinessRating() > min
                                && bathroom.getAvgCleanlinessRating() < max)
                    .sorted(
                        Comparator.nullsLast(
                            Comparator.comparing(Bathroom::getAvgCleanlinessRating)))
                    .collect(Collectors.toList()))
        .thenApply(ResponseEntity::ok)
        .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }

  @GetMapping(value = "/getSizeInRange")
  public CompletableFuture<ResponseEntity<List<Bathroom>>> getSizeInRange(
      @RequestParam double min, @RequestParam double max) {
    return this.bathroomService
        .getBathrooms()
        .thenApply(
            bathrooms ->
                bathrooms.stream()
                    .filter(
                        bathroom ->
                            bathroom.getAvgSizeRating() > min && bathroom.getAvgSizeRating() < max)
                    .sorted(Comparator.nullsLast(Comparator.comparing(Bathroom::getAvgSizeRating)))
                    .collect(Collectors.toList()))
        .thenApply(ResponseEntity::ok)
        .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }

  @GetMapping(value = "/getByBuilding")
  public CompletableFuture<ResponseEntity<List<Bathroom>>> getByBuilding(
          @RequestParam String building) {
    return this.bathroomService
            .getBathrooms()
            .thenApply(
                    bathrooms ->
                            bathrooms.stream()
                                    .filter(
                                            bathroom ->
                                                    bathroom.getBuilding().equals(building))
                                    .sorted(
                                            Comparator.nullsLast(Comparator.comparing(Bathroom::getBuilding)))
                                    .collect(Collectors.toList()))
            .thenApply(ResponseEntity::ok)
            .exceptionally(ex -> ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build());
  }
}
