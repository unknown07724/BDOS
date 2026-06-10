       const screen = document.getElementById("screen");
        
        let lines = [createLine()];
        let currentLine = lines[0];
        
        function createLine() {
          const p = document.createElement("p");
          p.textContent = "";
          document.body.appendChild(p);
          return p;
        } //this creates lines
        
        function focusLast() {
          currentLine = lines[lines.length - 1];
        }
        
        document.addEventListener("keydown", (e) => {
          e.preventDefault();
        
          if (e.key === "Enter") {
            lines.push(createLine());
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
