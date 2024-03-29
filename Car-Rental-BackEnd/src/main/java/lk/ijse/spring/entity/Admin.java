package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.Entity;
import javax.persistence.Id;

/**
 * @author : M-Prageeth
 * @created : 06/07/2022 - 7:04 PM
 **/

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Admin {
    @Id
    private String adminId;
    private String name;
    private String address;
    private String contact;
    private String email;
    private String username;
    private String password;
}
