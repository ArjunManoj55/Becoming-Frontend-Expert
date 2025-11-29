// case 1 

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved")
    }, 5000);
});

async function handlePromise( ) {
    console.log("hello");
    const val = await p;
    console.log("hi");
    console.log(val);
}

handlePromise();
// hello - then wait for 5 SEC
// hi
// resolved

// here it wait for the promise to resolve for 5sec , it wait until await got value in val
//then only the next line is exe

// case 2

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved1")
    }, 10000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved2")
    }, 5000);
});

async function handlePromise( ) {
    console.log("hello1");

    const val1 = await p1;
    console.log("hi1");
    console.log(val1);

    const val2 = await p2;
    console.log("hi2");
    console.log(val2);
}

handlePromise();
// hello - then wait for 10 SEC
// THEN ALL THE REST WILL BE PRINTED INTSANTLEY FROM VAL 1 -> VAL 2 , IT FOLLOWS THE FLOW