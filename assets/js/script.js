function toggleSwitch() {
    var body = document.body;
    var toggleBtn = document.querySelector('.toggle-btn');
    var darkswitch = document.querySelector('.darkswitch');
    var modeText = document.querySelector('.mode-text');

    toggleBtn.classList.toggle('toggle-active');
    darkswitch.classList.toggle('darkswitch-active');

    if (toggleBtn.classList.contains('toggle-active')) {
        body.style.backgroundColor = "#c2c2c2";
        darkswitch.style.boxShadow = "-2px -2px 1px 3px #8a8a8a, 2px 2px 1px 2px #cecece, -12px -12px 15px #b9b9b9, 12px 12px 15px #cecece";
        modeText.textContent = "Bright";
        modeText.classList.add('bright-mode'); 
    } else {
        body.style.backgroundColor = "#2a282b";
        darkswitch.style.boxShadow = "-2px -2px 1px 3px #0b0b0b, 2px 2px 1px 2px #545454, -12px -12px 15px #494849, 12px 12px 15px #0b0b0b";
        modeText.textContent = "Dark";
        modeText.classList.remove('bright-mode'); 
    }
}

document.querySelector('.darkswitch').addEventListener('click', toggleSwitch);
