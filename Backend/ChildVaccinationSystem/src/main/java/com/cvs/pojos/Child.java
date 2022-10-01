package com.cvs.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Table;

import org.springframework.web.bind.annotation.CrossOrigin;

import lombok.Data;

@Entity
@Table(name="children")    //Equivalent to @Getter @Setter @RequiredArgsConstructor @ToString @EqualsAndHashCode. 

public class Child extends BaseEntity {

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getfName() {
		return fName;
	}
	public void setfName(String fName) {
		this.fName = fName;
	}
	public String getmName() {
		return mName;
	}
	public void setmName(String mName) {
		this.mName = mName;
	}
	public String getlName() {
		return lName;
	}
	public void setlName(String lName) {
		this.lName = lName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmail() {
		return email;
	}
	@Column(length=30,name="first_name")
	private String name;
	@Column(length=30,name="father_name")
	private String fName;
	
	@Column(length=30,name="mother_name")
	private String mName;
	
	@Column(length=30,name="last_name")
	private String lName;
	
	@Column(length=30,name="address")
	private String address;
	

	
	private String dob;
	
	@Column(length=20)
	@Enumerated(EnumType.STRING)
	private Gender gender;
	@Column(length=30)
	private String email;
	@Override
	public String toString() {
		return "Child [name=" + name + ", fName=" + fName + ", mName=" + mName + ", lName=" + lName + ", address="
				+ address + ", dob=" + dob + ", gender=" + gender + ", email=" + email + "]";
	}
	
	//private String vaccineId;
	
	
	

}
