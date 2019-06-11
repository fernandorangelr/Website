// Get modal element
var modal = document.getElementById('simplemodal');
var modal2 = document.getElementById('simplemodal2');

// Get open modal button
var modalBtn = document.getElementById('modalBtn');
var modalBtn2 = document.getElementById('modalBtn2');

// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

// listen for open
modalBtn.addEventListener('click',openModal1);
modalBtn2.addEventListener('click',openModal2);

// Listen for close
closeBtn.addEventListener('click',closeModal1);
closeBtn2.addEventListener('click',closeModal2);

// Listen for outside click
window.addEventListener('click', clickoutside);


// Opens the modal
function openModal1(){
  modal.style.display = 'block';
}

function openModal2(){
  modal2.style.display = 'block';
}
// close the modal
function closeModal1(){
  modal.style.display = 'none';
}

function closeModal2(){
  modal2.style.display = 'none';
}

// close modal if outside click
function clickoutside(e){
  if(e.target == modal){
     modal.style.display = 'none';
  }else if (e.target == modal2) {
    modal2.style.display = 'none';
  }
}
