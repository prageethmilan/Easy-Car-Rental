package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import lk.ijse.spring.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:21 PM
 **/
public interface CustomerRepo extends JpaRepository<Customer, String> {
    Optional<Customer> findCustomerByUsername(String username);
    Optional<Customer> findCustomerByPassword(String password);
    Optional<Customer> findCustomerByUsernameAndPassword(String username,String password);

    @Query(value = "SELECT customerId FROM Customer ORDER BY customerId DESC LIMIT 1",nativeQuery = true)
    String generateCustomerId();
}
