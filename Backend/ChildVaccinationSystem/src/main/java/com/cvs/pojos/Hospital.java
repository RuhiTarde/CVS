package com.cvs.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;



@Entity
@Table(name="hospital")
@Getter
@Setter
@NoArgsConstructor
@ToString
public class Hospital extends BaseEntity {
		//id,name,contactNo,email,address
	@NotNull(message = "Name cannot be null")
	@Column(name="hospital_name",length=50)
	private String name;
	
//	@Pattern(regexp="(^$|[0-9]{10})")
	@Column(name="contact_no",length=20)
	private String contactNo;
	
	@Email(message="Email should be valid !!")
	private String email;
	
	private String password;
	
	@NotEmpty
	@Column(name="address",length=50)
	private String address;
	
}
