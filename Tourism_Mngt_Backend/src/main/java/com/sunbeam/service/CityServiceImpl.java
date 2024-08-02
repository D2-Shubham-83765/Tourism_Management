package com.sunbeam.service;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dao.CityDao;
import com.sunbeam.dao.HotelDao;
import com.sunbeam.dao.ImageDao;
import com.sunbeam.dao.PackageDao;
import com.sunbeam.dto.CityDTO;
import com.sunbeam.dto.CityImageDTO;
import com.sunbeam.dto.CityRequestDTO;
import com.sunbeam.dto.CityResponseDTO;
import com.sunbeam.dto.HotelRequestDTO;
import com.sunbeam.dto.ImageResponseDTO;
import com.sunbeam.entities.City;
import com.sunbeam.entities.Hotel;
import com.sunbeam.entities.Image;

@Service
@Transactional
public class CityServiceImpl implements CityService{
	@Autowired
	private CityDao cityDao;
	@Autowired
	private ModelMapper mapper;
	@Autowired
	private PackageDao packageDao;
	@Autowired
	private ImageHandlingServiceImpl imageHandlingService;
	@Autowired
	private ImageDao imageDao;
	@Autowired
	private HotelDao hotelDao;
	
	
	public List<CityDTO> getAllCityDetails(Long packageId){
		List<CityDTO> cityList = cityDao.findByPackageId(packageId);
		return cityList;
	}
	
	public City addCityDetails(CityRequestDTO dto) throws IOException {
		City city = mapper.map(dto, City.class);
		city.setPackageEntity(packageDao.findById(dto.getPackage_id()).orElseThrow());
		 byte[] imageData = dto.getCityImage().getBytes();
	        city.setCityImage(imageData);
		return cityDao.save(city);			
	}
	
	public void addCityImagesById(CityImageDTO dto) throws IOException {
		City city = cityDao.findById(dto.getCity_id()).orElseThrow();
		
		Image imageEntity = mapper.map(dto, Image.class);
		List<Image> images = imageHandlingService.uploadImage(dto.getCity_id(),dto.getImages());
		for (Image image : images) {
	        city.addImage(image);
	    }
		cityDao.save(city);
	}
	
	public CityResponseDTO getCityDetailsWithImages(Long id){
		City city = cityDao.findCityWithImagesById(id);
		CityResponseDTO dto = mapper.map(city,CityResponseDTO.class);
		List<Image> images = city.getImages();
		List<ImageResponseDTO> imageList = images.stream().map(image->mapper.map(image, ImageResponseDTO.class)).collect(Collectors.toList());
		dto.setImages(imageList);
		return dto;
	}
	
	public void deleteCity(Long cityId) {
        City city = cityDao.findById(cityId).orElseThrow();
        List<Image> images = city.getImages();
        List<Hotel> hotels = city.getHotels();
        
        images.forEach(image->imageDao.delete(image));
        
        hotels.forEach(hotel->hotelDao.delete(hotel));
        
        cityDao.delete(city);
	}
	
	public String addHotel(HotelRequestDTO dto) {
		City city = cityDao.findById(dto.getCity_id()).orElseThrow();
		Hotel hotel = mapper.map(dto, Hotel.class);
		city.addHotel(hotel);
		return "Hotel for the city added successsfully";
	}
	
}
