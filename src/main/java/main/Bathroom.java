package main;

import java.util.HashSet;
import java.util.Set;

import org.springframework.data.annotation.Id;

public class Bathroom {
  @Id private String id;
  private Set<Review> reviews;
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
    this.reviews = new HashSet<>();
  }
  // Constructor with parameters having the same name as instance variables
  public Bathroom(String id, String building, int floor,
              String roomNumber, String gender, boolean wheelchairAccessible,
              boolean singleOccupancy, double avgOverallRating,
              double avgCleanlinessRating, double avgSizeRating,
              double latitude, double longitude) {
    this.id = id;
    this.reviews = new HashSet<>();
    this.building = building;
    this.floor = floor;
    this.roomNumber = roomNumber;
    this.gender = gender;
    this.wheelchairAccessible = wheelchairAccessible;
    this.singleOccupancy = singleOccupancy;
    this.avgOverallRating = avgOverallRating;
    this.avgCleanlinessRating = avgCleanlinessRating;
    this.avgSizeRating = avgSizeRating;
    this.latitude = latitude;
    this.longitude = longitude;
  }

  // Getters and setters for each instance variable

  public Set<Review> getReviews() {
    return reviews;
  }

  public void setReviews(Set<Review> reviews) {
    this.reviews = reviews;
  }

  public String getBuilding() {
    return building;
  }

  public void setBuilding(String building) {
    this.building = building;
  }

  public int getFloor() {
    return floor;
  }

  public void setFloor(int floor) {
    this.floor = floor;
  }

  public String getRoomNumber() {
    return roomNumber;
  }

  public void setRoomNumber(String roomNumber) {
    this.roomNumber = roomNumber;
  }

  public String getGender() {
    return gender;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public boolean getWheelchairAccessible() {
    return wheelchairAccessible;
  }

  public void setWheelchairAccessible(boolean wheelchairAccessible) {
    this.wheelchairAccessible = wheelchairAccessible;
  }

  public boolean isSingleOccupancy() {
    return singleOccupancy;
  }

  public void setSingleOccupancy(boolean singleOccupancy) {
    this.singleOccupancy = singleOccupancy;
  }

  public double getAvgOverallRating() {
    return avgOverallRating;
  }

  public void setAvgOverallRating(double avgOverallRating) {
    this.avgOverallRating = avgOverallRating;
  }

  public double getAvgCleanlinessRating() {
    return avgCleanlinessRating;
  }

  public void setAvgCleanlinessRating(double avgCleanlinessRating) {
    this.avgCleanlinessRating = avgCleanlinessRating;
  }

  public double getAvgSizeRating() {
    return avgSizeRating;
  }

  public void setAvgSizeRating(double avgSizeRating) {
    this.avgSizeRating = avgSizeRating;
  }

  public double getLatitude() {
    return latitude;
  }

  public void setLatitude(double latitude) {
    this.latitude = latitude;
  }

  public double getLongitude() {
    return longitude;
  }

  public void setLongitude(double longitude) {
    this.longitude = longitude;
  }

  public String getId(){
    return this.id;
  }

  public void setId(String id){
    this.id = id;
  }


}
