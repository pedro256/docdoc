package com.pedro256.docdoc.controllers;

import com.pedro256.docdoc.models.InfoModel;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/info")
public class InfoController {


    @RequestMapping(value = "/encoders", method = { RequestMethod.GET })
    InfoModel info(){
        InfoModel infoM = new InfoModel();
        infoM.setVersion(1);
        infoM.setAppName("DocDoc");
        return infoM;
    }
}
