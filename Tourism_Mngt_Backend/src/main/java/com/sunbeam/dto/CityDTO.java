package com.sunbeam.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CityDTO {
	private String name;
	private String cityDetails;
	private byte[] cityImage;
	private String duration;
	private Double price;
}
