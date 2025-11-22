function a() {
    console.log(b);
}

var b = 10;
a();
// 10

function a() {
    c();
    function c() {
        console.log(b)
    }
}

var b = 10;
a();
//10 still b is accessible

// IF B IS OUTSIDE IT WILL BE ACCESSIBLE BUT IF ITS INSIDE A FUNCTION ITS NOT DEFINED