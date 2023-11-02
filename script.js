//day 3 - question1
function areObjectsEqual(obj1, obj2) {
    const stringifiedObj1 = JSON.stringify(obj1);
    const stringifiedObj2 = JSON.stringify(obj2);
    return stringifiedObj1 === stringifiedObj2;
}
 
let obj1 = {
    name: "Suvarna",
    age: 25
};
 
let obj2 = {
    age: 25,
    name: "Suvarna",
};
 
console.log(areObjectsEqual(obj1, obj2));

//Output:
false


// question2
//use the rest countries api url and display all the country flag in console

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flag);   

}
}


//question 3
//use rest countries api url and print all countries names,regions,subregion and populations

var req = new XMLHttpRequest();

req.open("GET","https://restcountries.com/v3.1/all");

req.send();

req.onload=function(){
    var resu=JSON.parse(req.response);
    for(let i = 0 ; i< resu.length ; i++){
        console.log(resu[i].name);
        console.log(resu[i].region);
        console.log(resu[i].subregion); 
        console.log(resu[i].population);    

}
}
