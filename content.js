function scrapeTable() {
    var table = document.querySelector('table');
  
    if (table) {
      var csv = [];
  
      table.querySelectorAll('tr').forEach(function (row) {
        var rowData = [];
        row.querySelectorAll('td, th').forEach(function (cell) {
          rowData.push(cell.innerText.trim());
        });
        csv.push(rowData.join(','));
      });
  
      if (csv.length > 0) {
        var csvContent = 'data:text/csv;charset=utf-8,' + csv.join('\n');
        var encodedUri = encodeURI(csvContent);
        var link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'table.csv');
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        console.log('No table data found on this page.');
      }
    } else {
      console.log('No table found on this page.');
    }
  }
  
  scrapeTable();
  