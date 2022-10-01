package com.cvs.service;
import com.cvs.pojos.Hospital;

public interface IHospitalService {
	public Hospital authenticateHospital(String email, String password);
	public String saveHospital(Hospital hospital);
	public Hospital findHospital();
	
}
