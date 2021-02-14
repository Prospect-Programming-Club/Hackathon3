function ageGetter(age_input) {
  //event.preventDefault();
  //var age_input = document.getElementById("user_age_input").value; 
    if (age_input <= 0) {
      alert("Error, please input an appropriate age.");
    }
    else if (age_input <= 20) {
      alert("You are not at risk! Be safe!");
   } 
    else if (age_input <=55){
      alert("You are not at immediate risk, but stay safe!");
    }
    else if (age_input > 55){
      alert("Watch out! You are in the risky category!");
    }
    else {
      null;
    }
}

function showAge() {
  age_shower.innerText = "Your Age: " + document.getElementById("user_age_input").value;
}

function onSubmit(){
  event.preventDefault();
  var age_input = document.getElementById("user_age_input").value; 
  //find out how many checkboxes yuu have selected
  var AllYourSymptons = "";
  var numberOfSymptoms = 0;
  const cbs = document.querySelectorAll('input[name="sympton"]');
    cbs.forEach((cb) => {
        if(cb.checked){
            AllYourSymptons = AllYourSymptons + "\n" + cb.value;
            numberOfSymptoms++;
        }
    }); //end of foreach loop
    //now show all the AllYourSymptons
    if (numberOfSymptoms > 0) {
      alert("Careful! You have the following symptoms: " + AllYourSymptons + "\nSo please stay at home and quarantine yourself! \nAlso, please go to your nearest COVID-19 testing center safely and with a mask. Always remain 6-feet apart!");
    }
    else {
      alert("Great, you don't have any symptoms. However, be careful and always remember to wash your hands, stay 6-feet apart, and wear a mask when going outside.");
      ageGetter(age_input);
    }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


const revealInfo = document.querySelector('#Corona-section');
window.onscroll = function(){
    var infoscroll = window.scrollY;
    if (infoscroll >= 250){
        revealInfo.classList.add('active')
    }else{
        revealInfo.classList.remove('active');
    }
}

/*Zipcode*/
function zipcodeGetter() {
  var input = document.getElementById("input_zipcode").value;
  alert(input);
}
