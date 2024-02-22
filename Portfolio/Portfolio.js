window.onload = function() {
    const projectImgs = document.querySelectorAll('.project img');
    projectImgs.forEach(img => {
        let video = document.getElementById("joneh_vid");
        img.addEventListener('mouseenter', () => {
            video.play();
            
        });
        img.addEventListener('mouseleave', () => {
            video.pause();
           
        });
    });

     const Mackkas = document.querySelectorAll('.project1 img');
     Mackkas.forEach(img => {
        let video = document.getElementById("mackkas_vid");
        img.addEventListener('mouseenter', () => {
            video.play();
            video.style.opacity = 1;
        });
        img.addEventListener('mouseleave', () => {
            video.pause();
            video.style.opacity = 0;
        });
    });

    const Model = document.querySelectorAll('.project2 img');
    Model.forEach(img => {
       let video = document.getElementById("model_vid");
       img.addEventListener('mouseenter', () => {
           video.play();
           video.style.opacity = 1;
       });
       img.addEventListener('mouseleave', () => {
           video.pause();
           video.style.opacity = 0;
       });
   });
};