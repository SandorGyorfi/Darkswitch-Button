function toggleSwitch() {
    var body = document.body;
    var toggleBtn = document.querySelector('.toggle-btn');
  
    toggleBtn.classList.toggle('toggle-active');
  
    if (toggleBtn.classList.contains('toggle-active')) {
      body.style.backgroundColor = "#fff"; 
    } else {
      body.style.backgroundColor = "#000"; 
    }
  }