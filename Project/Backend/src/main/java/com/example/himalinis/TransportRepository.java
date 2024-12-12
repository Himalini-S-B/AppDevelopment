package com.example.himalinis;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransportRepository extends JpaRepository<TransportEntity, Long> {
    List<TransportEntity> findByDestinationContainingAndServiceTypeContaining(String destination, String serviceType);
}
