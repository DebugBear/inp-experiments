function blockCPU(ms) {
  const end = Date.now() + ms;
  while (Date.now() < end) { }
}

blockCPU(500)


/* TIMER */

window.addEventListener('load', function() {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;


    const timerElement = document.getElementById('timer');

    function updateTimer() {
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds/100)}`;
    }


    function startTimer() {
        setInterval(function() {
            milliseconds += 100; 
            if (milliseconds === 1000) {
                milliseconds = 0;
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                }
            }
            updateTimer();
        }, 100); 
    }

    startTimer();
});




/* EXAMPLE 2 */

// document.getElementById("example2-a").addEventListener('click', function(e) {
//   setTimeout(() => {
//     console.log("settimoeut")
//     e.target.style.background="red"
//     setTimeout(() => {
//       blockCPU(2000)
//     }, 20)
//   },1000)
// });

// document.getElementById("example2-b").addEventListener('click', function() {
//   console.log("click")
//   blockCPU(4000)
// });

// document.getElementById("example2-b").addEventListener('pointerdown', function() {
//   console.log("pointerdown")
// });

// document.getElementById("example2-b").addEventListener('pointerup', function() {
//   console.log("pointerup")
// });



/* EXAMPLE 3 */

document.getElementById("example3").addEventListener('click', function() {
  console.log("click")
  blockCPU(500)
});



/* EXAMPLE 4 */

document.getElementById("example4").addEventListener('pointerdown', function() {
  console.log("pointerdown")
  blockCPU(500)
});

document.getElementById("example4").addEventListener('click', function() {
  console.log("click")
  blockCPU(1000)
});

document.getElementById("example4").addEventListener('pointerup', function() {
  console.log("pointerup")
  blockCPU(2000)
});



/* EXAMPLE 5 */

document.getElementById("example5").addEventListener('keyup', function() {
  console.log("keyup")
  blockCPU(200)
});



/* EXAMPLE 6 */

// document.getElementById("example6").addEventListener('pointerdown', function() {
//   console.log("pointerdown")
//   blockCPU(1000)
// });

// document.getElementById("example6").addEventListener('click', function() {
//   console.log("click")
//   blockCPU(4000)
// });

/* EXAMPLE 7 */

document.getElementById("example7").addEventListener('pointerdown', function() {
  console.log("pointerdown")
  blockCPU(400)
});

document.getElementById("example7").addEventListener('click', function() {
  console.log("click")
  blockCPU(400)
});


/* EXAMPLE 8 */

document.getElementById("example8").addEventListener('pointerdown', function() {
  console.log("pointerdown")
  blockCPU(200)
});

document.getElementById("example8").addEventListener('pointerup', function() {
  console.log("pointerup")
}); 

/* EXAMPLE 9 */


document.getElementById("example9").addEventListener('click', function() {
  console.log("click")
  blockCPU(1000)
});


document.getElementById("example9").addEventListener('mouseenter', function() {
  console.log("click")
  blockCPU(600)
});
