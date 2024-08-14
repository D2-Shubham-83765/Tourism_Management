//package com.sunbeam.service;
//
//import java.util.List;
//import java.util.Optional;
//import java.util.UUID;
//import java.util.stream.Collectors;
//
//import javax.transaction.Transactional;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.sunbeam.custom_exception.ApiException;
//import com.sunbeam.custom_exception.ResourceNotFoundException;
//import com.sunbeam.dao.BookingDao;
//import com.sunbeam.dao.UserDao;
//import com.sunbeam.dto.BookingRequestDTO;
//import com.sunbeam.dto.BookingResponseDTO;
//import com.sunbeam.dto.UserBookingDTO;
//import com.sunbeam.entities.Booking;
//import com.sunbeam.entities.User;
//
//@Service
//@Transactional
//public class BookingServiceImpl implements BookingService{
//
//	@Autowired
//	private BookingDao bookingDao;
//	
//	@Autowired
//	private UserDao userDao;
//	
//	@Autowired
//	private ModelMapper mapper;
//	
//	Booking book;
//	
//	public String addBookingDetails(BookingRequestDTO dto) {
//		book = mapper.map(dto, Booking.class);
//		book.setBookingNo(UUID.randomUUID().toString());
//		System.out.println(dto.getUser_id());
//		book.setUserEntity(userDao.findByEmail(dto.getUser_id()).orElseThrow(()-> new ResourceNotFoundException("User doesn't exist")));
//		bookingDao.save(book);
//		return "Booking has been generated";
//	}
//	
//	public UserBookingDTO getUserAllBookingDetails(String email){
//		User user = userDao.findByEmail(email).orElseThrow(()-> new ApiException("Email not found"));
//		UserBookingDTO dto = new UserBookingDTO();
//		dto.setEmail(user.getEmail());
//		
//		List<BookingResponseDTO> bookingDTOs = user.getBookings().stream().map(booking -> {
//            BookingResponseDTO bookingDTO = new BookingResponseDTO();
//            bookingDTO.setBookingNo(booking.getBookingNo());
//            bookingDTO.setPackageName(booking.getPackageName());
//            bookingDTO.setCityName(booking.getCityName());
//            bookingDTO.setNoOfPassengers(booking.getNoOfPassengers());
//            bookingDTO.setTotalCost(booking.getTotalCost());
//            bookingDTO.setBookingStatus(booking.isPaymentStatus());
//            return bookingDTO;
//        }).collect(Collectors.toList());
//
//        dto.setBookings(bookingDTOs);
//
//        return dto;
//		}
//}
