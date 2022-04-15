const getFromLocalStorage=()=>{
   return JSON.parse(localStorage.getItem("Shopping_Cart"))
}
// console.log(getFromLocalStorage())
const addToLocalStorage=(id)=>{
    const exist=getFromLocalStorage();
    // console.log(exist);
    let shoppingCart={};
    if(!exist){
        shoppingCart[id]=1;
    } else{
        shoppingCart=exist;
        if(shoppingCart[id]){
            const newCount=shoppingCart[id]+1;
            shoppingCart[id]=newCount;

        }
        else{
            shoppingCart[id]=1;
        }
    }
    
    
    localStorage.setItem("Shopping_Cart",JSON.stringify(shoppingCart))
}
export{addToLocalStorage,getFromLocalStorage}