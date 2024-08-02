package com.sunbeam.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CityDTO;
import com.sunbeam.dto.CityImageDTO;
import com.sunbeam.dto.CityRequestDTO;
import com.sunbeam.dto.HotelRequestDTO;
import com.sunbeam.entities.City;
import com.sunbeam.service.CityServiceImpl;

@RestController
@RequestMapping("/cities")
public class CityController {
	@Autowired
	private CityServiceImpl cityService;
	
	
	@PostMapping("/add")
	public ResponseEntity<?> addCityDetails(@ModelAttribute CityRequestDTO dto){
		 try {
			City city = cityService.addCityDetails(dto);
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("City details added successfully"));
		} catch (IOException e) {
			throw new ApiException("Something went wrong!!");
		}
	}
	
	@PostMapping("/add/images")
	public ResponseEntity<?> addCityImagesById(@ModelAttribute CityImageDTO dto){
		try {
			cityService.addCityImagesById(dto);
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ApiResponse("Images for the city has been uploaded"));
		} catch (IOException e) {
			throw new ApiException("Something went wrong");
		}
	}
	
	@GetMapping("/{cityId}")
	public ResponseEntity<?> getCityDetailsWithImages(@PathVariable Long cityId){
		return ResponseEntity.status(HttpStatus.FOUND).body(cityService.getCityDetailsWithImages(cityId));
	}
	
	@DeleteMapping("/{cityId}")
    public ResponseEntity<?> deleteCity(@PathVariable Long cityId) {
        cityService.deleteCity(cityId);
        return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse("City has been deleted!!"));
    }
	
	@PostMapping("/hotel/{cityId}")
	public ResponseEntity<?> addHotelByCityId(@RequestBody HotelRequestDTO dto){
		return ResponseEntity.ok(cityService.addHotel(dto));
	}
}
