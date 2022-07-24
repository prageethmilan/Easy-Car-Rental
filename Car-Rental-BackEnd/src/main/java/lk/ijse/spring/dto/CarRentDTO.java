package lk.ijse.spring.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:03 PM
 **/
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class CarRentDTO {
    private String rentId;
    private LocalDate date;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate pickUpDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnDate;
    private final String status = "Pending";
    private CustomerDTO customer;
    private CarDTO car;
    private DriverDTO driver;
}
