package lk.ijse.spring.service;

import lk.ijse.spring.dto.PaymentDTO;

import java.time.LocalDate;
import java.util.List;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 7:24 PM
 **/
public interface PaymentService {
    void savePayment(PaymentDTO dto);

    void updatePayment(PaymentDTO dto);

    void deletePayment(String paymentId);

    PaymentDTO searchPayment(String paymentId);

    List<PaymentDTO> getAllPayments();

    List<PaymentDTO> getAllPaymentsByDateRange(LocalDate fromDate, LocalDate toDate);

    List<PaymentDTO> getAllPaymentsByCustomerId(String customerId);

    String generatePaymentId();
}
