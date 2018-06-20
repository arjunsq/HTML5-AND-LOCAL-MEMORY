var sino=0;

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
  signup4=true;
  document.getElementById("gender").innerHTML='';
  var getgender = '';
  if(document.getElementById("Mr.").checked == true)
  {var getgender = 'Mr.';}
  else if(document.getElementById("Ms.").checked == true)
  {var getgender = 'Ms.';}
  else if(document.getElementById("Mx.").checked == true)
  {var getgender = 'Mx.';}
  else
    {
      document.getElementById("gender").innerHTML='Please select your gender';
      signup4=false;
  }

  signup5=true;
  document.getElementById('vdob').innerHTML='';
  if(document.getElementById('dob').value=='')
  {
  	
  	document.getElementById('vdob').innerHTML='Please enter a DOB';
  	signup5=false;
  }



  signup6=true;
  document.getElementById('vcountry').innerHTML='';
  if(document.getElementById('country').value=='Select your Country')
  {
  	
  	document.getElementById('vcountry').innerHTML='Please select a country';
  	signup6=false;
  }





  if(signup1 && signup2 && signup3 && signup4 && signup5 && signup6)
  {
        
    

    var getName = document.getElementById('name').value;
    var getMailid= document.getElementById('email').value;
    var getPasword= document.getElementById('password').value;
    var getDOB=document.getElementById('dob').value;
    var getcountry=document.getElementById('country').value;
    sino=sino+1;


    if(typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = 'Last entered SI No: is '+sino;

            localStorage.sino=sino+1;
            localStorage.resultGENDE = getgender;
            localStorage.resultname = getName;
            localStorage.resultMail = getMailid;
            localStorage.resultPassword = getPasword;
            localStorage.resultDOB = getDOB;
            localStorage.resultCountry = getcountry;

            var table = document.getElementById("myTable");
            var row = table.insertRow(1);
            var cell0 = row.insertCell(0);
            var cell1 = row.insertCell(1);
            var cell2 = row.insertCell(2);
            var cell3 = row.insertCell(3);
            var cell4 = row.insertCell(4);
            var cell5 = row.insertCell(5);
            var cell6 = row.insertCell(6);
            cell0.innerHTML = sino;
            cell1.innerHTML = localStorage.resultGENDE; // document.getElementById("storework").innerHTML=localStorage.getItem('resultGENDE');
            cell2.innerHTML = getName;
            cell3.innerHTML = getMailid;
            cell4.innerHTML = getPasword;
            cell5.innerHTML = getDOB;
            cell6.innerHTML = getcountry;
        } else {
            localStorage.clickcount = 'Table empty';

        }
        document.getElementById("result").innerHTML = localStorage.clickcount ;
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }

    //CLEAR FORM
    document.getElementById("Mr.").checked = document.getElementById("Ms.").checked = document.getElementById("Mx.").checked=false;
    document.getElementById("name").value='';
    document.getElementById("email").value='';
    document.getElementById("password").value='';
    document.getElementById("dob").value='';
    document.getElementById("country").value='Select your Country';
  }

}

// Countries
$(function(){
   var country_arr = new Array("Select your Country","Afghanistan", "Albania", "Algeria", "American Samoa", "Angola", "Anguilla", "Antartica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Ashmore and Cartier Island", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burma", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Clipperton Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo, Democratic Republic of the", "Congo, Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia", "Cuba", "Cyprus", "Czeck Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Europa Island", "Falkland Islands (Islas Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "French Guiana", "French Polynesia", "French Southern and Antarctic Lands", "Gabon", "Gambia, The", "Gaza Strip", "Georgia", "Germany", "Ghana", "Gibraltar", "Glorioso Islands", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard Island and McDonald Islands", "Holy See (Vatican City)", "Honduras", "Hong Kong", "Howland Island", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Ireland, Northern", "Israel", "Italy", "Jamaica", "Jan Mayen", "Japan", "Jarvis Island", "Jersey", "Johnston Atoll", "Jordan", "Juan de Nova Island", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Man, Isle of", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Midway Islands", "Moldova", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcaim Islands", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romainia", "Russia", "Rwanda", "Saint Helena", "Saint Kitts and Nevis", "Saint Lucia", "Saint Pierre and Miquelon", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Scotland", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and South Sandwich Islands", "Spain", "Spratly Islands", "Sri Lanka", "Sudan", "Suriname", "Svalbard", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Tobago", "Toga", "Tokelau", "Tonga", "Trinidad", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "USA", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands", "Wales", "Wallis and Futuna", "West Bank", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe");
   var $select = $(".countrylist");
    for (i=0;i<country_arr.length;i++){
        $select.append($('<option></option>').val(country_arr[i]).html(country_arr[i]))
    }
});

function cleardata()
{
  var i=0,k=0;
  sino=0;
  localStorage.clickcount='Table empty';
  document.getElementById("result").innerHTML = localStorage.clickcount ;
  k = document.getElementById("myTable").rows.length; 
  for(j=0;j<k-2;j++)
  {
    document.getElementById("myTable").deleteRow(1);
  }
}