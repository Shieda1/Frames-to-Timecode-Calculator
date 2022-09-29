// https://www.omnicalculator.com/other/frames-to-timecode

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let frames = v1;
let frameRate = v2;

btn.addEventListener('click', function() {
  
    result.textContent = `sec = ${computeDecliningBalanceDepreciation().toFixed(2)}`;
})

// calculation

function computeDecliningBalanceDepreciation() {
  return Number(frames.value) / Number(frameRate.value);
}