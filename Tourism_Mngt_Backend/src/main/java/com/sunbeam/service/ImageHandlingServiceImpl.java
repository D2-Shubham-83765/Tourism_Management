package com.sunbeam.service;

import static org.apache.commons.io.FileUtils.readFileToByteArray;
import static org.apache.commons.io.FileUtils.writeByteArrayToFile;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.custom_exception.ApiException;
import com.sunbeam.dao.PackageDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.Package;

@Service
@Transactional
public class ImageHandlingServiceImpl implements ImageHandlingService {
	@Value("${file.upload.location}") 
	private String uploadFolder;

	@Autowired
	private PackageDao packageDao;

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

	@Override
	/*
	 * public byte[] serveImage(String packageName) throws IOException { String
	 * imagePath = uploadFolder + packageName + ".jpg"; // assuming jpg format File
	 * imageFile = new File(imagePath); if (imageFile.exists()) { try
	 * (FileInputStream fis = new FileInputStream(imageFile)) { byte[] imageData =
	 * new byte[(int) imageFile.length()]; fis.read(imageData); return imageData; }
	 * catch (IOException e) { new ApiException("Error reading the image file");
	 * return null; } } else { return null; } }
	 */
	
	
	public byte[] serveImage(String packageName) throws IOException {
		Package pkg = packageDao.findByName(packageName);
		String path = pkg.getImagePath();
		if (path != null) {
			return readFileToByteArray(new File(path));
		}
		throw new ApiException("Image not assigned yet!!");
	}
	 
}
