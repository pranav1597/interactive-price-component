const price = document.querySelector('[data-price]');
const slider = document.getElementById('slide');
const checkbox = document.getElementById('checkbox');
const pageViews  = document.querySelector('[data-page]');
const plan = document.querySelector('[data-plan]');



slider.oninput = function(){
    price.innerHTML = '$' + this.value;
    switch(price.innerHTML){
        case '$8':
            pageViews.innerHTML = '10k pageviews';
            break;
        case '$12':
            pageViews.innerHTML = '12k pageviews';
            break;
        case '$16':
            pageViews.innerHTML = '100k pageviews';
            break;
        case '$24':
            pageViews.innerHTML = '500k pageviews';
            break;
        case '$36':
            pageViews.innerHTML = '1M pageviews';
            break;
        default:
            pageViews.innerHTML = '100k pageviews';
            price.innerHTML = '$' + '16';
            break;
    }
}



slider.addEventListener("mousemove", function(){
    let x = slider.value;
    let color = 'linear-gradient(90deg,	rgb(16, 213, 194)' + x + '%, rgb(16, 213, 194)' + x + '%,)';
    slider.style.background = color;
})

// when clicking on toggle button 

checkbox.onclick = function(){

    if(checkbox.checked === true){
        slider.oninput = function(){
        price.innerHTML = '$' + (this.value - (this.value * .25)) * 12;
        switch(price.innerHTML){
            case '$72':
                pageViews.innerHTML = '10k pageviews';
                break;
            case '$102':
                pageViews.innerHTML = '12k pageviews';
                break;
            case '$144':
                pageViews.innerHTML = '100k pageviews';
                break;
            case '$216':
                pageViews.innerHTML = '500k pageviews';
                break;
            case '$324':
                pageViews.innerHTML = '1M pageviews';
                break;
            default:
                pageViews.innerHTML = '100k pageviews';
                price.innerHTML = '$' + '144';
                break;
        }
        }
        plan.innerHTML = '/ year';
    }
    else{
        slider.oninput = function(){
            price.innerHTML = '$' + this.value;
        
            switch(price.innerHTML){
                case '$8':
                    pageViews.innerHTML = '10k pageviews';
                    break;
                case '$12':
                    pageViews.innerHTML = '12k pageviews';
                    break;
                case '$16':
                    pageViews.innerHTML = '100k pageviews';
                    break;
                case '$24':
                    pageViews.innerHTML = '500k pageviews';
                    break;
                case '$36':
                    pageViews.innerHTML = '1M pageviews';
                    break;
                default:
                    pageViews.innerHTML = '100k pageviews';
                    price.innerHTML = '$' + '16';
                    break;
            }
        }
        plan.innerHTML = '/ month';
    }
}

