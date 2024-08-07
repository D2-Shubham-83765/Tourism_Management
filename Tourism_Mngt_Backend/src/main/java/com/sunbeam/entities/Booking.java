package com.sunbeam.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
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
	private Long bookingNo;
	
	@OneToOne
	@JoinColumn(name = "user_id", referencedColumnName = "id")
	private User userId;
	
	@OneToOne
	@JoinColumn(name = "package_id", referencedColumnName = "id")
	private Package packageId;
	
	@OneToOne
	@JoinColumn(name = "city_id", referencedColumnName = "id")
	private City cityId;
	
}
