function loadingAnimation() {
    progressBar.style.display = "flex";
    progress.style.display = "flex";
    let time = 2500;
    var start = null;

    return new Promise((resolve) => {
        function step(timestamp) {
            if (!start) start = timestamp;
            var prog = timestamp - start;
            let barProg = ((prog * 100) / time);
            progress.style.width = barProg + "%";
            progress.innerHTML = Math.floor(barProg)  + "%";

            if (prog < time) {
                requestAnimationFrame(step);
            } else {
                progress.style.width = "100%";
                resolve(setTimeout(startGame, 10));
            }
        }
        requestAnimationFrame(step);
    });
}

function newGame(){
    // console.log(progress);
    // console.log(progressBar);
    document.getElementById('menu').style.display = 'none'; 
    gameContainer.style.backgroundColor = 'black';
    gameContainer.style.transition = 'background-color 1s';
    setTimeout( () => {
        progressBar.style.display = 'flex';
        progress.style.display = 'flex';
            progress.style.justifyContent = 'center';
            progress.style.alignItems = 'center';
            progress.innerHTML = '0%';
            setTimeout(loadingAnimation, 10);
    }, 1000)
}

fetch('index.html')
.then()