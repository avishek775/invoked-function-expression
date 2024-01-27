//+++++++++++++  IIFE
//named iife
(function abhi(){
    console.log(`DB CONNECTED `);
})();

// when we write two IIFE then always use semicollan(;) at the end
//arrow function



//unNamed iife

// (()=>{
//     console.log(`db connectd`)
// })();

//excute name


((name)=>{
    console.log(`db connectd ${name}`);
})("abhishek")
