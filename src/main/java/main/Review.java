package main;

import java.util.UUID;
import org.springframework.data.annotation.Id;

public class Review {
  @Id private String id;
  private String review;
  private double overallRating;
  private double cleanlinessRating;
  private double sizeRating;

  public Review() {
    this.id = UUID.randomUUID().toString();
  }
  // Constructor with parameters having the same name as instance variables
  public Review(String review, double overallRating, double cleanlinessRating, double sizeRating) {
    this.id = UUID.randomUUID().toString();
    this.review = review;
    this.overallRating = overallRating;
    this.cleanlinessRating = cleanlinessRating;
    this.sizeRating = sizeRating;
  }

  // Getter and Setter for 'review'
  public String getReview() {
    return review;
  }

  public void setReview(String review) {
    this.review = review;
  }

  // Getter and Setter for 'overallRating'
  public double getOverallRating() {
    return overallRating;
  }

  public void setOverallRating(double overallRating) {
    this.overallRating = overallRating;
  }

  // Getter and Setter for 'cleanlinessRating'
  public double getCleanlinessRating() {
    return cleanlinessRating;
  }

  public void setCleanlinessRating(double cleanlinessRating) {
    this.cleanlinessRating = cleanlinessRating;
  }

  // Getter and Setter for 'sizeRating'
  public double getSizeRating() {
    return sizeRating;
  }

  public void setSizeRating(double sizeRating) {
    this.sizeRating = sizeRating;
  }

  public String getId() {
    return this.id;
  }

  public void setId(String id) {
    this.id = id;
  }
}
