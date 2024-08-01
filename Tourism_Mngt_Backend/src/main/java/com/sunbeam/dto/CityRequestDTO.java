package com.sunbeam.dto;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;
import com.sunbeam.entities.Package;

public class CityRequestDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	private String name;
	
	private String cityDetails;
	
	private Package packageId;
	
	private byte[] cityImage;
	
	private String duration;
	
	private Double price;
	
    private LocalDate startingDate;

    private LocalDate endingDate;
    
    private String location;

    private String day1Description;

    private String day2Description;

    private String day3Description;
    
    private String day4Description;
}
