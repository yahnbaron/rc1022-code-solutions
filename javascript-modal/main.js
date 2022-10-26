var openButLoc = document.querySelector('.open');
var secretDivLoc = document.querySelector('.secret-hide');
var noButLoc = document.querySelector('.no');
var cloakLoc = document.querySelector('.cloak');
var hidden = true;

function hocusPocus(event) {
  if (hidden === true) {
    hidden = false;
    secretDivLoc.className = 'secret-show';
    cloakLoc.className = 'cloak-activated';
  } else if (hidden === false) {
    hidden = true;
    secretDivLoc.className = 'secret-hide';
    cloakLoc.className = 'cloak';
  }
}

openButLoc.addEventListener('click', hocusPocus);
noButLoc.addEventListener('click', hocusPocus);
