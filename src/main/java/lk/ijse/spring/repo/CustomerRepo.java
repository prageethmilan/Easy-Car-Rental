package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:21 PM
 **/
public interface CustomerRepo extends JpaRepository<Customer, String> {
}
