package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Maintenance;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:21 PM
 **/
public interface MaintenanceRepo extends JpaRepository<Maintenance, String> {
}
