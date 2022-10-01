package com.cvs.repository;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cvs.pojos.Hospital;
@Repository
public class HospitalRepoImpl implements IHospitalRepo {

	@Autowired
	private SessionFactory sf;
	@Override
	public Hospital getDetails() {
		String jpql="select h from Hospital h ";
		return (Hospital) sf.openSession().createQuery(jpql,Hospital.class).getSingleResult();
	}

	@Override
	public String saveHospital(Hospital hospital) {
		sf.openSession().save(hospital);
		return "Hospital insertion done !!";
		
	}

	@Override
	public Hospital validateHospital(String email, String password) {
		String jpql="select h from Hospital h where h.email=:em and h.password=:pass";
		return sf.openSession().createQuery(jpql,Hospital.class).setParameter("em",email)
				.setParameter("pass",password).getSingleResult();
	}
	/*org.springframework.orm.jpa.JpaSystemException: No CurrentSessionContext configured! solve this 
	 * exception by cahnging sf.getCurrentSession() to sf.openSession()*/
	
}
