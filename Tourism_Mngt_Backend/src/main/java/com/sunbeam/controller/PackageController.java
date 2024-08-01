package com.sunbeam.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dto.PackageResponseDTO;
import com.sunbeam.entities.Package;
import com.sunbeam.service.PackageServiceImpl;

@RestController
@RequestMapping("/packages")
public class PackageController {
	@Autowired
	private PackageServiceImpl packageServiceImpl;
	
	@PostMapping("/add")
	public ResponseEntity<?> addPackage(@RequestParam("packageName") String packageName, 
            @RequestParam("image") MultipartFile image, 
            @RequestParam("startingPrice") double startingPrice){
		Package packageEntity = new Package(packageName, startingPrice);
		packageEntity = packageServiceImpl.addPackage(packageEntity, image);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body("Package added successfully");
	}
	
	@GetMapping
	public ResponseEntity<?> getAllPackages(){
		try {
		List<PackageResponseDTO> packageDetails = packageServiceImpl.getPackageDetails();
			return ResponseEntity.status(HttpStatus.FOUND).contentType(MediaType.IMAGE_JPEG).body(packageDetails);
		} catch (IOException e) {
			throw new ApiException("Something went wrong!! Try again");
		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletePackage(@PathVariable Long id){
		return ResponseEntity.status(HttpStatus.GONE).body(packageServiceImpl.deletePackage(id));
	}
}
