function debounce( delay) {
    setTimeout(() => {
        for(let i = 0; i <= 10; i++) {
            console.log(i)
        }
    }, 1000)
}

debounce(1000);

