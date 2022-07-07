package lk.ijse.spring.config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

/**
 * @author : M-Prageeth
 * @created : 07/07/2022 - 1:53 PM
 **/
@Configuration
@EnableWebMvc
@ComponentScan(basePackages = "lk.ijse.spring")
public class WebAppConfig {
    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

}
