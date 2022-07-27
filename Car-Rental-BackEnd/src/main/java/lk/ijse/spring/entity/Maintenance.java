package lk.ijse.spring.entity;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import java.time.LocalDate;
import java.util.Date;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 8:58 AM
 **/
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Maintenance {
    @Id
    private String maintenanceId;
    private String date;
    private String details;
    private final double cost = 0.0;

    @ManyToOne
    @JoinColumn(name = "registrationNO", referencedColumnName = "registrationNO", nullable = false)
    private Car car;
}
