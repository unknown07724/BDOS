     const screen = document.getElementById("screen");

let lines = [];
let currentLine = null;

// command registry
const commands = {
  HELP() {
    return "HELP, DIR, DATE, ECHO";
  },

  DIR() {
    return list()
  },

  DATE(args) {
    return Date.now().toString();
  },

  ECHO(args) {
    return args
  },     


function createLine() {
  const p = document.createElement("p");
  p.textContent = "";
  screen.appendChild(p);
  return p;
}

function focusLast() {
  currentLine = lines[lines.length - 1];
}

function runCommand(input) {
  const parts = input.trim().split(" ");
  const cmd = parts[0];
  const args = parts.slice(1);

  if (!cmd) return;

  if (commands[cmd]) {
    return commands[cmd](args);
  }

  return "Unknown command";
}

// init first line
lines.push(createLine());
focusLast();

document.addEventListener("keydown", (e) => {
  e.preventDefault();

  if (e.key === "Enter") {
    const input = currentLine.textContent;

    const output = runCommand(input);

    if (output !== null && output !== undefined) {
      const outLine = createLine();
      outLine.textContent = output;
      lines.push(outLine);
    }

    const newLine = createLine();
    lines.push(newLine);
    focusLast();
    return;
  }

  if (e.key === "Backspace") {
    currentLine.textContent = currentLine.textContent.slice(0, -1);
    return;
  }

  if (e.key.length === 1) {
    currentLine.textContent += e.key;
  }
});
