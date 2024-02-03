package main;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/reviews") // maps the controller to the "/posters" endpoint.
@CrossOrigin(origins = "http://localhost:5173")
public class ReviewController {}