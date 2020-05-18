let button = document.getElementById('toggleButton');
button.style.backgroundColor = 'red';
let isOn = true;

function displayValue(e) {
  console.log('hey');
}

button.onclick = element => {
  if (isOn) {
    button.style.backgroundColor = 'green';
    isOn = !isOn;
    console.log('toggling off', isOn);
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      color = '#333';
      chrome.tabs.executeScript(tabs[0].id, {
        code:
          'let element = document.body.getElementsByTagName("*"); for(let i = 0; i < element.length; i++) {element[i].setAttribute("onmouseover", "displayValue(this)")};'
      });
    });
  } else {
    button.style.backgroundColor = 'red';
    isOn = !isOn;
    console.log('toggling on', isOn);
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      color = '#fff';
      chrome.tabs.executeScript(tabs[0].id, {
        code:
          'let element2 = document.body.getElementsByTagName("*"); for(let i = 0; i < element2.length; i++) {element2[i].removeAttribute("onmouseover")};'
      });
    });
  }
};

//setAttribute("onmouseover", "displayValue(this)")
//element[i].on("mouseover", displayValue)
