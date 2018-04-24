const form = document.getElementById('formId');
form.addEventListener('submit', (e)=> {
  e.preventDefault();
  const inputVal = document.getElementById('inputId').value;
  const dataToSend = {
    val: `${inputVal}  from lacal storage`
  };
  const dataToSend2 = {
    val: `${inputVal}  from session storage`
  };
  localStorage.setItem('objectToPass', JSON.stringify(dataToSend));
  sessionStorage.setItem('objectToPass', JSON.stringify(dataToSend2));
  location.href = "./pageTow.html";
});
