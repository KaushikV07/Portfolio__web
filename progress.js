window.addEventListener('load',()=>{
    let progressBars = document.querySelectorAll('.progress__bar');
    let values = [
        '60%',
        '75%',
        '80%',
        '90%',
        '100%',
        '80%',
        '10%',
        '85%',
        '70%',
        '75%',
    ];
        progressBars.forEach((progress,index) => {
            progress.style.width = values[index];
        });
});