const price = document.querySelector('[data-price]');
const slider = document.getElementById('slide');
const checkbox = document.getElementById('checkbox');
const pageViews  = document.querySelector('[data-page]');
const plan = document.querySelector('[data-plan]');

let priceChoice = 16;

slider.oninput = function(){
    price.innerHTML = this.value;
    switch(+price.innerHTML){

        case 0:
            priceChoice = 8;
            pageViews.innerHTML = '10k pageviews';
            price.innerHTML =`$ ${priceDiscount(priceChoice)}`;
            break;

        case 25:
            priceChoice = 12;
            pageViews.innerHTML = '12k pageviews';
            price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
            break;

        case 50:
            priceChoice = 16;
            pageViews.innerHTML = '100k pageviews';
            price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
            break;

        case 75:
            priceChoice = 24;
            pageViews.innerHTML = '500k pageviews';
            price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
            break;

        case 100:
            priceChoice = 36;
            pageViews.innerHTML = '1M pageviews';
            price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
            break;

        default:
            priceChoice = 16;
            pageViews.innerHTML = '100k pageviews';
            price.innerHTML = `$ ${priceDiscount(priceChoice)}`;
            break;
    }
}



slider.addEventListener("mousemove", function(){
    const x = slider.value;
    const color = `linear-gradient(90deg,rgb(165, 243, 235) ${x}%,  rgb(234, 238, 251) ${x}%)`;
    slider.style.background = color;
})


// function for calculating the discount

const priceDiscount = function(discount){
    if(checkbox.checked){
        discount = (discount - (discount * .25)) * 12; 
        plan.innerHTML = '/ year';
    }
    else{
        plan.innerHTML = '/ month';
    }

    return discount.toFixed(2);
}
