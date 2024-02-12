package com.email.controller;

import java.awt.PageAttributes.MediaType;
import java.util.Arrays;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import com.email.service.EmailService;

@RestController
@RequestMapping("/mail")
@CrossOrigin("*")
public class EmailSendController {
    private EmailService emailService;

    public EmailSendController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send")
    public String sendMail(@RequestParam(value = "file", required = false) MultipartFile[] file, String to, String[] cc, String subject, String body) {
        System.out.println(to);
        if(file!=null) {
        	System.out.println("file is there");
        }
    	return emailService.sendMail(file, to, cc, subject, body);
    }
    
//    @PostMapping(value="/send",consumes = "application/json")
//    public String sendMail(@RequestBody EmailRequest emailRequest) {
//        System.out.println(emailRequest.getTo() + " " + Arrays.toString(emailRequest.getCc()) +
//                " " + emailRequest.getSubject() + " " + emailRequest.getBody());
//
//        MultipartFile[] files = emailRequest.getFile();
//        if (files != null) {
//            System.out.println("Files are present");
//        }
//
//        return emailService.sendMail(files, emailRequest.getTo(), emailRequest.getCc(),
//                emailRequest.getSubject(), emailRequest.getBody());
//    }

}
