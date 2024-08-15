package com.sunbeam.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ForgetPasswordDTO {
	@NotBlank
	@Email
	private String email;
	private String confirmPassword;
	private String newPassword;
	private SecurityQuestionDTO securityQuestion;
	private String securityAnswer;
}
