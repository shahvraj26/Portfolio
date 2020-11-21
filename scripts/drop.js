"use strict";

// the event handler attached to the click event of each h2 element
var toggle = function() {
    
	var divToToggle = this.nextElementSibling;  // the div tag right after this h2 element

    // toggle plus and minus image in h2 elements by adding or removing a class
    if (this.hasAttribute("class")) { 
        this.removeAttribute("class");	
    } else { 
        this.setAttribute("class", "minus"); 
    }

    // toggle div visibility by adding or removing a class
    if (divToToggle.hasAttribute("class")) { 
        divToToggle.removeAttribute("class");
    } else { 
        divToToggle.setAttribute("class", "open"); 
    }
};

window.onload = function() {
	
	//want to set the same event handler for all h2 tags         
   
    var h2Elements = document.getElementsByTagName("h2");
    
    // attach event handler for each h2 tag	    
    for (var i = 0; i < h2Elements.length; i++ ) {
    	h2Elements[i].onclick = toggle;
    }
    // set focus on first h2 tag's <a> tag
    h2Elements[0].firstChild.focus();       
};