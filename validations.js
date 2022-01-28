$(document).ready(function()
{
	$("#submit").hide();
$("#name").keyup(function()
{
if(validatename())
{
	
	 $("#messagename").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	
	$('#messagename').html("<p class='text-danger'>INCORRECT NAME</p>");
}
 buttonState();
});
$("#address").keyup(function()
{
	if(validateadd())
	{
$("#messageadd").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#messageadd").html("<p class='text-danger'>INVALID ADDRESS</p>")
}
buttonstate();
}); 

$("#email").keyup(function()
{
	if(validateemail())
	{
$("#messageemail").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	$("#messageemail").html("<p class='text-danger'>INVALID EMAIL</p>")
}
buttonstate();
});

$("#password").keyup(function()
{
	if(validatepass())
	{
$("#messpass").html("<p class='text-success'>WEAK PASSWORD</p>")
}
else if(validatepass2())
{

$("#messpass").html("<p class='text-success'>MODERATE PASSWORD</p>")
}
else if(validatepass3())
{
	
$("#messpass").html("<p class='text-success'>STRONG PASSWORD</p>")
}
else
{
	
	$("#messpass").html("<p class='text-danger'>INCORRECT PASSWORD</p>")
}
buttonstate();
});
$("#text").keyup(function()
{
	if(feedtext())
	{

$("#messtext").html("<p class='text-success'>VALIDATED</p>")
}
else
{

	$("#messtext").html("<p class='text-danger'>INVALID</p>")
}
buttonstate();
});
$("#user").keyup(function()
{
	if(username())
	{

$("#messageuser").html("<p class='text-success'>VALIDATED</p>")
}
else
{
	
	$("#messageuser").html("<p class='text-danger'>INVALID</p>")
}
buttonstate();
});
buttonstate();
});



function buttonstate()
{ $("#submit").hide();

	if (validatename() && validateadd() && validateemail()&& feedtext() && username() && (validatepass() | validatepass2() | validatepass3())) {
		$("#submit").show();
	}
	else
	{
		$("#submit").hide();
	}
}
//+/s+[a-zA-Z]{5,20}
function validatename()
{
	var name=$("#name").val();
	var reg=/^([a-zA-Z]{3,20}) ([a-zA-Z]{2,20})+(\s*)$/;
	if(reg.test(name)){
             return true;
         }else{
             return false;
         }
}
function validateadd()
{

	var address=$("#address").val();
	var reg2=/^([a-zA-z0-9-#/(){}]{3,20})\s*(([a-zA-z0-9-#/(){}/]{1,20})\s*)*$/;
	if(reg2.test(address)){
             return true;
         }else{
             return false;
         }
}
function validateemail()
{
	var users=$("#user").val();
	var email=$("#email").val();
	var reg3=/^([a-zA-z0-9.]{4,20})@(c|C)hristuniversity.in$/;
	//var reg3=/^users@(c|C)hristuniversity.in$/;
	var match=/^.*(?=@christuniversity.in)$/;
	if(reg3.test(email))
	{
		return true;
	}
	else if(!match.test(users))
	{
     return false;
	}
	else
	{
		return false;
	}

}
function feedtext()
{
	var feed=$("#text").val();
	var write=/^[\w\s]{10,}$/;
	if(write.test(feed))
	{
		return true;
	}
	else
	{
		return false;
	}

}

function validatepass()
{
	var pass=$("#password").val();
	//var weak=/^(([a-z]+[A-Z])+[a-zA-Z]|([A-Z]+[a-z]+[a-zA-Z])|([a-zA-Z][A-Z]+[a-z])|([a-zA-Z][A-Z]+[a-z]))$/;
	//(?<!foo|bar)(foo|bar)(?!foo|bar)
	var weak=/^(?=.*[a-z])[a-zA-z]{8,20}$/;
	if(weak.test(pass))
	{
		return true;
	}
	else
	{
		return false;
	}
}
function validatepass2()
{
	var pass=$("#password").val();
	var medium=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]))[a-zA-z0-9]{8,20}$/;
	if(medium.test(pass))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function validatepass3()
{
	//special charcter between characters 
	//(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-z][!@#$%^&*?][a-zA-z])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?]{8,20}
	var pass=$("#password").val();
	var strong=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()_+={}[|\;:"<\]\>,./?]{8,20}$/;
	if(strong.test(pass))
	{
		return true;
	}
	else
	{
		return false;
	}
}

function username()
{
	//special charcter between characters 
	//(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-z][!@#$%^&*?][a-zA-z])(?=.*[~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?])[a-zA-z0-9~`!@#$%^&*()-_+={}[|\;:"<\]\>,./?]{8,20}
	var users=$("#user").val();
	var val=/^[a-zA-Z]{4,}$/;
	if(val.test(users))
	{
		return true;
	}
	else
	{
		return false;
	}
}
$(function() {
    $("#submit").click(function() {     
      if($('input[type=radio][name=interest]:checked').length == 0)
      {
         alert("Please select atleast INTEREST ");
         return false;
      }
      if($('input[type=checkbox][name=like]:checked').length == 0)
      {
         alert("Please select atleast ONE CHECKBOX ");
         return false;
      }
      else
      {
         $('.all').remove();
         $(".thankyou").append("THANKS FOR YOUR PATIENCE");
         $(submit).hide();
      }      
    });
});
function submit()
{

}

function disable()
{
 document.onkeydown = function (e) 
 {
   
  
  if (e.which >= 48 && e.which <= 57) {
  return false;
  }
 }
}

function enable()
{
 document.onkeydown = function (e) 
 {
  return true;
  
 }
}


$(document).ready(function(){
  $("#user").keypress(function(e){
     var keyCode = e.which;
    /*

      48-57 - (0-9)Numbers
    */
 
    if ( !(keyCode <= 48 || keyCode >= 57)) { 
      return false;
    }
  });
});


