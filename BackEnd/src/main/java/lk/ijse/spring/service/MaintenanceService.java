package lk.ijse.spring.service;

import lk.ijse.spring.dto.MaintenanceDTO;

import java.util.List;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:24 PM
 **/
public interface MaintenanceService {
    void addMaintenance(MaintenanceDTO dto);

    void updateMaintenance(MaintenanceDTO dto);

    void deleteMaintenance(String maintenanceId);

    MaintenanceDTO searchMaintenance(String maintenanceId);

    List<MaintenanceDTO> getAllMaintenances();

    String generateMaintenanceId();

    void updateMaintenanceCost(String maintenanceId, double cost);

    List<MaintenanceDTO> getAllUnderMaintenances();
}
