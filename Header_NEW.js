var headerText = `
<div class="Header_container">
<h2 class="text">Header</h2>
</div>
`;

function setHeader() {
  var header =  document.createElement("div");
  header.innerHTML = headerText ;
  document.body.insertAdjacentElement('afterbegin', header );
}

setHeader();