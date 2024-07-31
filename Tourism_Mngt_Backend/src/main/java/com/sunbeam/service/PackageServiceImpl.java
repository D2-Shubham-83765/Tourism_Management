package com.sunbeam.service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ResourceNotFoundException;
import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dao.PackageDao;
import com.sunbeam.dto.PackageResponseDTO;
import com.sunbeam.entities.Package;

import com.sunbeam.dto.ApiResponse;

@Service
@Transactional
public class PackageServiceImpl implements PackageService {
	    
	    @Autowired
	    private PackageDao packageDao;
	    
	    @Autowired
	    private ImageHandlingServiceImpl imageHandlingService;
	    
	    public Package addPackage(Package pkg, MultipartFile image) {
			try {
				Package packageEntity = imageHandlingService.uploadImage(pkg, image);
				return packageDao.save(packageEntity);
			} catch (IOException e) {
				e.printStackTrace();
			  }
			throw new ApiException("Package can't be uploaded");
	    }
	    
		
	    public List<PackageResponseDTO> getPackageDetails() throws IOException {
	        List<Package> packagesList = packageDao.findAll();
	        List<PackageResponseDTO> packageResponse = new ArrayList<>();
	        for (Package pkg : packagesList) {
	            PackageResponseDTO dto = new PackageResponseDTO();
	            dto.setPackageName(pkg.getPackageName());
	            dto.setStartingPrice(pkg.getStartingPrice());
	            byte[] image = imageHandlingService.serveImage(dto.getPackageName());
	            dto.setImage(image);
	            packageResponse.add(dto);
	        }
	        return packageResponse;
	    }
	    
	    public ApiResponse deletePackage(Long id) {
	    	Package pkg = packageDao.findById(id).orElseThrow(()-> new ResourceNotFoundException("Package doesn't exists"));
	    	packageDao.delete(pkg);
	    	return new ApiResponse(pkg.getPackageName()+ " package has been deleted");
	    }
	}
