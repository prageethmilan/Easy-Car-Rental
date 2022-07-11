package lk.ijse.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:06 PM
 **/
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class MaintenanceDTO {
    private String maintenanceId;
    private LocalDate date;
    private String details;
    private CarDTO car;
}
