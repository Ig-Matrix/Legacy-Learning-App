package com.example.demo.Models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class HomePageModel {
    private String welcomeMessage;
    private List<String> writeUps;
    private List<String> pictureUrls;
    //can add more content as the need arises!
}
