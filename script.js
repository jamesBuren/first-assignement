const balance=50000;  

function withdraw(amount)   //this function should be called accept not withdraw 
 { //you didn't close this brace

  var sure = confirm("Are You Sure You Want To Withdraw This Amount?");
  if(true)  //should be if (sure)
      {
        balance = balance - amount;
      }else{
        alert("No Withdrawal Made");
      }
       alert("Your Balance Is "+balance);
    }


    