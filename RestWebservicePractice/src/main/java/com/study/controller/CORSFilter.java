package com.study.controller;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;

@Component
public class CORSFilter implements Filter {
	
	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		HttpServletResponse response = (HttpServletResponse) res;
		response.setHeader("Access-Control-Allow-Origin", "*");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
		response.setHeader("Access-Control-Max-Age", "3600");
		response.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Access-Control-Allow-Origin, Origin,Content-Type, Accept");
		chain.doFilter(req, res);
	}

	public void init(FilterConfig filterConfig) {}

	public void destroy() {}

//	@Override
//	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
//		response.addHeader("Access-Control-Allow-Origin", "*");
//		if (request.getHeader("Access-Control-Request-Method") != null
//				&& "OPTIONS".equals(request.getMethod())) {
//			// CORS "pre-flight" request
//			response.addHeader("Access-Control-Allow-Methods",
//					"GET, POST, PUT, DELETE");
//			response.addHeader("Access-Control-Allow-Headers",
//					"X-Requested-With,Origin,Content-Type, Accept");
//		}
//		filterChain.doFilter(request, response);
//	}

}
