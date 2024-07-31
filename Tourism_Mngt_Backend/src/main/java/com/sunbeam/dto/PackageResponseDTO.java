package com.sunbeam.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PackageResponseDTO {
	
	    private String packageName;
	    private byte[] image;
	    private double startingPrice;
}
