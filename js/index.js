let income=0;
let balance_money=0;

document.getElementById('calculate_button').addEventListener('click',function(){
     income=inputValue('income');
    // console.log(typeof (income));
    let food=inputValue('food');
    let rent=inputValue('rent');
    let clothes=inputValue('clothes');
    let expenses_money=food+rent+clothes;
     balance_money=income-expenses_money;

    if(isNaN(income)==false && isNaN(food)==false && isNaN(rent)==false && isNaN(clothes)==false  ){
       if(income<0 || food<0 || rent<0 || clothes<0){
        alert("Please give positive value");
      }
      else if(income<expenses_money){
        alert('Income not acceptable expansive');
      } 
      else{
        moneyCount('expenses',expenses_money);
        moneyCount('balance',balance_money);
      }
    }
    
    else{
     alert("Please give a number");
    }
   
    
   })

document.getElementById('save_money').addEventListener('click',function(){
    let save=inputValue('save');
    if(isNaN(save)==false){
      let save_amount=save/100;
      let saving_amount=income*save_amount;
      if(saving_amount>balance_money){
        alert("Saving amount not acceptable to Balance")
      }
      else{
        moneyCount('save_amount',saving_amount);
        let balance_amount=document.getElementById('balance').innerText;
        let balance_count=parseFloat(balance_amount);
      
        let remaining_balance=balance_amount-saving_amount;
        moneyCount('remaining',remaining_balance);
      }
      
     }
    else{
      alert("Please give number in save value")
     }
     
  
})


function inputValue(idName){
let input_name=document.getElementById(idName);
const input_value=input_name.value;
// console.log(typeof(input_value) );
const input_number=parseFloat(input_value);
input_name.value='';
return input_number;
}
function moneyCount(idName,moneyValue){
const money=document.getElementById(idName);
 money.innerText=moneyValue;


}


