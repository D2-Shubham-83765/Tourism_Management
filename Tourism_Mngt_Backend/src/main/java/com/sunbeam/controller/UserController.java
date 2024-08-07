package com.sunbeam.controller;

import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.BeanIds;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ForgetPasswordDTO;
import com.sunbeam.dto.LoginDTO;
import com.sunbeam.dto.LoginResponse;
import com.sunbeam.dto.UserDTO;
import com.sunbeam.security.CustomUserDetails;
import com.sunbeam.security.JwtUtils;
import com.sunbeam.security.SecurityConfig;
import com.sunbeam.service.UserServiceImpl;


@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserServiceImpl userService;
	
	  @Autowired 
	  private AuthenticationManager authManager;
	 
	
	@Autowired
	private JwtUtils utils;
	
	
	@PostMapping("/register")
	public ResponseEntity<?> addUser(@RequestBody @Valid UserDTO dto){
		String message = userService.addNewUser(dto);
		return ResponseEntity.status(HttpStatus.ACCEPTED).body(new ApiResponse("success", message));
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody 
			@Valid LoginDTO request) {
		System.out.println("in sign in" + request);
		//create a token(implementation of Authentication i/f)
		//to store un verified user email n pwd
		UsernamePasswordAuthenticationToken token=new 
				UsernamePasswordAuthenticationToken(request.getEmail(), 
						request.getPassword());
		//invoke auth mgr's authenticate method;
		Authentication verifiedToken = authManager.authenticate(token);
		//=> authentication n authorization  successful !
		System.out.println(verifiedToken.getPrincipal().getClass());//custom user details object
		//create JWT n send it to the clnt in response
		LoginResponse resp=new LoginResponse
				(utils.generateJwtToken(verifiedToken),
				"You have been logged in");
		return ResponseEntity.
				status(HttpStatus.CREATED).body(resp);
	}
	
	/*
	 * @GetMapping("/user/session") public ResponseEntity<?>
	 * getUserSession(HttpServletRequest request) { // Retrieve user details from
	 * SecurityContext or custom service Authentication authentication =
	 * SecurityContextHolder.getContext().getAuthentication(); if (authentication ==
	 * null || !authentication.isAuthenticated()) { // User is not authenticated
	 * return ResponseEntity.ok().body(Map.of("loggedIn", false)); }
	 * 
	 * // Assuming you have a custom UserDetails implementation CustomUserDetails
	 * userDetails = (CustomUserDetails) authentication.getPrincipal();
	 * 
	 * 
	 * Map<String, Object> sessionData = new HashMap<>();
	 * sessionData.put("loggedIn", true); sessionData.put("email",
	 * userDetails.getUsername()); sessionData.put("isAdmin",
	 * userDetails.getAuthorities().stream(). anyMatch(a ->
	 * a.getAuthority().equals("ROLE_ADMIN")));
	 * 
	 * return ResponseEntity.ok().body(sessionData); }
	 */

	
	@PostMapping("/forget-password")
	public ResponseEntity<?> forgetPassword(@RequestBody @Valid ForgetPasswordDTO dto){
		return ResponseEntity.status(HttpStatus.OK).body(userService.setPassword(dto));
	} 
}
