document.getElementById('scrapeButton').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: scrapeTable,
    });
  });
});

function scrapeTable() {
  var table = document.querySelector('table'); // Adjust the selector to match your specific table
  var csv = [];

  table.querySelectorAll('tr').forEach(function (row) {
    var rowData = [];
    row.querySelectorAll('td, th').forEach(function (cell) {
      rowData.push(cell.innerText);
    });
    csv.push(rowData.join(','));
  });

  var csvContent = 'data:text/csv;charset=utf-8,' + csv.join('\n');
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'table.csv');
  link.click();
}
document.getElementById('scrapeButton').addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.scripting.executeScript({
      target: { tabId: activeTab.id },
      function: scrapeTable,
    });
  });
});

function scrapeTable() {
  var table = document.querySelector('table'); // Adjust the selector to match your specific table
  var csv = [];

  table.querySelectorAll('tr').forEach(function (row) {
    var rowData = [];
    row.querySelectorAll('td, th').forEach(function (cell) {
      rowData.push(cell.innerText);
    });
    csv.push(rowData.join(','));
  });

  var csvContent = 'data:text/csv;charset=utf-8,' + csv.join('\n');
  var encodedUri = encodeURI(csvContent);
  var link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'table.csv');
  link.click();
}
