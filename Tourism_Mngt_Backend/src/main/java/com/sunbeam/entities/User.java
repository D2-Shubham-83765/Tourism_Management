package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
<<<<<<< HEAD
public class User extends BaseEntity {
	@Column(length = 30, nullable = false)
	private String firstName;

	@Column(length = 30, nullable = false)
	private String lastName;

	@Column(length = 30, unique = true)
	private String email;

	@Pattern(regexp = "^(\\+91|91|0)?[6-9][0-9]{9}$")
	@Column(length = 15, unique = true, nullable = false)
	private String phoneNumber;

	@Column(nullable = false)
	private String password;

	@Enumerated(EnumType.STRING)
	private Role role = Role.USER;

	@ManyToOne
	@JoinColumn(name = "security_question_id")
	private SecurityQuestion securityQuestion;

	@Column(nullable = false)
	private String securityAnswer;

	public User(String firstName, String lastName, String email,
			@Pattern(regexp = "^(\\+91|91|0)?[6-9][0-9]{9}$") String phoneNumber, 
			String password) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.phoneNumber = phoneNumber;
		this.password = password;
	}
=======

public class User extends BaseEntity{
	@Column(length = 30, nullable = false)
	private String firstName;
	
	@Column(length = 30, nullable = false)
	private String lastName;
	
	@Column(length = 30, unique = true)
	private String email;
	
	@Pattern(regexp = "^(\\+91|91|0)?[6-9][0-9]{9}$")
	@Column(length = 15, unique = true, nullable = false)
    private String phoneNumber;
    
    @Column(nullable = false)
    private String password;
    
    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;
    
    @ManyToOne
    @JoinColumn(name = "security_question_id")
    private SecurityQuestion securityQuestion;
    
    @Column(nullable = false)
    private String securityAnswer;
    
    public User(String firstName, String lastName, String email,
    		@Pattern(regexp = "^(\\+91|91|0)?[6-9][0-9]{9}$") String phoneNumber, 
    		Integer age, Gender gender,
    		String address, String password) {
    	super();
    	this.firstName = firstName;
    	this.lastName = lastName;
    	this.email = email;
    	this.phoneNumber = phoneNumber;
    	this.password = password;
    }
>>>>>>> main
}
