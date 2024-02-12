package com.email.controller;

import org.springframework.web.multipart.MultipartFile;

public class EmailRequest {
    private MultipartFile[] file;
    private String to;
    private String[] cc;
    private String subject;
    private String body;
	public EmailRequest(MultipartFile[] file, String to, String[] cc, String subject, String body) {
		super();
		this.file = file;
		this.to = to;
		this.cc = cc;
		this.subject = subject;
		this.body = body;
	}
	public EmailRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public MultipartFile[] getFile() {
		return file;
	}
	public void setFile(MultipartFile[] file) {
		this.file = file;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public String[] getCc() {
		return cc;
	}
	public void setCc(String[] cc) {
		this.cc = cc;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getBody() {
		return body;
	}
	public void setBody(String body) {
		this.body = body;
	}
    
    

}

