//promise.all([array of promises])- kindf fail fast---------------------------------------------------------------

//this will make 3 parallel api calls

promise.all([p1, p2, p3]);
//p1 takes 3sec ,p2 takes 1 sec, p3 takes 2sec
// out will be an array of result with values of results

[val1, val2, val3] //out in 3sec because its parallel but it will wait for all of them to finish

//what if any failed??????????????

//in case p2 rejected 
// out will be error AFTER 1 SEC(it wont wait if error comes it just dont wait for others)

//promise.allSetteled()-wait for all results---------------------------------------------------------------------------

//when u dont care which fails and want like all others to fullfill and promise to complete irrespective of failures
[val1, err2, val3] //out in 3 sec


//promise.race() - one who finish first will be the winner --------------------------------------------------------------------------------

promise.race([p1, p2, p3]); //p1 3sec, p2 1 sec, p3 2sec

//after 1 sec it will give u the value of first settled promise

//what if the first one is an error???????????????? p3 fails -  eror after 2 sec - not wait for others to settle just out if fails

//promise.any() - similar to race but it will wait -------------------------------------------------------------------------------------

promise.any([p1, p2, p3]); //p1 3sec, p2 1 sec -fail, p3 2sec -fail

[val1 ] //ignore rejected and out first sucess

//if all fails out will be an array/list of errors - aggregate error