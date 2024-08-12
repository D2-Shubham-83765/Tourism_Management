package com.sunbeam.service;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.TravellerDao;
import com.sunbeam.dto.TravellerDTO;
import com.sunbeam.entities.Traveller;

@Service
@Transactional
public class TravellerServiceImpl implements TravellerService {
	@Autowired
	private TravellerDao travellerDao;
	
	@Autowired
	private ModelMapper mapper;
	
	
	
	public String addTravellers(List<TravellerDTO> travellers, String bookingNo) {
		for (TravellerDTO traveller : travellers) {
			Traveller travellerEntity = mapper.map(traveller, Traveller.class);
			
		}

		return null;
	}
}
