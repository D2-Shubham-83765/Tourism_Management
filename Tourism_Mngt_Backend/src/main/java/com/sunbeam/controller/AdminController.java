package com.sunbeam.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.AdminDTO;
import com.sunbeam.service.AdminServiceImpl;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

	@Autowired
	private AdminServiceImpl adminService;
	
	@PostMapping("/register")
	public ResponseEntity<?> addAdmin(@RequestBody @Valid AdminDTO dto){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(adminService.addNewAdmin(dto));
	}
	
}
