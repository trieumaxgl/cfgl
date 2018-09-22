package cfgroup.cfgl.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;

public class HomeController {

	private HttpServletRequest request;

	@Autowired
    public void setRequest(HttpServletRequest request) {
        this.request = request;
    }
	@RequestMapping({"/workflow"})
	    public String workflow() {
	    	return "home/home";
	    }
}
