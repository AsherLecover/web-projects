document.onreadystatechange = function(ev){
    if (document.readyState == "complete") {
        bankStart();
    } 
}

let templet = `id: [id] Balance: [Balance] clinet Full Name: [clinetFullName] clinetId: [clinetId]`

function bankStart(){

let innerhtml = document.querySelector('.account-list');
let arr = []
s = ''
for (let i = 0 ; i < BankDb.Clients.length ; i ++){
    arr.push(`<div class="account flex-col">`)
    arr.push('id: ' + BankDb.Clients[i].ID + '<br />')  
    arr.push('full name: ' + BankDb.Clients[i].firstName + '<br />')  
    arr.push(BankDb.Clients[i].lastName )  
    arr.push('ClientId: ' + BankDb.Accounts[i].ClientId+ '<br/>')  
    arr.push('Balnce: ' + BankDb.Accounts[i].Balance + '<br />')
    arr.push(`</div>`)



}
innerhtml.innerHTML = arr
console.log(arr)
}



