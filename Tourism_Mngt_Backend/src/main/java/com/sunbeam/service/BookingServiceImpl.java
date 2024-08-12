package com.sunbeam.service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.custom_exception.ResourceNotFoundException;
import com.sunbeam.dao.BookingDao;
import com.sunbeam.dao.UserDao;
import com.sunbeam.dto.BookingRequestDTO;
import com.sunbeam.dto.BookingResponseDTO;
import com.sunbeam.entities.Booking;
import com.sunbeam.entities.User;

@Service
@Transactional
public class BookingServiceImpl implements BookingService{

	@Autowired
	private BookingDao bookingDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private ModelMapper mapper;
	
	Booking book;
	
	public String addBookingDetails(BookingRequestDTO dto) {
		book = mapper.map(dto, Booking.class);
		book.setBookingNo(UUID.randomUUID().toString());
		System.out.println(dto.getUser_id());
		book.setUserEntity(userDao.findById(dto.getUser_id()).orElseThrow(()-> new ResourceNotFoundException("User doesn't exist")));
		bookingDao.save(book);
		return "Booking has been generated";
	}
	
	public List<BookingResponseDTO> getUserAllBookingDetails(Long id){
		User user = userDao.findBookingByUserId(id);
		List<Booking> bookings = user.getBookings();
		System.out.println(bookings);
		List<BookingResponseDTO> bookingList = bookings.stream().map(booking-> 
		mapper.map(booking, BookingResponseDTO.class)).collect(Collectors.toList());
		return bookingList;
		}
}
