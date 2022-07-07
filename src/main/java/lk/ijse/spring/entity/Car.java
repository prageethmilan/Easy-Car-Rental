package lk.ijse.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.type.BlobType;

import javax.persistence.*;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

/**
 * @author : M-Prageeth
 * @created : 06/07/2022 - 7:37 PM
 **/
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
@Entity
public class Car {
    @Id
    private String registrationNO;
    private String brand;
    private String type;
    private int noOfPassengers;
    private String transmissionType;
    private String fuelType;
    private String color;
    @Lob
    private byte[] frontView;
    @Lob
    private byte[] backView;
    @Lob
    private byte[] sideView;
    @Lob
    private byte[] internalView;
    private double dailyRate;
    private double monthlyRate;
    private double freeKmForPrice;
    private double freeKmForDuration;
    private double lossDamageWaiver;
    private double priceForExtraKm;
    private double completeKm;
    private String status;

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<CarRent> rentals = new ArrayList<>();

    @OneToMany(mappedBy = "car", cascade = CascadeType.ALL)
    private List<Maintenance> maintenances = new ArrayList<>();
}
