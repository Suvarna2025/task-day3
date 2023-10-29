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

//output:
//true

//day 3 - question2
//use the rest countries api url and display all the country flag in console

//1st step : create a XHR object
var request = new XMLHttpRequest();
//2nd step: API URL
//.open method
request.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request.send();
//4th step : once the data sucessfully received from server
//onload is an event

request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].flags);   

}
}

//day 3- question 3
//use rest countries api url and print all countries names,regions,subregion and populations

//1st step : create a XHR object
var request = new XMLHttpRequest();
//2nd step: API URL
//.open method
//2 parameters
request.open("GET","https://restcountries.com/v2/all");
//3rd step : establishing the bridge
request.send();
//4th step : once the data sucessfully received from server
//onload is an event
//when we use :  once the data / server is showing 200 sataus code
request.onload=function(){
    var result=JSON.parse(request.response);
    for(let i = 0 ; i< result.length ; i++){
        console.log(result[i].name);
        console.log(result[i].region);
        console.log(result[i].subregion); 
        console.log(result[i].population);    

}
}
