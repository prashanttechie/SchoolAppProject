package com.prashant.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by pramishra on 11/9/15.
 */

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String home(){
        return "test";
    }


}
