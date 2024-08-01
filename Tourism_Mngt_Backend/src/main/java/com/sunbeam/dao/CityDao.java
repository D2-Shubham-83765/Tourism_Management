package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.sunbeam.dto.CityDTO;
import com.sunbeam.entities.City;

public interface CityDao extends JpaRepository<City, Long>{
	@Query("SELECT c from City c where c.package_id =:packageId")
	List<CityDTO> findByPackageId(Long packageId);
}
