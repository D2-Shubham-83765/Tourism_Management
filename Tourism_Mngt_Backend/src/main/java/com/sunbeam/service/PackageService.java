package com.sunbeam.service;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.PackageDTO;
import com.sunbeam.dto.updatePackageDTO;
import com.sunbeam.entities.Package;

public interface PackageService {
	Package addPackage(PackageDTO dto);
	ApiResponse deletePackage(Long id);
	String updatePackage(Long id, updatePackageDTO dto);
}
