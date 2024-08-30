let cartItems = 0;
    
        document.getElementById("cart-button").addEventListener("click", function () {
            alert("You have " + cartItems + " items in your cart!");
        });
    
        const seeMoreButton = document.getElementById("see-more-button");
        seeMoreButton.addEventListener("click", function () {
            const hiddenItems = document.querySelectorAll(".food-item.hidden");
            const foodGrid = document.querySelector(".food-grid");
    
            hiddenItems.forEach(item => {
                item.classList.toggle("hidden");
            });
    
            if (seeMoreButton.innerText === "See More") {
                seeMoreButton.innerText = "See Less";
                foodGrid.style.gridTemplateRows = "repeat(4, 1fr)";
            } else {
                seeMoreButton.innerText = "See More";
                foodGrid.style.gridTemplateRows = "repeat(2, 1fr)";
            }
        });
    
        const addToCartButtons = document.querySelectorAll(".add-to-cart");
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function () {
                cartItems++;
                document.getElementById("cart-button").innerText = "Cart (" + cartItems + ")";
                alert("Added to cart!");
            });
        });
    
        document.getElementById("subscribe-button").addEventListener("click", function () {
            const emailInput = document.getElementById("email-input");
            const subscriptionMessage = document.getElementById("subscription-message");
            if (emailInput.value) {
                subscriptionMessage.innerText = "Subscription is added successfully.";
                emailInput.value = "";
            } else {
                subscriptionMessage.innerText = "Please enter a valid email.";
            }
        });