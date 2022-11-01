package com.users.usersapp.model;

import com.users.usersapp.enums.Status;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@Entity
@Table(name = "listed_user")
public class User {
    @Id
    @GeneratedValue
    private Long id;
    @NotEmpty(message = "Name cannot be null or empty")
    private String fullName;
    @NotEmpty(message = "Username cannot be null or empty")
    private String username;
    @NotNull(message = "Phone cannot be null")
    @Positive(message = "Phone cannot be less than 0")
    private Integer phone;
    @NotEmpty(message = "Location cannot be null")
    private String location;
    @NotNull(message = "Status cannot be null")
    private Status status;
}
