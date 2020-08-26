var inputReason = document.querySelector('#input-reason');
var inputExpense = document.querySelector('#input-expense');
var btnAdd = document.querySelector('#addBtn');
var clearBtn = document.querySelector('#clear');
var expensesList = document.querySelector('#expenses-List');
var totalExpensesOutPut = document.querySelector('#totalExpenses');
const alertController = document.querySelector('ion-alert');

var totalExpenses = 0;
const clear = () => {
  inputReason.value = '';
  inputExpense.value = '';
};

btnAdd.addEventListener('click', () => {
  var reasonValue = inputReason.value;
  var expenseValue = inputExpense.value;

  if (
    reasonValue.trim().lenght <= 0 ||
    expenseValue <= 0 ||
    expenseValue.trim().lenght <= 0
  ) {
    const alert = document.createElement('ion-alert');
    // alert.cssClass = 'my-custom-class';
    alert.header = 'Message';
    // alert.subHeader = 'Subtitle';
    alert.message = 'Please Entered Valid Input Value.ThankYou!';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
    return;
  }
  console.log(reasonValue, expenseValue);
  var newElement = document.createElement('ion-item');
  newElement.textContent = reasonValue + ' : Rs-/ ' + expenseValue;
  expensesList.appendChild(newElement);

  totalExpenses += +expenseValue;
  totalExpensesOutPut.textContent = totalExpenses;

  clear();
});

clearBtn.addEventListener('click', () => {
  clear();
});
