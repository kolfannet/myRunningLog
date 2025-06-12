function filterYear() {
  // Declare variables
  let inputYear, year, table, tr, tdYear, i, txtValue;
  inputYear = document.getElementById("year");
  year = inputYear.value.toUpperCase();
  table = document.getElementById("activities");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    tdYear = tr[i].getElementsByTagName("td")[9];
    if (tdYear) {
      txtValue = tdYear.textContent || tdYear.innerText;
      if (txtValue.indexOf(year) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

