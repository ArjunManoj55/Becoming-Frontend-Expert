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