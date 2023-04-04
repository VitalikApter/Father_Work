var headerText = `
<div class="LeaderBoard_container">
<h2 class="text">LeaderBoard</h2>
</div>
`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();