var headerText = `
<div class="Header_container">
<h2 class="text">LeaderBoard</h2>
</div>
`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();