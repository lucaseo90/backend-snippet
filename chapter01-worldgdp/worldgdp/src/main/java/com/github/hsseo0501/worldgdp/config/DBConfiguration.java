package com.github.hsseo0501.worldgdp.config;

import com.zaxxer.hikari.HikariDataSource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;

import javax.sql.DataSource;

@Configuration
public class DBConfiguration {

  @Value("${jdbcUrl}")
  private String jdbcUrl;

  @Value("${dataSource.user}")
  private String username;

  @Value("${dataSource.password}")
  private String password;

  @Value("${dataSourceClassName}")
  private String className;

  @Bean
  public DataSource getDataSource() {
    HikariDataSource ds = new HikariDataSource();
    ds.setJdbcUrl(jdbcUrl);
    ds.setUsername(username);
    ds.setPassword(password);
    ds.setDriverClassName(className);
    return ds;
  }

  @Bean
  public NamedParameterJdbcTemplate namedParamJdbcTemplate() {
    NamedParameterJdbcTemplate namedParamJdbcTemplate = new NamedParameterJdbcTemplate(getDataSource());
    return namedParamJdbcTemplate;
  }
}
