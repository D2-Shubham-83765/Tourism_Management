package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "images")
@NoArgsConstructor
@Getter
@Setter
public class Image extends BaseEntity{
	@Column(name = "image_1", nullable = false)
	private String imagePath1;
	
	@Column(name = "image_2", nullable = false)
	private String imagePath2;
	
	@Column(name = "image_3", nullable = false)
	private String imagePath3;
	
	@Column(name = "image_4", nullable = false)
	private String imagePath4;
	
	@Column(name = "image_5", nullable = false)
	private String imagePath5;
	
	@ManyToOne
	@JoinColumn(name = "city_id", referencedColumnName = "id")
	private City cityEntity;
}
