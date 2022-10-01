package com.cvs.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cvs.pojos.Hospital;
import com.cvs.repository.IHospitalRepo;

@Service
public class HospitalService implements IHospitalService {
	
	@Autowired
	private  IHospitalRepo hospitalRepo;
	@Override
	public Hospital authenticateHospital(String email, String password) {
		// simply call dao's method for db based authentication
		return hospitalRepo.validateHospital(email, password);
			
	}
	@Override
	public String saveHospital(Hospital hospital) {
		// TODO Auto-generated method stub
		return hospitalRepo.saveHospital(hospital);
	}
	@Override
	public Hospital findHospital() {
		return (Hospital) hospitalRepo.getDetails();
	}
	

}
