package com.sunbeam.service;

import static org.apache.commons.io.FileUtils.readFileToByteArray;
import static org.apache.commons.io.FileUtils.writeByteArrayToFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ResourceNotFoundException;
import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dao.CityDao;
import com.sunbeam.dao.PackageDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.City;
import com.sunbeam.entities.Image;
import com.sunbeam.entities.Package;

@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService {
	@Value("${file.upload.location}") 
	private String uploadFolder;

	@Autowired
	private PackageDao packageDao;
	@Autowired
	private CityDao cityDao;

	@PostConstruct
	public void init() throws IOException {
		File folder = new File(uploadFolder);
		if (folder.exists()) {
			System.out.println("folder exists alrdy !");
		} else {
			folder.mkdir();
			System.out.println("created a folder !");
		}
	}

	@Override
	public Package uploadImage(Package packageDetails, MultipartFile image) throws IOException {
				String path = uploadFolder.concat(image.getOriginalFilename());
				System.out.println(path);
				writeByteArrayToFile(new File(path), image.getBytes());
				packageDetails.setImagePath(path);
		return packageDetails;
	}
	
	public byte[] serveImage(String packageName) throws IOException {
		Package pkg = packageDao.findByName(packageName);
		String path = pkg.getImagePath();
		if (path != null) {
			return readFileToByteArray(new File(path));
		}
		throw new ApiException("Image not assigned yet!!");
	}
	
	public List<Image> uploadImage(Long id, MultipartFile[] images) throws IOException {
		
		City city = cityDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Invalid City ID!!"));
		List<Image> imageList = new ArrayList<>();
		for (MultipartFile image : images) {
			String path = uploadFolder.concat(image.getOriginalFilename());
			writeByteArrayToFile(new File(path), image.getBytes());
			Image imageEntity = new Image();
			imageEntity.setImagePath(path);
			imageEntity.setCityEntity(cityDao.findById(city.getId()).orElseThrow());
			imageList.add(imageEntity);
		}
		return imageList;
		
	}
	 
}
