function toggleSwitch() {
    var body = document.body;
    var toggleBtn = document.querySelector('.toggle-btn');
    var darkswitch = document.querySelector('.darkswitch');
  
    toggleBtn.classList.toggle('toggle-active');
    darkswitch.classList.toggle('darkswitch-active');  
  
    if (toggleBtn.classList.contains('toggle-active')) {
      body.style.backgroundColor = "#fff";  
      darkswitch.style.boxShadow = "-0px -0px 1px 3px #1b1b1b, 0px 0px 1px 2px #686868, -3px -3px 15px #605e61, 3px 3px 15px #1b1b1b";  // Active box shadow.
    } else {
      body.style.backgroundColor = "#413f42";  
      darkswitch.style.boxShadow = "-2px -2px 1px 3px #1b1b1b, 2px 2px 1px 2px #686868, -12px -12px 15px #605e61, 12px 12px 15px #1b1b1b";  // Default box shadow.
    }
}
