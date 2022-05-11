

//
// function atm() {
// let choice = parseInt(prompt("Display menu choices here"));
// const account = {
// accountName: String,
// balance: Number (100),
// getBalance: function() { },
// deposit: function() { },
// withdrawal: function() { },
// getAccountName: function() { },
// accountError: function() { },
// exitAccount: function() { },
// };

// you can use the variable choice for your switch or if/else statement
// so choice will hold the value of the user input.
// console log
//
const account = {	
  accountName: 'James',
  balance: 100,
  getBalance: function() {
    alert('Your current balance is: ' + this.balance);
    atm();
  },

	deposit: function() {
		const depositAmount = parseFloat(prompt('How much would you like to deposit?'));

		if (isNaN(depositAmount) || depositAmount <= 0 || depositAmount === "" ) {
			alert('Error: please enter a number!');
			deposit();
		} else {
			this.balance += deposit;
			this.getBalance();
		}
	},

	withdrawal: function() {
		const withdrawalAmount = parseFloat(prompt('How much would you like to withdraw?'));

		if (isNaN(withdrawalAmount) || withdrawalAmount <= 0 || withdrawalAmount === "" ) {
			alert('Error: please enter a number!');
			deposit();
		} else {
			this.balance -= withdrawalAmount;
			this.getBalance();
		}
	},


  getAccountName: function () {
    //const accountName = alert(`Account name: James. Press OK to go back.`);
    alert(`Account name is: ${this.accountName}`);
    atm();
  },

	accountError: function() {
		alert('Error: accepted numbers are 1 through 5.');
		atm();
	},

	exitAccount: function() {
		const confirm_leave = confirm('You have selected exit.');
		if (confirm_leave) {
			window.close();
		} else {
			atm();
		};
	},
}

  function atm() {
    let choice = parseInt(prompt("Menu: 1- Get account balance. 2- Make a deposit. 3- Make a withdrawal. 4- Account name. 5- Exit."));

    // Get balance
    if (choice === 1) {
      account.getBalance();
      // Deposit
    } else if (choice === 2) {
      account.deposit();
      // withdrawal
    } else if (choice === 3) {
      account.withdrawal();
      // Get account name
    } else if (choice === 4) {
      account.getAccountName();
      // Exit account
    } else if (choice === 5) {
      account.exitAccount();
    } else {
      
    }
  }

  atm();

