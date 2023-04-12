var footerText = `
<div class="Footer_container">
<h2 class="text">Footer</h2>
</div>
`;

function setFooter() {
  var footer =  document.createElement("div");
  footer.innerHTML = footerText ;
  document.body.insertAdjacentElement('beforeend', footer );
}

setFooter();