$('#page_login_submit').on('click',function(){

  // grab form input
  var name = $('#page_login_name').val();
  if (!name) { alert('Please enter your user name.'); return false; }
  var pass = $('#page_login_pass').val();
  if (!pass) { alert('Please enter your password.'); return false; }

  // make the services call
  var data_string = 'username=' + encodeURIComponent(name);
  data_string += '&password=' + encodeURIComponent(pass);
  $.ajax({
    //  url: "http://example.com/?q=my_services_path/user/login.json",
    url: "http://localhost/DRUPAL7/?q=my_services_path/user/login.json",

      type: 'post',
      data: data_string,
      dataType: 'json',
      error: function(XMLHttpRequest, textStatus, errorThrown) {
        alert('page_login_submit - failed to login');
        console.log(JSON.stringify(XMLHttpRequest));
        console.log(JSON.stringify(textStatus));
        console.log(JSON.stringify(errorThrown));
      },
      success: function (data) {
        alert('You are now logged in!');
      }
  });
  return false;
});
