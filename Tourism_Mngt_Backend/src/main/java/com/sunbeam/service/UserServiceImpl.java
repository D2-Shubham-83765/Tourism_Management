package com.sunbeam.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.ForgetPasswordDTO;
import com.sunbeam.dto.UserDTO;
<<<<<<< HEAD
import com.sunbeam.entities.Role;
=======
>>>>>>> main
import com.sunbeam.entities.User;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	private UserDao userDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public String addNewUser(UserDTO dto) {
		if (dto.getPassword().equals(dto.getConfirmPassword())) {
			User userEntity = mapper.map(dto, User.class);
			userDao.save(userEntity);
			return "User registered successfully";
		}
		throw new ApiException("Password doesn't match!! Try again");
	}

	@Override
	public String login(String email, String password) {
		User user = userDao.findByEmailAndPassword(email, password);
		if (user == null) {
			return "Invalid Credentials!!";
<<<<<<< HEAD
		}else if(user.getRole()==Role.ADMIN) {
			return "Admin logged in successfully";
		}else {
			return "User logged in successfully";
		}
=======
		}else
			return "User logged in successfully";
>>>>>>> main
	}

	@Override
	public String setPassword(ForgetPasswordDTO dto) {
		User user = userDao.findByEmail(dto.getEmail());
		if(user==null)
			return "Invalid email credentials!!";
		else {
			if(dto.getPassword().equals(dto.getNewPassword()) && dto.getSecurityAnswer().
					equals(user.getSecurityAnswer())) {
				User userEntity = mapper.map(dto, User.class);
				user.setPassword(userEntity.getPassword());
				return "Password reset successfully";
			}
		}
		throw new ApiException("Password or Security answer doesn't match!!");
	}
	
	
}
