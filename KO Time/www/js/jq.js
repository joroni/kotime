
$("#signup").click(function(){
var fullname=$("#fullname").val();
var email=$("#email").val();
var password=$("#password").val();
var dataString="fullname="+fullname+"&email="+email+"&password="+password+"&signup=";
if($.trim(fullname).length>0 & $.trim(email).length>0 & $.trim(password).length>0)
{
$.ajax({
type: "POST",
url: url,
data: dataString,
crossDomain: true,
cache: false,
beforeSend: function(){ $("#signup").val('Connecting...');},
success: function(data){
if(data=="success")
{
alert("Thank you for Registering with us! you can login now");
}
else if(data="exist")
{
alert("Hey! You alreay has account! you can login with us");
}
else if(data="failed")
{
alert("Something Went wrong");
}
}
});
}return false;
});
