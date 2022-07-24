package lk.ijse.spring.service;

import lk.ijse.spring.dto.LoginDTO;

/**
 * @author : M-Prageeth
 * @created : 24/07/2022 - 7:56 AM
 **/
public interface LoginService {
    void saveLogData(LoginDTO dto);

    String generateLoginId();

    String getLastLoginId();

    LoginDTO searchLogin(String loginId);
}
