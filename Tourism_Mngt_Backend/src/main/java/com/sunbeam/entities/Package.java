package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "packages")
@NoArgsConstructor
@Getter
@Setter
public class Package extends BaseEntity{
	@Column(length = 100, nullable=false)
	private String packageName;
	
	private String packageDetails;
	
	private String imagePath;
	
	private double startingPrice;

	public Package(String packageName, String packageDetails, String imagePath, double startingPrice) {
		super();
		this.packageName = packageName;
		this.packageDetails = packageDetails;
		this.imagePath = imagePath;
		this.startingPrice = startingPrice;
	}

	
}
