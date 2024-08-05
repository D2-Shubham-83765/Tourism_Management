package com.sunbeam.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ForgetPasswordDTO;
import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.service.UserServiceImpl;

@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserServiceImpl userService;
	
	@PostMapping("/register")
	public ResponseEntity<?> addUser(@RequestBody @Valid UserDTO dto){
		String message = userService.addNewUser(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ApiResponse("success", message));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody @Valid LoginDTO dto){
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(userService.login(dto.getEmail(), dto.getPassword()));
	} 
	
	@PostMapping("/forget-password")
	public ResponseEntity<?> forgetPassword(@RequestBody @Valid ForgetPasswordDTO dto){
		return ResponseEntity.status(HttpStatus.OK).body(userService.setPassword(dto));
	} 
}
