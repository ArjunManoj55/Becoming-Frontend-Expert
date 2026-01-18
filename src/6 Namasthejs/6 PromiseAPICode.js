const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("p1"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("p2"), 1000);
  setTimeout(() => resolve("p2 "), 4000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("p3"), 2000);
});

//promise.all()------------------------------

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//promise.allSetteled()- it gives an object output ----

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//promise.race()---------------------

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

//promise.any()---------------------

Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// AGGREGATE ERROR - ALL PROMISES WERE REJECTED
