package com.cvs.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.cvs.pojos.Child;
@Repository
public interface IChildRepo extends JpaRepository<Child, Long> {

//	List<Child> getAll();
//	Child getById(Long id);
//	String saveChild(Child child);
//	void updateChild(Child child,Long id);
//	void deleteChildById(Long id);
//	
	@Query("select c from Child c  where c.name =?1 and c.fName=?2 and c.mName=?3 ")
	Child getChildByName(String name,String fName,String mName);
	
}
