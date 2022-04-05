
    $(document).ready(function(){

var date = moment().format('L'); // Day, M/D/Y/T format

    // Display current date
    const todaysDate = $('#todaysDate');
    todaysDate.text(date);
















// save data on click in local storage with storeText function

$('.saveBtn').click(function () {
      var am8 = document.getElementById('8').value;
      localStorage.setItem(text8, am8);
      var am9 = document.getElementById('9').value;
      localStorage.setItem(text9, am9);
  });

   // show in local storage

  var storedAm8 = localStorage.getitem('text8');
  document.getElementById('8').value = storedAm8;     
  
  });