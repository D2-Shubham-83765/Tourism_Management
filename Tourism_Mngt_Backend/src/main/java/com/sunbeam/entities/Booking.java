package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="bookings")
@Data
@NoArgsConstructor
public class Booking extends BaseEntity{
	@Column(nullable = false)
	private String bookingNo;
	
	@ManyToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User userEntity;
	
	@Column(nullable = false)
	private String packageName;
	
	@Column(nullable = false)
	private String cityName;
	
	private Long noOfPassengers;
	
	private Double totalCost;
	
	@Column(columnDefinition = "BOOLEAN DEFAULT FALSE")
	private boolean isPaymentStatus = true;
	
}
