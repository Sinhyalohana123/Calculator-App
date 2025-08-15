function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = '';
}

function backspace() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const expression = display.value.replace(/Math\.(\w+)\(/g, (_, fn) => `Math.${fn}(`);
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
