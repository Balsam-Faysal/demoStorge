const sentData = document.getElementById('valToShow');
const myData = localStorage['objectToPass'];
const myData2 = sessionStorage['objectToPass'];

sentData.textContent = `${JSON.parse(myData).val} ____  ${JSON.parse(myData2).val}`;
