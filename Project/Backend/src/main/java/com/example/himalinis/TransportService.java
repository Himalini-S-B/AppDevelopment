package com.example.himalinis;

import com.example.himalinis.TransportEntity;
import com.example.himalinis.TransportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransportService {

	 @Autowired
	    private TransportRepository transportRepository;

	    public List<TransportEntity> searchTransport(String destination, String serviceType) {
	        return transportRepository.findByDestinationContainingAndServiceTypeContaining(destination, serviceType);
	    }
}
