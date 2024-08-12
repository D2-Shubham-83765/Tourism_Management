package com.sunbeam.dto;

import com.sunbeam.entities.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookingRequestDTO {

	private Long user_id;
	
	private String packageName;
	
	private String cityName;
	
	private Long noOfPassengers;
	
	private Double totalCost;
}
