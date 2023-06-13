function calculateAge() {
  var birthYear = 2002; // Replace with your birth year
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;
  document.getElementById("age").innerText = age;
}

window.onload = function() {
  calculateAge();
};

function displayAlert() {
    alert('Still Under Development');
  }

function displayAlert1() {
  alert('Sorry We Cannot Process Your Request');
  alert('Still Under Development');
}



// Automatically update age when the page loads


