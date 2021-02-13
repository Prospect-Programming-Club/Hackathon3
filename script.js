function ageGetter() {
  event.preventDefault();
  var input = document.getElementById("user_age_input").value; 
    if (input <= 0) {
      alert("Error, please input an appropriate age.");
    }
    else if (input <= 20) {
      alert("You are not at risk! Be safe!");
   } 
    else if (input <=55){
      alert("You are not at immediate risk, but stay safe!");
    }
    else if (input > 55){
      alert("Watch out! You are in the risky category!");
    }
    else {
      null;
    }
}

function showAge() {
  age_shower.innerText = document.getElementById("user_age_input").value;
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
