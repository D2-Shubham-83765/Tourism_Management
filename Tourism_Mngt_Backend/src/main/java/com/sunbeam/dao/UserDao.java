package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.entities.User;

public interface UserDao extends JpaRepository<User, Long>{
	User findByEmailAndPassword(String email, String password);
	
	Optional<User> findByEmail(String email);
}
