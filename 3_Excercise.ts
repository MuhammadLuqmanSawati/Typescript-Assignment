let percenName : String = ""; 

percenName = prompt("What is your name?") || "" ;

let uppercase : String= percenName. toUpperCase();
let lowercase : String= percenName. toLowerCase();
let titlecase : String= percenName. split('').map(word => word.charAt(0).toUpperCase() + word.slice(1). toLowerCase()).join('')

if (percenName !== null && percenName !== "" ) {

    alert (`Hellow ${percenName} Here in your name in: 
uppercase= ${uppercase}
lowercase= ${lowercase}
titlecase= ${titlecase}`)
}
else { 
    alert ("Kindly fill your name !")
}
