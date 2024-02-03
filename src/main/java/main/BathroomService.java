package main;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

@Service
public class BathroomService {
    private final BathroomRepository bathroomRepository;
    @Autowired
    public BathroomService(BathroomRepository bathroomRepository) {
        this.bathroomRepository = bathroomRepository;
    }

    @Async
    public CompletableFuture<List<Bathroom>> getBathrooms() {
        return CompletableFuture.completedFuture(this.bathroomRepository.findAll());
    }

    public ServiceResponse<Bathroom> createBathroom(Bathroom bathroom) {
        ServiceResponse<Bathroom> response;

        if (this.bathroomRepository
                        .findById(bathroom.getId())
                        .isEmpty()) { // check if already exists in database
                    System.out.println("Saving to mongo now");
                    Bathroom savedBathroom = this.bathroomRepository.insert(bathroom);
                    // Create a response object
                    response = new ServiceResponse<>(savedBathroom, "added to database");
        } else {
            System.out.println("Saving to mongo now");
            Bathroom savedBathroom = this.bathroomRepository.save(bathroom);
            // Create a response object
            response = new ServiceResponse<>(savedBathroom, "saved to database");
        }

        return (response);


    }
}