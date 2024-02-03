package main;

import java.util.Set;
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
}
