package main;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BathroomRepository extends MongoRepository<Bathroom, String> {
  // Here, you can define custom query methods if needed

  // Check mongorepo documentation for all the methods it comes with!!
}
