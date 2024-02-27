package com.example.demo.Controllers;

import com.example.demo.Models.HomePageModel;
import com.example.demo.Services.HomePageService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

import static org.springframework.http.ResponseEntity.*;

@RestController
public class HomePageController {
    private final HomePageService homePageService;

    //Injecting HomePageService via constructor injection
    public HomePageController(HomePageService homePageService) {

        this.homePageService = homePageService;
    }


    @GetMapping("/")
    public ResponseEntity<HomePageModel> getHomePageContent(){
        //generate homepage data from the homepage service...
        HomePageModel homePageModel = homePageService.generateHomePageData();

        // Returning a ResponseEntity with the predefined homepage data and a 200 OK status...
        return ResponseEntity.ok(homePageModel);
    }
}
