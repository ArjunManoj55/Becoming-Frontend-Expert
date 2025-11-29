//REAL WORLD EG

const API = "UHSDIHHSEDAD"

async function handlePromise() {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
}

handlePromise();

//using try catch

async function handlePromise() {
    
    try{
        const response = await fetch(API);
        const data = await data.json();
        console.log(data);
    } catch(err) {
        console.log(err)
    }

}