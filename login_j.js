$(document).ready(function(){
    $("#go").click(function(){
        var username = $("#username").val().trim();
        let password = $("#password").val().trim();
        
        if (username != "" && password != ""){
            $.ajax({
                url:'https://localhost:44385/Login',
                dataType:'json',
                type: 'post',
                contentType: 'application/json',
                data: JSON.stringify({Username:username, Password:password}),
                success: function(response){
                    if(response){
                        window.location = "welcome.html";
                    }else{
                        $("#error").fadeIn();
                        alert("Logeado maaaal");
                    }
                }
                
            })
        }
    });
});