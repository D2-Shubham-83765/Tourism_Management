package com.sunbeam.service;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.Package;

public interface PackageService {
	Package addPackage(Package pkg, MultipartFile image);
	ApiResponse deletePackage(Long id);
}
