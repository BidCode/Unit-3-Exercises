// Timers Exercise 

function countDown (num1) {
    setInterval(function () {
        if (num1 <= 0) {
            console.log('DONE!')
            clearInterval(1);
        } else {
            console.log(num1--)
        }
    },1000)
  
}

countDown(3);