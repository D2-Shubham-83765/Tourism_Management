package com.sunbeam.service;

import java.io.IOException;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dao.CityDao;
import com.sunbeam.dto.CityDTO;
import com.sunbeam.dto.CityRequestDTO;
import com.sunbeam.entities.City;

@Service
@Transactional
public class CityServiceImpl implements CityService{
	@Autowired
	private CityDao cityDao;
	@Autowired
	private ModelMapper mapper;
	
	
	public List<CityDTO> getAllCityDetails(Long packageId){
		List<CityDTO> cityList = cityDao.findByPackageId(packageId);
		return cityList; 
	}
	
	public City addCityDetails(CityRequestDTO dto, MultipartFile cityImage) throws IOException {
		City city = mapper.map(dto, City.class);
		 byte[] imageData = cityImage.getBytes();
	        city.setCityImage(imageData);
		return cityDao.save(city);			
	}
	
}
