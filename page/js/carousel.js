const STATEMENTS = document.querySelectorAll(".Statement");
const CAROUSELTIME = 5000;
var currentStatement = 1;
renderCarousel();

function hasOverflow(statement) {
  currentStatement += statement;
  if (currentStatement > STATEMENTS.length) {
    currentStatement = 1;
  }
  else if (currentStatement < 1) {
    currentStatement = STATEMENTS.length;
  }
  return currentStatement;
}

function renderCarousel(statement = 1) {
  STATEMENTS.forEach((element,i) => {
    STATEMENTS[i].style.display = "none";
  })

  STATEMENTS[hasOverflow(statement) - 1].style.display = "flex";
  setTimeout(renderCarousel, CAROUSELTIME);
}
