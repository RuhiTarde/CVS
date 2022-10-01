package com.cvs.exception;

public class ChildNotFoundException extends RuntimeException{
	
	public ChildNotFoundException(Long id) {
		super("Could not found the child with id : "+id);
	}
}
