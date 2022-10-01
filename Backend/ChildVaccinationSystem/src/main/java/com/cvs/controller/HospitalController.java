package com.cvs.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cvs.pojos.Hospital;
import com.cvs.service.IHospitalService;
@CrossOrigin( origins="http://localhost:3000")
@Controller
@ResponseBody
//instead of above both annotation one combine @RestController annotation is also used
@RequestMapping("/hospital")
public class HospitalController {
	//use constructor based dependency injection of Service
	private IHospitalService hospitalService;

	public HospitalController(IHospitalService hospitalService) {
		super();
		this.hospitalService = hospitalService;
	}
	
	//to process request for storing hospital in persistance database
	//localhost:8080/CVN/hospital/add
	@PostMapping("/add")
	public ResponseEntity<String> saveHospitals(@RequestBody Hospital hospital){
		return new ResponseEntity<String>(hospitalService.saveHospital(hospital), HttpStatus.CREATED);
	}
	
	//to fetch all hospitals details from database
	//localhost:8080/CVN/hospital/get
	@GetMapping("/get")
	public ResponseEntity<Hospital> getHospitalDetails(){
		return new ResponseEntity<Hospital>(hospitalService.findHospital(),HttpStatus.OK);
	}
	
//	@GetMapping("/login")
//	public String showLoginForm() {
//		System.out.println("in show login form");
//		return "/hospital/login";
//	}
//	@PostMapping("/login")
//	public ResponseEntity<Hospital> processLoginForm(@RequestParam(value="email") String email, @RequestParam (value="password" )String password)
//		{
//			System.out.println("in process login form " + email + " " + password + " " );
//	
//		return new ResponseEntity<Hospital>(hospitalService.authenticateHospital(email, password), HttpStatus.FOUND);
//		}
	
	@PostMapping("/login")
	public ResponseEntity<Hospital> processLoginForm(@RequestParam(value="email")  String email, @RequestParam(value="password") String password)
		{
			System.out.println("in process login form " + email + " " + password + " " );
	
		return new ResponseEntity<Hospital>(hospitalService.authenticateHospital(email, password), HttpStatus.FOUND);
		}
	
	
//	@DeleteMapping("/delete/{regId}")
//	public ResponseEntity<String> deleteByRegId(@PathVariable("regId") int regId){
//		return new ResponseEntity<String>(hospitalService.deleteByHospitalRegId(regId), HttpStatus.OK);
//	}

}
