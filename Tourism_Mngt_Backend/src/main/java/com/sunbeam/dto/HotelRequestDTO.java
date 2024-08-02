package com.sunbeam.dto;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;
@Getter
@Setter
public class HotelRequestDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	
	private Long city_id;
	
    private String name;   
    
    private String address; 
   
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkInDate;
   
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkOutDate;
   
    private Double ratePerPerson;
  
    private Integer starRating;
    
}
