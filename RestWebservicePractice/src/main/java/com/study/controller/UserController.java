package com.study.controller;

import org.springframework.http.MediaType;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.study.model.Authenticate;

@Controller
@RequestMapping("/user")
public class UserController {

	@RequestMapping(value = "sayhello/{userEmail}", method=RequestMethod.GET)
	public @ResponseBody String sayHello(@PathVariable String userEmail) {
		return "Hello " + userEmail + " !!!";
	}
	
	@RequestMapping(value = "/isvalid", method=RequestMethod.POST, consumes=MediaType.APPLICATION_JSON_VALUE)
	public @ResponseBody Boolean isValid(@RequestBody Authenticate authenticate) {
		System.out.println("UserController.isValid : " + authenticate);
		
		if(authenticate.getEmail().equals("vd@gm") && authenticate.getPassword().equals("vd")) {
			return true;
		}
		return false;
	}
}
