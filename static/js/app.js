// from data.js

var tableData = data;

var tbody = d3.select("tbody");

console.log(tableData);
autoPopulate(tableData);

function autoPopulate(tableData) {

tableData.forEach((alients) => {
    var row = tbody.append("tr");
    Object.entries(alients).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});}

var tbody = d3.select("tbody");
console.log(tableData);
autoPopulate(tableData);
function autoPopulate(tableData) {

tableData.forEach((alients) => {
    var row = tbody.append("tr");
    Object.entries(alients).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
}

function handleClick() {
    var date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date) {
      filteredData = filteredData.filter(row => row.datetime === date);
    }
    buildTable(filteredData);
  }
  d3.selectAll("#filter-btn").on("click", handleClick);
  
  buildTable(tableData);
  
