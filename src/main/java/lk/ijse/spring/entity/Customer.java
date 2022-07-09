package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : M-Prageeth
 * @created : 06/07/2022 - 7:33 PM
 **/
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Customer {
    @Id
    private String customerId;
    private String name;
    private String address;
    private int contactNo;
    private String email;
    private String nicNo;
    @Lob
    private byte[] nicFront;
    @Lob
    private byte[] nicBack;
    private String licenceNo;
    @Lob
    private byte[] licenceImg;
    private String username;
    private String password;

    @OneToMany(mappedBy = "customer",cascade = CascadeType.ALL)
    private List<CarRent> rentals = new ArrayList<>();
}
