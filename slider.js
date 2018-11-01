let sliderImages = document.querySelectorAll('.slide'),
arrowLeft = document.querySelector('#arrow-left'),
arrowRight = document.querySelector('#arrow-right'),
current =0;

//to clear all images
function reset() 
{
    for(let i=0; i < sliderImages.length; i++)
    {
        sliderImages[i].style.display = 'none';
    }

}

function startSlide() //initial slide
{
    reset();
    sliderImages[0].style.display = 'block';

}


function slideLeft() //prev images
{
    reset();
    sliderImages[current-1].style.display = 'block';
    current--;
}


 arrowLeft.addEventListener('click', function() // left arrow click
{
    if(current === 0)
    {
        current = sliderImages.length;
    }
    slideLeft();
});

function slideRight() //next images
{   
    reset();
    sliderImages[current+1].style.display = 'block';
    current++;
}

arrowRight.addEventListener('click', function() // right arrow click
{
    if(current === sliderImages.length-1)
    {
        current = -1;
    }
    slideRight();
});


startSlide();