package com.users.usersapp.model;

import com.users.usersapp.enums.Status;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

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
    private String fullName;

    @NotEmpty(message = "Username cannot be null or empty")
    @Column(name = "username")
    private String username;

    @NotNull(message = "Phone cannot be null")
    @Positive(message = "Phone cannot be less than 0")
    @Column(name = "phone")
    private Integer phone;

    @NotEmpty(message = "Location cannot be null")
    @Column(name = "location")
    private String location;

    @NotNull(message = "Status cannot be null")
    @Column(name = "status")
    private Status status;
}
