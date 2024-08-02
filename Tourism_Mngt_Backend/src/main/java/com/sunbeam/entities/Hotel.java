package com.sunbeam.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "hotels")
@Getter
@Setter
@NoArgsConstructor
public class Hotel extends BaseEntity{
	@Column(nullable = false)
    private String name;
    
    @Column(nullable = false)
    private String address;
    
    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkInDate;
    
    @Column(nullable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkOutDate;
    
    @Column(nullable = false)
    private Double ratePerPerson;
    
    @Column(nullable = false)
    private Integer starRating;
    
    @ManyToOne
    @JoinColumn(name = "city_id", referencedColumnName = "id")
    private City cityEntity;

	public Hotel(String name, String address, LocalDate checkInDate, LocalDate checkOutDate, Double ratePerPerson,
			Integer starRating) {
		super();
		this.name = name;
		this.address = address;
		this.checkInDate = checkInDate;
		this.checkOutDate = checkOutDate;
		this.ratePerPerson = ratePerPerson;
		this.starRating = starRating;
	}
    
    
}
