
    $(document).ready(function(){

var date = moment().format('L'); // Day, M/D/Y/T format

    // Display current date
    const todaysDate = $('#todaysDate');
    todaysDate.text(date);
















// save data on click in local storage with storeText function

$('.saveBtn').click(function () {
      let am8 = document.getElementById('8').value;
      localStorage.setItem('text8', am8);
      let am9 = document.getElementById('9').value;
      localStorage.setItem('text9', am9);
      let am10 = document.getElementById('10').value;
      localStorage.setItem('text10', am10);
      let am11 = doucment.getElementById('11').value;
      localStorage.setItem('text11', am11);
      let pm12 = document.getElementById('12').value;
      localStorage.setItem('text12', pm12);
      let pm13 = document.getElementById('13').value;
      localStorage.setItem('text13', pm13);
      let pm14 = document.getElementById('14').value;
      localStorage.setItem('text14', pm14);
      let pm15 = document.getElementById('15').value;
      localStorage.setItem('text15', pm15);
      let pm16 = document.getElementById('16').value;
      localStorage.setItem('text16', pm16);
      let pm17 = document.getElementById('17').value;
      localStorage.setItem('text17', pm17);
      let pm18 = document.getElementById('18').value;
      localStorage.setItem('text18', pm18);


  });

   // show in local storage

  let storedam8 = localStorage.getitem('text8');
  document.getElementById('8').value = storedam8; 
  let storedam9 = localStorage.getitem('text9');
  document.getElementById('9').value = storedam9; 
  let storedam10 = localStorage.getitem('text10');
  document.getElementById('10').value = storedam10; 
  let storedam11 = localStorage.getitem('text11');
  document.getElementById('11').value = storedam11; 
  let storedpm12 = localStorage.getitem('text12');
  document.getElementById('12').value = storedpm12; 
  let storedpm13 = localStorage.getitem('text13');
  document.getElementById('13').value = storedpm13;     
  let storedpm14 = localStorage.getitem('text14');
  document.getElementById('14').value = storedpm14; 
  let storedpm15 = localStorage.getitem('text15');
  document.getElementById('15').value = storedpm15; 
  let storedpm16 = localStorage.getitem('text16');
  document.getElementById('16').value = storedpm16; 
  let storedpm17 = localStorage.getitem('text17');
  document.getElementById('17').value = storedpm17; 
  let storedpm18 = localStorage.getitem('text18');
  document.getElementById('18').value = storedpm18; 
  
  });