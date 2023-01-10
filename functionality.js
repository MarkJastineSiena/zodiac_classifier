
var month = document.querySelector(".month").value;
var day = document.querySelector(".day").value;

function classify(){
   /* var January;
    var February;
    var March;
    var April;
    var May;
    var June;
    var July;
    var August;
    var September;
    var October;
    var November;
    var December;*/
   if(month == "March" && month == "April"){
        if(day == 19 && day == 21){
        document.getElementsByClassName("monthdisplay").innerHTML = "Aries + <br> + Element: Fire + <br> Color:Red  + <br> Quality: Cardinal + <br> Day: Tuesday + <br> + Ruler: Mars";
        }
   }
   else if(month == "April" && month =="May"){
        if (day == 20){
            document.getElementsByClassName("monthdisplay").innerHTML = "Taurus + <br> + Element: Earth + <br> Color:Green, Pink  + <br> Quality: Fixed + <br> Day: Monday,Friday + <br> + Ruler: Venus";
        }

   }
}
    
