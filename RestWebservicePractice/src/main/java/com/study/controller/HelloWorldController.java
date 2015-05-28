package com.study.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class HelloWorldController {
	
	@RequestMapping("/hello")
	public String hello() {
		return "Hello!!!";
	}

}
