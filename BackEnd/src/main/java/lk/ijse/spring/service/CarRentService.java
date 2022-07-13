package lk.ijse.spring.service;

import lk.ijse.spring.dto.CarRentDTO;

import java.util.List;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:23 PM
 **/
public interface CarRentService {
    void addCarRent(CarRentDTO dto);

    void updateCarRent(CarRentDTO dto);

    void deleteCarRent(String rentId);

    CarRentDTO searchCarRent(String rentId);

    List<CarRentDTO> getAllCarRents();

    void updateCarRentStatus(String rentId, String status);

    List<CarRentDTO> getCarRentsByStatus(String status);

    List<CarRentDTO> getCarRentsByDrivingLicenceNo(String status, String licenceNo);
}
