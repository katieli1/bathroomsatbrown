package main;

import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

import org.springframework.data.annotation.Id;

public class Bathroom {
  @Id private String id;
  private Set<Review> reviews;
  private Set<String> photos;
  private String building;
  private int floor;
  private String roomNumber;
  private String gender;
  private boolean wheelchairAccessible;
  private boolean singleOccupancy;
  private double avgOverallRating;
  private double avgCleanlinessRating;
  private double avgSizeRating;
  double latitude;
  double longitude;

  /** a no argument constructor so that Jackson can deserialize the json */

  public Bathroom(){
    this.id = UUID.randomUUID().toString();
    this.reviews = new HashSet<>();
    this.photos = new HashSet<>();
  }
  public String getId(){
    return this.id;
  }

  public void setId(String id){
    this.id = id;
  }


}
