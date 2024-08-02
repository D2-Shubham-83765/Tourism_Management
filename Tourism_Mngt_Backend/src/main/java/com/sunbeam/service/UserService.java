package com.sunbeam.service;

import com.sunbeam.dto.ForgetPasswordDTO;
import com.sunbeam.dto.UserDTO;

public interface UserService {
	String addNewUser(UserDTO dto);
	String login(String email, String password);
<<<<<<< HEAD
	String setPassword(ForgetPasswordDTO dto);	
=======
	String setPassword(ForgetPasswordDTO dto);
>>>>>>> main
}
