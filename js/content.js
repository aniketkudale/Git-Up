var readme = document.getElementById('readme');
var boxBody = document.querySelector('#readme .Box-body');

// Add collapse button
var readmeBtn = document.querySelector('#readme .Box-header');
var customButton = document.createElement('button');

if (readme) {
  readme.parentNode.prepend(readme);
  readme.style.marginBottom = '20px';
  readmeBtn.append(customButton);
}

if(customButton) {
  customButton.classList.add('btn');
  customButton.innerText = 'Collapse';
  customButton.addEventListener('click', function() {	
    if(boxBody.style.display === 'none') {
      boxBody.style.display = '';
      readme.classList.toggle('hide');
      customButton.innerText = 'Collapse';
    } else {
      boxBody.style.display = 'none';
      readme.classList.toggle('hide');
      customButton.innerText = 'Expand';
    }
  });
}




