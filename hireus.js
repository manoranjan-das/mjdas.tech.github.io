//---------- form validation--------
function validates(){
    var name=document.getElementById("name").value;
    var nvalid="/^([a-zA-Z]{3,}+) ([a-zA-Z]{2,})/"
    var email=document.getElementById("email").value;
    var evalid="^([a-zA-Z 0-9\. -]+)@([a-zA-Z 0-9\-]+).([a-z A-Z]{2,8})(.[a-z]{2,9})?$";
    var phone=document.getElementById("number").value;
    var pvalid="/(+[1-9]{2})[1-9]\d{9}$/";
    var index=document.getElementById("services").selectedIndex;
        if(name=="" || name==nvalid )
        {
            document.getElementById("name").style.border="1px solid red";
            document.getElementById("lname").style.visibility="visible";
            return false;
        }
        else if(email=="" || email==evalid)
            {
            document.getElementById("email").style.border="1px solid red";
            document.getElementById("lemail").style.visibility="visible";
            return false;
            }
            else if(phone==null || phone== pvalid)
            {
                document.getElementById("number").style.border="1px solid red";
                document.getElementById("lnumber").style.visibility="visible";
                return false;
            }
            else if(index==0)
                {
            document.getElementById("services").style.border="1px solid red";
            document.getElementById("lbs").style.visibility="visible";
            return false;
                }
         else{
            
            return true;
        }
        
        
}

//--------Reset Event-----------
 
function Reset()
{
    document.getElementById("myform").reset();
}