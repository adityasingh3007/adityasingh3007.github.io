document.getElementById("year").textContent = new Date().getFullYear();

// Boot-log hero: types each line out, then leaves a blinking cursor.
(function () {
  var el = document.getElementById("boot");
  if (!el) return;

  var P = '<span class="prompt">aditya@portfolio</span>:<span class="path">~</span>$ ';
  var lines = [
    { html: P, type: "whoami" },
    { html: '<span class="name">Aditya Kumar Singh</span>' },
    { html: P, type: "cat role.txt" },
    { html: "Linux Kernel &amp; Embedded Systems Engineer" },
    { html: '<span class="ok">[ OK ]</span>  5+ years · Amazon · Qualcomm' },
    { html: P, type: "", cursor: true }
  ];

  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    el.innerHTML = lines
      .map(function (l) { return l.html + (l.type || "") + (l.cursor ? '<span class="cursor">_</span>' : ""); })
      .join("\n");
    return;
  }

  var li = 0, ci = 0, buf = "";
  function step() {
    var line = lines[li];
    if (ci === 0) buf += line.html;
    var txt = line.type || "";
    if (ci < txt.length) {
      buf += txt.charAt(ci); ci++;
      render(false);
      setTimeout(step, 42);
    } else {
      if (line.cursor) { render(true); return; }
      buf += "\n"; li++; ci = 0;
      if (li < lines.length) setTimeout(step, 260); else render(true);
    }
  }
  function render(done) {
    el.innerHTML = buf + (done ? "" : '<span class="cursor">_</span>');
  }
  setTimeout(step, 350);
})();
