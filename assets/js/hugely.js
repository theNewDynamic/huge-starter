import * as params from '@params';

const [ input, copy, default_copy ] = [
  document.getElementById('hugely-input'), 
  document.getElementById('hugely-copy'),
  params.default_copy || "HUGELY"
]
input.setAttribute('placeholder', params.placeholder)
input.addEventListener("keyup", (event => {
  copy.innerText = event.target.value || default_copy
}))