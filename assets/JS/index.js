const submitBtn = document.querySelector('.btn-submit');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const ratingBtn = document.querySelectorAll('.btn-rating')


submitBtn.addEventListener('click', () => {
    box1.style.display = 'none';
    box2.style.display = 'block';
})

ratingBtn.forEach(function (rating) {
    rating.addEventListener('click', () => {
        score.innerHTML = rating.innerHTML;
        rating.style.backgroundColor = 'hsl(25, 97%, 53%)';
        rating.style.color = '#fff';
    })
})

