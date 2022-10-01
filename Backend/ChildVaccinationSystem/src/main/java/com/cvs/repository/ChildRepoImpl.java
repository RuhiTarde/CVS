//package com.cvs.repository;
//
//import java.util.List;
//
//import org.hibernate.SessionFactory;
//import org.springframework.stereotype.Repository;
//
//import com.cvs.pojos.Child;
//@Repository
//public class ChildRepoImpl implements IChildRepo {
//
//	private SessionFactory sf;
//	@Override
//	public List<Child> getAll() {
//		String jpql="select c from Child c ";
//		return sf.getCurrentSession().createQuery(jpql,Child.class).getResultList();
//
//	}
//
//	@Override
//	public Child getById(Long id) {
//		String jpql="select c from Child h where c.id=:id";
//		return sf.openSession().createQuery(jpql,Child.class).setParameter("id", id).getSingleResult();
//	}
//
//	@Override
//	public String saveChild(Child child) {
//		sf.openSession().save(child);
//		return "Child inserted !!";
//	}
//	@Override
//	public void updateChild(Child child, Long id) {
//		// TODO Auto-generated method stub
//
//	}
//
//	@Override
//	public void deleteChildById(Long id) {
//		// TODO Auto-generated method stub
//		sf.openSession().delete(getById(id));
//
//	}
//
//}
