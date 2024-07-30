package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Package;

public interface PackageDao extends JpaRepository<Package, Long>{

}
