package com.cvs.pojos;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

//common super class for all entities
@MappedSuperclass
/*
 
 * Meaning : Class level annotation to specify to hibernate : it's common base
 * class --entities can extend from it . no table associated.
 */
public class BaseEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	

}
