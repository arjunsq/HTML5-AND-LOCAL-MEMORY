function checkLength(formname,id,minLengt,maxLengt)
{
	x=document.forms[formname][id].value;
	if ((x.length>=minLengt) && (x.length<=maxLengt))
	{
		return true;
	}
	else
	{
		return false;
	}
}

//

// VALIDATE CONTACT US /////////////////////////////////////////////////////////////////////////////////////////////////////////

//

function validatecontact()
{
  
  //name check contact
  document.getElementById("vcuser").innerHTML='';
  var y=checkLength("contact","cuser",3,20);
  var letters = /^[A-Za-z]+$/;
  if(!(document.forms["contact"]["cuser"].value)=='')
  {
  	if(document.forms["contact"]["cuser"].value.match(letters))
  	{
  		if(y == true)
  		{
  			contact1=true;
  		}
  		else
  		{
  			document.getElementById("vcuser").innerHTML='Name must have minimum of 3 and maximum of 20 letters';
  			contact1=false;
  		}
  	}
  	else
  	{
  		document.getElementById("vcuser").innerHTML='Please input alphabet characters only';
  		contact1=false;
  	}
  }
  else
  {
   	document.getElementById("vcuser").innerHTML='Please enter a name';
    contact1=false;
  }

  //email check
  document.getElementById("vcmail").innerHTML='';
  if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["contact"]["cmail"].value)) && (!((document.forms["contact"]["cmail"].value)=='')))
  {
  	contact2=true;
  }
  else
  {
  	document.getElementById("vcmail").innerHTML='Please enter a valid mail id';
  	contact2=false;
  }

  //phone check
  document.getElementById("vphone").innerHTML='';
  if((/^\d{10}$/.test(document.forms["contact"]["phone"].value)) && (!((document.forms["contact"]["phone"].value)=='')))
  {
  	contact3=true;
  }
  else
  {
  	document.getElementById("vphone").innerHTML='Please enter a valid contact number';
  	contact3=false;
  }

    //password check
  document.getElementById("vcomment").innerHTML='';
  var z=checkLength("contact","comment",1,200);
  if(!(document.forms["contact"]["comment"].value)=='')
  {
	if(	z == true)
  	{
  		contact4=true;
  	}
  	else
  	{
  		document.getElementById("vcomment").innerHTML='Question must have minimum of 1 and maximum of 200 characters';
  		contact4=false;
  	}
  	
  }
  else
  {
   	document.getElementById("vcomment").innerHTML='Please enter a message';
    contact4=false;
  }


  if( contact1 && contact2 && contact3 && contact4)
  {
  	API (cuser,cmail,phone,comment);
  	return true;
  }

}

//API DATA TRANSFER AND API RESPONSE

function API (cuser,cmail,phone,comment){
    var params = {
        cuser:cuser,
        cmail:cmail,
        phone:phone,
        comment:comment
    }
    var http = new XMLHttpRequest()
    http.open('POST','http://demo6835492.mockable.io/sendEmail')
    http.setRequestHeader('Content-type', 'application/json')
    http.send(JSON.stringify(params))
    http.onload = function() {
        
        alert(http.responseText);
    }
}