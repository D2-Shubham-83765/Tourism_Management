package com.sunbeam.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CityDTO;
import com.sunbeam.dto.CityRequestDTO;
import com.sunbeam.entities.City;
import com.sunbeam.service.CityServiceImpl;

@RestController
@RequestMapping("/cities")
public class CityController {
	@Autowired
	private CityServiceImpl cityService;
	
	@GetMapping("/{packageId}")
	public ResponseEntity<?> getAllCities(@PathVariable Long packageId){
		List<CityDTO> cities = cityService.getAllCityDetails(packageId);
		return ResponseEntity.status(HttpStatus.FOUND).body(cities);
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addCityDetails(@RequestBody CityRequestDTO dto, @RequestBody MultipartFile cityImage){
		 try {
			City city = cityService.addCityDetails(dto, cityImage);
			return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse("City details added successfully"));
		} catch (IOException e) {
			throw new ApiException("Something went wrong!!");
		}
	}
}
