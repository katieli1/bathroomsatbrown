package main;

import org.springframework.data.annotation.Id;

public class Review {
  @Id private String id;
  private String review;
  private double overallRating;
  private double cleanlinessRating;
  private double sizeRating;
}
