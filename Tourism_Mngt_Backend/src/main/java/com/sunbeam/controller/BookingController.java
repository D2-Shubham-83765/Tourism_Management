package com.sunbeam.controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sunbeam.custom_exception.ResourceNotFoundException;
import com.sunbeam.dto.BookingRequestDTO;
import com.sunbeam.dto.BookingResponseDTO;
import com.sunbeam.service.BookingServiceImpl;

@RestController
@RequestMapping("/booking")
public class BookingController {
	
	@Autowired
	private BookingServiceImpl bookingService;
	
	@PostMapping("/save-details")
	public ResponseEntity<?> addBooking(@RequestBody BookingRequestDTO dto){
		try {
            String response = bookingService.addBookingDetails(dto);
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
	}
	
	@GetMapping("/get-bookings/{id}")
	public ResponseEntity<?> getUserBookings(@PathVariable Long id){
		try {
			List<BookingResponseDTO> list = bookingService.getUserAllBookingDetails(id);
            return ResponseEntity.ok(list);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
        }
	}
}
