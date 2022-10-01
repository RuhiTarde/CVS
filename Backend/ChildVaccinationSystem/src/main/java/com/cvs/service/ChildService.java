package com.cvs.service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.cvs.pojos.Child;
import com.cvs.repository.IChildRepo;
@Service
public class ChildService implements IChildService {

	private IChildRepo childRepo;
	public ChildService(IChildRepo childRepo) {
		super();
		this.childRepo = childRepo;
	}

	@Override
	public List<Child> findAll() {
		return childRepo.findAll();
	}

	@Override
	public Child findById(Long id) {
		// TODO Auto-generated method stub
		return childRepo.findById(id).get();
	}

	@Override
	public Child save(Child child) {
		return childRepo.save(child);
	}
//
	@Override
	public Child update(Child child, Long id) {
		return childRepo.save(child);

	}

	@Override
	public void removeChildById(Long id) {
		 childRepo.deleteById(id);
	}

	@Override
	public List<String> calculate(String dob) {

		ArrayList<String> list=new ArrayList<String>();
		LocalDate d1 = LocalDate.parse(dob);


    	LocalDate v1 = d1.plusDays(1);
    	LocalDate v2 = d1.plusMonths(3);
    	LocalDate v3 = d1.plusMonths(22);
    	LocalDate v4 = d1.plusMonths(7);
    	list.add(v1.toString());
    	list.add(v2.toString());
    	list.add(v4.toString());
    	list.add(v3.toString());
		return list;
	}

	@Override
	public Child findByNameFnameMname(String name, String fname, String mname) {
		return childRepo.getChildByName(name, fname, mname);
	}

}
