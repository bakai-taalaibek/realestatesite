package com.company.realestatesite.models.entities;

import com.company.realestatesite.models.enums.Offer;
import com.company.realestatesite.models.enums.Type;
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
public class Announcement extends BaseEntity {

    @Column(name = "title")
    @NotNull()
    String title;

    @Column(name = "description")
    @NotNull()
    String description;

    @Column(name = "price")
    @NotNull()
    Integer price;

    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    Type type;

    @Column(name = "offer")
    @Enumerated(EnumType.STRING)
    Offer offer;

    @Column(name = "area")
    @NotNull()
    Integer area;

    @Column(name = "rooms")
    @NotNull()
    Integer rooms;

    @Column(name = "city")
    @NotNull()
    String city;

    @Column(name = "address")
    @NotNull()
    String address;
    @ManyToOne
    User user;
}
