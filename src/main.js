let userInput = document.getElementById("date")
let result = document.getElementById("result")
userInput.max= new Date().toISOString().split("T")[0]
function calculateAge() {
   let  birthDay = new Date(userInput.value)
   let d1 = birthDay.getDay();
   let m1 = birthDay.getMonth() + 1;
   let y1 = birthDay.getFullYear();

   let today = new Date();

   let d2 = today.getDay();
   let m2 = today.getMonth() + 1;
   let y2 = today.getFullYear();
//difference
   let d3, m3, y3;
//get year
   y3 = y2 - y1
//get mounth
   if(m2 >= m1){
    m3 = m2 - m1
   }else{
    y3--;
    m3= 12 + m2 - m1
   }
//get day
   if(d2 >= d1){
    d3 = d2 - d1
   }else{
    m3--;
    d3= getDayInMonth(y1,m1)+ d2 - d1;
   }
   
   if(m3< 0){
    m3 = 11;
    y3--
    
   }
  result.innerHTML= `You Are <span>${y3} </span> years, <span>${m3}</span> month and<span> ${d3} </span> days old`
}
function getDayInMonth(year,month) {
    return new Date(year,month,0).getDate()
}