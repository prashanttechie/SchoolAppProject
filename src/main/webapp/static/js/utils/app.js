  $(document).ready(function(){

        var source=$("#first-template").html();
        var template=Handlebars.compile(source);
        var context= {
            home:"HOME",
            product:"PRODUCT",
            aboutus:"ABOUT US",
            career:"CAREER"
        }
        var el_html=template(context);
        $("#render-here").html(el_html);
    }

);