package lk.ijse.spring.service.impl;

import lk.ijse.spring.dto.CarRentDTO;
import lk.ijse.spring.entity.CarRent;
import lk.ijse.spring.repo.CarRentRepo;
import lk.ijse.spring.service.CarRentService;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:25 PM
 **/
@Service
@Transactional
public class CarRentServiceImpl implements CarRentService {

    @Autowired
    CarRentRepo repo;

    @Autowired
    ModelMapper mapper;

    @Override
    public void addCarRent(CarRentDTO dto) {
        if (!repo.existsById(dto.getRentId())) {
            repo.save(mapper.map(dto, CarRent.class));
        } else {
            throw new RuntimeException("Booking Already Exists...");
        }
    }

    @Override
    public void updateCarRent(CarRentDTO dto) {
        if (repo.existsById(dto.getRentId())) {
            repo.save(mapper.map(dto, CarRent.class));
        } else {
            throw new RuntimeException("No Such CarRents To Update");
        }
    }

    @Override
    public void deleteCarRent(String rentId) {
        if (repo.existsById(rentId)) {
            repo.deleteById(rentId);
        } else {
            throw new RuntimeException("No Such CarRents To Delete");
        }
    }

    @Override
    public CarRentDTO searchCarRent(String rentId) {
        if (repo.existsById(rentId)) {
            return mapper.map(repo.findById(rentId).get(), CarRentDTO.class);
        } else {
            throw new RuntimeException("Car Rent Not Found...");
        }
    }

    @Override
    public List<CarRentDTO> getAllCarRents() {
        return mapper.map(repo.findAll(), new TypeToken<List<CarRentDTO>>() {
        }.getType());
    }

    @Override
    public void updateCarRentStatus(String rentId, String status) {
        if (repo.existsById(rentId)) {
            repo.updateCarRentStatus(rentId, status);
        } else {
            throw new RuntimeException("No Such CarRent To Update");
        }
    }

    @Override
    public List<CarRentDTO> getCarRentsByStatus(String status) {
        return mapper.map(repo.getAllByStatus(status), new TypeToken<List<CarRentDTO>>() {
        }.getType());
    }

    @Override
    public List<CarRentDTO> getCarRentsByDrivingLicenceNo(String status, String licenceNo) {
        return mapper.map(repo.getAllByDrivingLicenceNo(status, licenceNo), new TypeToken<List<CarRentDTO>>() {
        }.getType());
    }
}
