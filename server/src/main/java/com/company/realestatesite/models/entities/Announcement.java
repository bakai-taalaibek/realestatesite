package com.company.realestatesite.models.entities;

import com.sun.istack.NotNull;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
@Entity
@Table(name = "tb_announcement")
public class Announcement extends BaseEntity{

    @Column(name = "title")
    @NotNull()
    private String title;

    @Column(name = "description")
    @NotNull()
    private String description;

    @Column(name = "price")
    @NotNull()
    private Integer price;

    @Column(name = "type")
    @NotNull()
    private String type;

    @Column(name = "offer")
    @NotNull()
    private String offer;

    @Column(name = "area")
    @NotNull()
    private Integer area;

    @Column(name = "rooms")
    @NotNull()
    private Integer rooms;

    @Column(name = "city")
    @NotNull()
    private String city;

    @Column(name = "address")
    @NotNull()
    private String address;

    /*@OneToMany(cascade = CascadeType.ALL, orphanRemoval = true)
    @JoinColumn(name = "user_id", nullable = false)
    private List<User> user;*/
    @ManyToOne
    private User user;
}
