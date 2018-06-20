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

function validatesignup()
{

  //name check

  document.getElementById("vname").innerHTML='';
  var v=checkLength("signup","name",1,20);
  var letters = /^[A-Za-z]+$/;
  if(!(document.forms["signup"]["name"].value)=='')
  {
    if(document.forms["signup"]["name"].value.match(letters))
    {
      if(v == true)
      {
        signup1=true;
      }
      else
      {
        document.getElementById("vname").innerHTML='Name must have minimum of 1 and maximum of 20 letters';
        signup1=false;
      }
    }
    else
    {
      document.getElementById("vname").innerHTML='Please input alphabet characters only';
      signup1=false;
    }
  }
  else
  {
    document.getElementById("vname").innerHTML='Please enter a name';
    signup1=false;
  }


  //email check
  document.getElementById("vmail").innerHTML='';
  if((/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(document.forms["signup"]["email"].value)) && (!((document.forms["signup"]["email"].value)=='')))
  {
    signup2=true;
  }
  else
  {
    document.getElementById("vmail").innerHTML='Please enter a valid mail id';
    signup2=false;
  }

  //password check
  document.getElementById("vpass").innerHTML='';
  var w=checkLength("signup","password",6,15);
  if(!(document.forms["signup"]["password"].value)=='')
  {
  if( w == true)
    {
      signup3=true;
    }
    else
    {
      document.getElementById("vpass").innerHTML='Password must have minimum of 6 and maximum of 15 characters';
      signup3=false;
    }
    
  }
  else
  {
    document.getElementById("vpass").innerHTML='Please enter a password';
    signup3=false;
  }

  return (signup1 && signup2 && signup3);

}