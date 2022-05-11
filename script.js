

//
//  function atm() {
//  let choice = parseInt(prompt("Display menu choices here"));
//  const account = {
//    accountName: String,
//    balance: Number (100),
//  getBalance: function() { },
// deposit: function() { },
// withdrawal: function() { },
// getAccountName: function() { },
//    accountError: function() { },
//  exitAccount: function() { },
// };

// you can use the variable choice for your switch or if/else statement
// so choice will hold the value of the user input.
//


const account = {	
  accountName: 'James',
  balance: 100,
  getBalance: function() {
    const choice = parseInt(alert('Your current balance is: '+balance));
    this.goBack(choice);
  },

	deposit: function() {
		const deposit = parseFloat(prompt('How much would you like to deposit?'));

		if (isNaN(deposit) || deposit < 0 || deposit === "" || typeof deposit === 'string') {
			alert('Error: please enter a number!');
			deposit();
		} else {
			balance += deposit;
			getbalance();
		}
	},

	withdrawal: function() {
		const withdrawal = parseFloat(prompt('How much would you like to withdrawal?'));
		if (isNaN(withdrawal) || withdrawal === '') {
			alert('Error: please enter a number!');
			withdrawal();
		} else {
			balance -= withdrawal;
			getbalance();
		}
	},

  getAccountName: function () {
    const accountName = alert(`Account name: James. Press OK to go back.`);

    
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
      // If the user clicks ok without input or inputs something not on the menu the menu reopens
      this.atm();
    }
  }

  atm();

5