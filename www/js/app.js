

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    
    
    // Submission button
    $('#submit').on("click", function(){
        submitForm();
    });
        
    // Page navigation
    $('#swipenav').on("swipeleft",function(){
//        $(this).css('color', 'red');
    	$.mobile.navigate( "#pagetwo" );
  	});     
        
    $('#swipenav2').on("swiperight",function(){
    	$.mobile.navigate( "#pageone" );
  	}); 
        
        
    // page 2 onload    
    $('#pagetwo').on("pageshow",function(){
    	displayData()
  	}); 
        
    $('#refresh').on("click",function(){
    	displayData()
  	}); 
        
    $('#clear').on("click",function(){
    	clearData()
  	}); 
        
    

    }
}
document.addEventListener("app.Ready", onAppReady, false) ;
// document.addEventListener("deviceready", onAppReady, false) ;
// document.addEventListener("onload", onAppReady, false) ;


function submitForm() {
    var name = $('#inputName').val();
    storeValue("nameVal", name);
    var email = $('#inputEmail').val();
    storeValue("emailVal", email);
    var tel = $('#inputTel').val();
    storeValue("telVal", tel);
    var dob = $('#inputDob').val();
    storeValue("dobVal", dob);
    var password = $('#inputPassword').val();
    storeValue("PasswordVal", password);
    
    
	alert("From submitted");
}


function storeValue(key, value) {
	window.localStorage.setItem( key, value );
}

function displayData() {
    $("#displayName").text("Name: " + window.localStorage.getItem("nameVal"));
    $("#displayEmail").text("email: " + window.localStorage.getItem("emailVal"));
    $("#displayTel").text("Telephone: " + window.localStorage.getItem("telVal"));
    $("#displayDob").text("Date of Birth: " + window.localStorage.getItem("dobVal"));
    $("#displayPassword").text("Password: " + window.localStorage.getItem("PasswordVal"));
}

function clearData() {
    window.localStorage.clear();
    displayData();
}