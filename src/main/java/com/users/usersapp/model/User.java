package com.users.usersapp.model;

import com.users.usersapp.enums.Status;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.*;
import java.math.BigDecimal;

@Getter
@Setter
@Entity
@Table(name = "listed_user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Name cannot be null or empty")
    @Column(name = "fullname")
    @Size(max = 71)
    private String fullName;

    @NotEmpty(message = "Username cannot be null or empty")
    @Column(name = "username")
    @Size(max = 20)
    private String username;

    @NotNull(message = "Phone cannot be null")
    @Positive(message = "Phone cannot be less than 0")
    @Column(name = "phone")
    @Min(value = 10000)
    private BigDecimal phone;

    @NotEmpty(message = "Location cannot be null")
    @Column(name = "location")
    @Size(max = 189)
    private String location;

    @NotNull(message = "Status cannot be null")
    @Column(name = "status")
    private Status status;
}
