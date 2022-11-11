document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const convert = document.getElementById("convert");
  let vrobit = 0;
  let drozbit = 0;
  let clickwick = 0;
  let gazoontight = 0;
  let frazoint = 0;
  let blointoint = 0;

  convert.addEventListener("click", () => {
    vrobit = Number(input.value);
    drozbit = Math.floor(vrobit / 100000);
    vrobit = vrobit % 100000;
    clickwick = Math.floor(vrobit / 50000);
    vrobit = vrobit % 50000;
    gazoontight = Math.floor(vrobit / 10000);
    vrobit = vrobit % 10000;
    frazoint = Math.floor(vrobit / 1000);
    vrobit = vrobit % 1000;
    blointoint = Math.floor(vrobit / 500);
    vrobit = vrobit % 500;
    console.log(
      "drozbit: " +
        drozbit +
        "  clickwick: " +
        clickwick +
        "  gazoontight: " +
        gazoontight +
        "  frazoint: " +
        frazoint +
        "  blointoint: " +
        blointoint +
        "  vrobit: " +
        vrobit
    );
  });
});
