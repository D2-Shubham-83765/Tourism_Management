package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.BookingRequestDTO;
import com.sunbeam.dto.BookingResponseDTO;

public interface BookingService {
	String addBookingDetails(BookingRequestDTO dto);
	
	List<BookingResponseDTO> getUserAllBookingDetails(Long id);
}
