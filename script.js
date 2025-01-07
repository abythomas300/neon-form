$(document).ready(function(){
    $('#myForm').validate({
        rules:{
            personName:{
            required: true,
            minlength: 3,
            maxlength: 15
           },
            email:{
                required: true,
                email: true
            },
            password:{
                required: true,
                minlength: 8,
                maxlength: 15
            },
            retype_pass:{
                required: true,
                equalTo: '#passwd'
            }
        },
        messages:{
            personName:{
                required: "<br>&nbsp&nbspYou cannot leave this name field blank.",
                minlength: "<br>&nbsp&nbspMinimum 3 characters is required.",
                maxlength: "<br>&nbsp&nbspMaximum number of characters is 15"
            },
            email:{
                required: "<br>&nbsp&nbspPlease enter your mail address.",
                email: "<br>&nbsp&nbspEnter a valid email address."
            },
            password:{
                required: "<br>&nbsp&nbspThis password field is required.", 
                minlength: "<br>&nbsp&nbspMinimum required length is 8",
                maxlength: "<br>&nbsp&nbspMaximum length is 15"
            },
            retype_pass:{
                required: "<br>&nbsp&nbspPlease reenter your password.",
                equalTo: "<br>&nbsp&nbspPasswords does not match."
            }       
        }
    })
});

//checking the password strength and behavior change accordingly.
$('#passwd').on('focus keyup',function(){
    var pass_to_check = $(this).val();
    var requirements = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,}$/;
    var result = requirements.test(pass_to_check);
    if(!result){
        $('#pass-str-warning').css('color', result? 'green': 'red');
        $('#passwd').css('border-color',result? '#1DC004':'#E31212');
        $('#pass-str-warning').html("&nbsp&nbspPassword must contain atleast 1 uppercase, lowercase, number and a special symbol.");
        $('#passwd').css({"box-shadow":"0px 0 10px #E31212"});
    }else if(result){
        $('#passwd').css('border-color',result? 'green':'red')
        $('#pass-str-warning').css('color', result? '#1DC004': '#E31212');
        $('#pass-str-warning').html("&nbsp&nbspSuitable password. Good to go!");
        $('#passwd').css({"box-shadow":"0px 0 10px aqua"});
    }
});

$('#passwd').blur(function(){
    $(this).css({"box-shadow":"none"})
})

