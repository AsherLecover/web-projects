document.onreadystatechange = function(ev) {
  if (document.readyState == "complete") {
    bankStart();
    getTransaction();
  }
};
let innerhtmlAccountsList = document.querySelector(".account-list");
let innerhtmlAccountDetails = document.querySelector(".details-panel");

function bankStart() {
  let arr = [];

  for (let i = 0; i < BankDb.Clients.length; i++) {
    arr.push(
      `<div class="account flex-col">  id: <span>${BankDb.Accounts[i].ID}</span>
full name: ${BankDb.Clients[i].firstName} ${BankDb.Clients[i].lastName}<br/> 
      ClientId:  ${BankDb.Accounts[i].ClientId} <br/> 
      Balnce: ${BankDb.Accounts[i].Balance}<br/> </div>`
    );
  }
  innerhtmlAccountsList.innerHTML = arr;
}


function getTransaction() {
  let innerhtmlAccountArr = document.querySelectorAll(".flex-col");

  innerhtmlAccountArr.forEach(element => {

    element.addEventListener("click", function(event) {
      let a = element.querySelector("span").textContent;

      arr = [`<b style= "color: red">AccountId: ${JSON.stringify(BankDb.API.getTransactionsByAccountId(a)[0].AccountId)}: <br></b>`]
     
      arr.push(`Total Balnce: ${JSON.stringify(BankDb.API.getBalance(a))} <br>`)
     
      for (let i = 0; i < BankDb.API.getTransactionsByAccountId(a).length; i++) {
          arr.push(`<div class= "details flex-col"> <b>Trensction Id:</b>  ${JSON.stringify(BankDb.API.getTransactionsByAccountId(a)[i].ID)} <br>
          Type: ${JSON.stringify(BankDb.API.getTransactionsByAccountId(a)[i].Type)} <br>
          Amount: ${JSON.stringify(BankDb.API.getTransactionsByAccountId(a)[i].Amount)} <br></div>`)
      }
    
      innerhtmlAccountDetails.innerHTML = arr

    });
  });
}
