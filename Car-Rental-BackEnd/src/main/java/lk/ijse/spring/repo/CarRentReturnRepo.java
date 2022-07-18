package lk.ijse.spring.repo;

import lk.ijse.spring.entity.CarRentReturn;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:20 PM
 **/
public interface CarRentReturnRepo extends JpaRepository<CarRentReturn, String> {
    @Query(value = "SELECT returnId FROM CarRentReturn ORDER BY returnId DESC LIMIT 1", nativeQuery = true)
    String generateReturnId();
}
