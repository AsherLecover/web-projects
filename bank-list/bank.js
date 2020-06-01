document.onreadystatechange = function(ev){
    if (document.readyState == "complete") {
        bankStart();
    } 
}
function bankStart(){
    let accountsCustomArray = []
    BankDb.Accounts.forEach(acc => {
        let myClient = BankDb.API.getCliendById(acc.ClientId)
        let o = {
            ID : acc.ID,
            Balance : acc.Balance,
            ClientId : acc.ClientId,
            ClientFullName : myClient.lastName + ' ' + myClient.firstName
        }
        accountsCustomArray.push(o)
    });
    document.querySelector('.accounts-list').innerHTML = Render(templates.account, accountsCustomArray)
    console.log(accountsCustomArray)
}

let templates = {
    account : `<div class="account flex-col">
        <div> <label>ID: </label> <span>[ID]</span> </div>
        <div> <label>ClientFullName: </label> <span>[ClientFullName]</span> </div>
        <div> <label>ClientId: </label> <span>[ClientId]</span> </div>
        <div> <label>Balance: </label> <span>[Balance]</span> </div>
    </div>`
}

let myAccountsList = document.getElementsByClassName('accounts-list')

function Render(templates,accountsCustomArray ){

    let h = '';
    let r = /\[(.*)\]/g;
    let propertiesInTemplate = templates.match(r)

    for (let i = 0; i < propertiesInTemplate.length; i++) {
        let p = propertiesInTemplate[i];
        p = p.replace('[', '').replace(']', '')
        propertiesInTemplate[i] = p
    }

    accountsCustomArray.forEach(item => {
        let itemHtml = templates
        propertiesInTemplate.forEach(p =>{
            let propValue = item[p]
            
            itemHtml = itemHtml.replace(`[${p}]`, propValue)
        })
        h += itemHtml
    });
    return h 
}
