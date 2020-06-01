class Client {
  firstName;
  lastName;
  ID;
}

class Transaction {
  ID;
  AccountId;
  Type;
  Amount;
}

class Account {
  ID;
  ClientId;
  Balance;
}

function rend(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

let BankDb = {
  Clients: [],
  Accounts: [],
  Transaction: [],
  API: {
    getAccountById: function(accountId) {
      for (let i = 0; i < BankDb.Account.length; i++) {
        if (BankDb.Account[i].ID == accountId) {
          return BankDb.Accounts[i];
        }
      }
    },
    
    getTransactionsByAccountId: function(accountId) {
      let transactionToArr = [];
      for (let i = 0; i < BankDb.Transaction.length; i++) {
        if (BankDb.Transaction[i].AccountId == accountId) {
          transactionToArr.push(BankDb.Transaction[i]);
        }
      }
      return transactionToArr;
    },

    getBalance : function(accountId){
        let transactions = this.getTransactionsByAccountId(accountId);
        let balance = 0;
        transactions.forEach(transaction => balance += transaction.Amount);
        return balance;
    },
    getClinetById : function(accountId){
        for (let i = 0; i < BankDb.Client.length; index++) {
            if(BankDb.Clients[i].ID == accountId){
                return BankDb.Clients[i]
            } 
        }
    }
  }
};

(function initDb(){
    for(let i = 3; i < 16; i++){
        let client = new Client();
        client.ID = i * 1234;
        let letter = String.fromCharCode(rend(25)+65);
        client.firstName = 'Asher ' + letter + letter;
        client.firstName = 'Mr Lecover ' + letter + letter + letter;
        BankDb.Clients.push(client)
    }

    for(let i = 3; i < 16; i++){
        let account = new Account();
        account.ID = i;
        let clinetIndex = rend(5)
        account.ClientId = BankDb.Clients[clinetIndex].ID;
        BankDb.Accounts.push(account)
    }

    for (let i = 0; i < 116; i++) {
        let transaction = new Transaction();
        transaction.ID = i
        transaction.Type = rend(2) == 1 ? 'Deposit' : 'Withdraw';
        transaction.Amount = rend(4000);

        if(transaction.Type == 'Withdraw'){
            transaction.Amount *= -1;
        }
        let accountIndex = rend(13);
        transaction.AccountId = BankDb.Accounts[accountIndex].ID;
        BankDb.Transaction.push(transaction); 
    }
    BankDb.Accounts.forEach(account =>
        account.Balance = BankDb.API.getBalance(account.ID))

})();



