var content = document.getElementById('main-container');
const response = await fetch("https://raw.githubusercontent.com/raparthisaikiran/raparthidotxyz/master/data/data.json");
  const jsonData = await response.json();
  jsonData.forEach(element => {
    content.innerHTML += `
    <div class="sub-content flex-row">
    <div class="c-title w-15">
        <span>${element.title}</span>
    </div>
    <div class="c-link w-15">
        <a href="${element.link}">${element.title}</a>
    </div>
    <div class="c-desc w-70">
        <p>${element.desc}</p>
    </div>
    </div>`
});