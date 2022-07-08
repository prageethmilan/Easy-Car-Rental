package lk.ijse.spring.repo;

import lk.ijse.spring.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:19 PM
 **/
public interface AdminRepo extends JpaRepository<Admin, String> {

}
