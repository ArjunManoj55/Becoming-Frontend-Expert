const p = new Promise((resolve, reject) => {
    resolve("resolved")
});

async function handlePromise() {
    const val = await p;
    console.log(val);
}

handlePromise();