//async function ONLY-----------------------------

async function getData( ) {
    return "hi";
}
// async function allways re3turns a promise 

const data = getData();

data.then(res => console.log(res));

// console.log(data);

//ASYNC AND AWAIT ARE USED TO HANDLE PROMISE

//AWAIT ONLY -use await infront of a promise that has to be resolved----------------

const p = new Promise((resolve, reject) => {
    resolve("resolved")
});

async function handlePromise() {
    const val = await p;
    console.log(val);
}

handlePromise();