package lk.ijse.spring.service;

import lk.ijse.spring.dto.CustomerDTO;

import java.util.List;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:23 PM
 **/

public interface CustomerService {
    void saveCustomer(CustomerDTO dto);

    void updateCustomer(CustomerDTO dto);

    CustomerDTO searchCustomer(String customerId);

    void deleteCustomer(String customerId);

    List<CustomerDTO> getAllCustomers();

    boolean findCustomerByUsername(String username);

    boolean findCustomerByPassword(String password);

    CustomerDTO findCustomerByUsernameAndPassword(String username, String password);

    String generateCustomerId();
}
