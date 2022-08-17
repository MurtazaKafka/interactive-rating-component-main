let ratingState = document.getElementById("rate-state")
let thankYouState = document.getElementsByClassName("thank-you-state")
let ele = document.getElementsByClassName('num-btn')


document.getElementById("sub-btn").addEventListener("click", function(){

   document.getElementById("container").innerHTML = `<!-- Thank you state start -->
        <div class="thank-you-state" id="thanks-state">
            <img class="img-mobile" src="images/illustration-thank-you.svg" alt="mobile with financial items around it" />
            <h2 class="rate-decoration" id="selected-rate">You selected <!-- Add rating here --> out of 5</h2>

            <h1>Thank you!</h1>

            <p>We appreciate you taking the time to give a rating. If you ever need more support, 
            don’t hesitate to get in touch!</p>

            <!-- Thank you state end -->
        </div>
   `
   for(let i = 0; i < ele.length; i++) {
    if(ele[i].checked){
        document.getElementById("selected-rate").textContent = `You selected ${ele[i]} out of 5`
    }
}
})