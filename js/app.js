//problem -1 
function anaToVori(ana){
    if(ana >= 0){

        let vori = ana / 16 ; 
        return vori ;
    }else{
        //error message
        return "Negative number and Latter is not accepted"
    }
}

let res = anaToVori(32)
//console.log(res)





//problem -2 
function pandaCost(singaraQuantity, samuchaQuantity, jilapyQuantity) {
   
    if (
      typeof singaraQuantity == "number" &&
      typeof samuchaQuantity == "number" &&
      typeof jilapyQuantity == "number" &&
      singaraQuantity >= 0 &&
      samuchaQuantity >= 0 &&
      jilapyQuantity >= 0
    ) {
      let singaraPrice = 7;
      let samuchaPrice = 10;
      let jilapyPrice = 15;
  
      // Price calculation
      let singara = singaraPrice * singaraQuantity;
      let samucha = samuchaPrice * samuchaQuantity;
      let jilapi = jilapyPrice * jilapyQuantity;
      const  totalPrice =  singara + samucha + jilapi;
      return totalPrice;
    } else {
     //error messaage
      return "Please enter positive value";
    }
  }
  
  const result = pandaCost(1, 1, 1);
  //console.log(result);






//problem -3 
function picnicBudget(member) {
    const first = 5000;
    const second = 4000;
    const over = 3000;
  
    if (typeof member == "number" && member >= 0) {
      // First 100 member calculation
      if (member <= 100) {
        const cost = member * first;
        return cost;
      }
      // Second 100 member calculation
      else if (member <= 200) {
        const first100PersonsCost = 100 * first;
        const people = member - 100;
        const second100PersonsCost = people * second;
        const totalCost = first100PersonsCost + second100PersonsCost;
        return totalCost;
      }
      // over 200 member calculation
      else {
        const first100PersonsCost = 100 * first;
        const second100PersonsCost = 100 * second;
        const people = member - 200;
        const peopleMultiply = people * over;
        const totalCost =
          first100PersonsCost + second100PersonsCost + peopleMultiply;
        return totalCost;
      }
    } else {
      return "Please enter positive number";
    }
  }
  
  const picnicBudgetTotal = picnicBudget(101);
  console.log(picnicBudgetTotal);





//problem - 4 
function oddFriend(friends){  
  for(let i = 0 ; i<friends.length ; i++){
      if(friends[i].length % 2 == 1){
          return friends[i]
      }
  }
}

let friendList = [ 'Rahman','taki' , 'nof' ,'asfak' , 'Nazmul','Billal','Nahid','Hasib','samsul islam shipon', ];
let fr = oddFriend(friendList);
console.log(fr)






// function oddFriend(friends) {
//     let firstOddFriendName = [];
  
//     for (let i = 0; i < friends.length; i++) {
//       // to find odd name in array
//       if (friends[i].length % 2 != 0) {
//         //   store first odd name
//         firstOddFriendName = friends[i];
//         break;
//       }
//     }
//     return firstOddFriendName;
//   }
  
//   const result1 = oddFriend(['A','Shipon','Rabeka', 'Hamim' ,'jara Islam', 'Ali Sharif','nazmul',]);
//   console.log(result1);
  






