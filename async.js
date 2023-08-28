console.log('person1: shows ticket');
console.log('person1: shows ticket');


// const promiseWifeBringingTicks= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     },3000);
// })

// const getPopcorn = promiseWifeBringingTicks.then((t)=>{
//     console.log('wife: I have tickets');
//     console.log('husband: should we go in?');
//     console.log('wife: no I am hungry');

//     return new Promise((resolve,reject)=>
//         resolve(`${t} popcorn`));
    
//     //console.log(`person3: shows ${t}`)
// })
// const getButter= getPopcorn.then((t)=>{
//     console.log('husband: i got popcorn');
//     console.log('husband: should we go in?');
//     console.log('wife: no I need butter on my popcorn');

//     return new Promise((resolve,reject)=>
//         resolve(`${t} butter`));
    
 
// })
// getButter.then((t)=> console.log(t));


//async function

const preMovie=async()=>
{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('ticket'),3000);
    })

    const getPopcorn=new Promise((resolve, reject)=> resolve(`popcorn`))
   // const addButter= new Promise((resolve, reject)=>resolve(`butter`))
    //const getColddrink= new Promise((resolve, reject)=>resolve(`coldrink`))
    const getCandy=new Promise((resolve, reject)=> resolve(`candy`))
    const getCoke=new Promise((resolve, reject)=> resolve(`coke`))
    let ticket = await promiseWifeBringingTickets;
    let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
    

    console.log(`${popcorn}, ${candy}, ${coke}`)

    return ticket;
}
preMovie().then((m)=>console.log(`person3: shows${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');
