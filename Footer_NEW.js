var footerText = `
<div class="Footer_container">
<h2 class="text">LeaderBoard</h2>
</div>
`;

function setHeader() {
  var footer =  document.createElement("div");
  footer.innerHTML = headerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setHeader();