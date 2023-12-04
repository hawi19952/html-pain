console.log('hello world')

function defineBoxes() {
  const boxSizeInPixel = 50;
  const hight = screen.availHeight;
  const width = screen.availWidth;
  const columns = Math.floor(width/boxSizeInPixel);
  const rows = Math.floor(hight/boxSizeInPixel);


  console.log({
    hight,
    width,
    columns,
    rows
  })

  return columns * rows;
}

function makeItBlack(id) {
  document.getElementById(`${id}`).style.backgroundColor = "green";
}

function addAttributes() {
  const boxesArea = defineBoxes();
  console.log(boxesArea)
  for (let i = 1; i <= boxesArea-1; i++) {
    const box = document.createElement("div");
    box.classList.add("box")
    box.id = i;
    box.setAttribute("onmouseleave", `makeItBlack(${i})`)
    document.getElementById("container").appendChild(box)
  }
}