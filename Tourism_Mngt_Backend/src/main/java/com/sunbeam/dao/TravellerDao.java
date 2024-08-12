package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Traveller;

public interface TravellerDao extends JpaRepository<Traveller, Long>{

}
