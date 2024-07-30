package com.sunbeam.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.entities.Package;

public interface ImageHandlingService {
	ApiResponse uploadImage(Package packageDetails, MultipartFile image) throws IOException;
	byte[] serveImage(String packageName) throws IOException;
}
