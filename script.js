function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

document.addEventListener("DOMContentLoaded", async function () {
  //const consoleElement = document.getElementById('console2');
  const title = document.getElementById('title');

  //document.getElementById('console2').innerText = "";
  title.textContent = "";

  //const consoleText = 'Hello! Welcome to Pixelize!\nBelow, you can find all our resources for our docs!';
  const titleText = "Introducing\nPixelize!";

  function typeText(index, element, text) {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      const randomTime = Math.floor(Math.random() * (200 - 100) + 100);
      setTimeout(() => typeText(index, element, text), randomTime);
    } else {
      setTimeout(() => {
        element.textContent = "";
        typeText(0, element, text);
      }, 10000);
    }
  }

  //typeText(0, consoleElement, consoleText);
  typeText(0, title, titleText);








  document.getElementById('s+s-updates').addEventListener('click', () => {
    document.location.href="updates.html"
  });



  const response = await fetch(`https://api.pixelize.dev/message`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

if (data.error) {
  return document.getElementById('message').innerText = data.error
} else {
  return document.getElementById('message').innerText = `${data.message} - ${data.user.tag}`
}

});
