async function copyText(e) {
    const elem = e.currentTarget;
    const text = elem.textContent;
    try {
      await navigator.clipboard.writeText(text);
      elem.textContent = "Link Copiado!";
    } catch (err) {
      //use document.execCommand('copy') as fallback
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand("copy");
      elem.textContent = "Link Copiado!";
      document.body.removeChild(textArea);
    } finally {
      setTimeout(() => {
        elem.textContent = text;
      }, 6000);
    }
  }
  document.querySelector(".target-elem-whatever").addEventListener("click", copyText);
  document.querySelector(".whatever").addEventListener("click", copyText);
  document.querySelector(".target-elem-whateve").addEventListener("click", copyText);
