/*!
 * tooltips.js
 * https://clipboardjs.com/assets/scripts/tooltips.js
 *
 * Tootik v1.0.2
 * https://eliortabeka.github.io/tootik/
 */
var btns = document.querySelectorAll('.btn');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('mouseleave', clearTooltip);
  btns[i].addEventListener('blur', clearTooltip);
}

function clearTooltip(e) {
  e.currentTarget.removeAttribute('data-tootik');
  e.currentTarget.removeAttribute('data-tootik-conf');
}

function showTooltip(elem, msg, isErr) {
  elem.setAttribute('data-tootik', msg);
  if (isErr) {
    elem.setAttribute('data-tootik-conf', 'warning');
  } else {
    elem.setAttribute('data-tootik-conf', 'success');
  }
}

function fallbackMessage(action) {
  var actionMsg = '';
  var actionKey = (action === 'cut' ? 'X' : 'C');
  if (/iPhone|iPad/i.test(navigator.userAgent)) {
    actionMsg = 'No support :(';
  } else if (/Mac/i.test(navigator.userAgent)) {
    actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
  } else {
    actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
  }
  return actionMsg;
}
