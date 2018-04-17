// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const colorPicker = document.querySelector('#colorPicker');
const submitButton = document.querySelector('input[type=submit]');
const colorPicked = document.querySelector('input[type=color]');

function makeGrid() {

  const rows = document.getElementById('inputHeight').value;

  const columns = document.getElementById('inputWeight').value;

  const table = document.getElementById('pixelCanvas');


  for (let i=0; i<rows; i++){
    const row= document.createElement("tr");
	  table.appendChild(row);

	  for (let x=0; x<columns; x++){
        const column = document.createElement("td");
	      row.appendChild(column);
        //Choosing colors
table.on("click", "td", function() {
	$(this).css("background-color", color);
});
}
	  }
  }
};
}
submitButton.addEventListener('click', function(e){
  e.preventDefault(); //so it doesn't reload
  makeGrid()
});
