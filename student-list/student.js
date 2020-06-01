let student = [
    { name : 'ariel', age:35, class:'angular1'},
    { name : 'yakov', age:33, class:'angular 2'},
    { name : 'asher', age:44, class:'angular 2'},
    { name : 'shuli', age:55, class:'angular 3'},
    { name : 'avi', age:6, class:'angular 4'},
];
for (let i = 0; i < student.length; i++) {
    student[i].age = 100
}

let myTemplate = document.getElementById('template_student').innerHTML

function render(template, dataArr){
    let h = '';
    let r = /\[(.*)\]/g;
    let propertiesInTemplate = template.match(r)

    for (let i = 0; i < propertiesInTemplate.length; i++) {
        let p = propertiesInTemplate[i];
        p = p.replace('[', '').replace(']', '')
        propertiesInTemplate[i] = p
    }

    dataArr.forEach(item => {
        let itemHtml = template
        propertiesInTemplate.forEach(p =>{
            let propValue = item[p]
            
            itemHtml = itemHtml.replace(`[${p}]`, propValue)
        })
        h += itemHtml
    });
    return h
}
let myList = document.getElementById('myList')
myList.innerHTML = render(myTemplate, student)


