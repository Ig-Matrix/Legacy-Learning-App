package com.example.demo.Services;

import com.example.demo.Models.HomePageModel;
import org.springframework.stereotype.Service;

import java.util.Arrays;

@Service
public class HomePageService {
    public HomePageModel generateHomePageData(){
        //Using pre-defined data here...
        HomePageModel homePageModel = new HomePageModel();
        homePageModel.setWelcomeMessage(
                "Welcome to FirstAcademy LegacyLearn!"
        );
        homePageModel.setWriteUps(
                Arrays.asList("Welcome text",
                        "About FirstAcademy LegacyLearn",
                        "Other text")
        );

        homePageModel.setPictureUrls(
                Arrays.asList(
                        "/image1.jpg", "/image2.jpg", "image3.jpg"
                )
        );

        return homePageModel;
    }
}
