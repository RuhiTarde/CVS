package com.cvs.repository;

import com.cvs.pojos.Hospital;

public interface IHospitalRepo {
	
	Hospital getDetails();
	String saveHospital(Hospital hospital);
	Hospital validateHospital(String email, String password);
	
}
