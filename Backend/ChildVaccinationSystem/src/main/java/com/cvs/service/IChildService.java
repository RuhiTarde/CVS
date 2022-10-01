package com.cvs.service;

import java.util.List;

import com.cvs.pojos.Child;

public interface IChildService {
	
	List<Child> findAll();
	Child findById(Long id);
	Child save(Child child);
	void removeChildById(Long id);
//	@Procedure
//	String insertChild(String name,String fname,String mname,String lname,String address,String dob,String gender,String email);
	Child update(Child child, Long id);
	List<String> calculate(String dob);
	Child findByNameFnameMname(String name,String fname,String mname);
}
