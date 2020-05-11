// function that is run after clicking submit
function displayDetails() { 

    // displaying options chosen
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const tickets = document.getElementById("tickets").value;
    const optShow = document.getElementById("show");
    const showOutput = document.getElementById("showResult");
    const nameOutput = document.getElementById("nameResult");
    const addressOutput = document.getElementById("addressResult");
    const ticketsOutput = document.getElementById("ticketsResult");
    const methodOutput = document.getElementById("methodResult");
    const allMethods = document.querySelectorAll("input[name='method']");
    const selectedMethod = 
        document.querySelector("input[name='method']:checked");
    
    for (let i = 0; i < allMethods.length; i++) {
        allMethods[i].addEventListener("change", checkPreference);
    }
    
    nameOutput.innerText = "Name: " + name;
    addressOutput.innerText = "Address: " + address;
    ticketsOutput.innerText = "Number of tickets: " + tickets;
    methodOutput.innerText = "Method: " + selectedMethod.value;
    displaySelect();
    function displaySelect() {
        let show = optShow.options[optShow.selectedIndex].innerText;
        showOutput.innerText = "Show: " + show;
    }
    function checkPreference() {
        methodOutput.innerText = "Method: " + selectedMethod.value;
    }

    //end displaying options

     //calculations
    calculateMethodCost();

     function calculateMethodCost() {
         if (selectedMethod.value == "edelivery") {
             methodCost = 0;
         }
 
         else if (selectedMethod.value == "boxoffice") {
             methodCost = 1.50;
         }
 
         else if (selectedMethod.value == "posted") {
             methodCost = 3.99;
         }
        }
        

     calculateShowCost() ;
    
     function calculateShowCost() {

        if (show.value == "phantom") {
            showCost = 79;
        }
        else if (show.value == "hamilton") {
            showCost = 85;
        }
        else if (show.value == "lionking") {
            showCost = 67;
        }
        else {
            showCost = 83;
        }
    }
    
    var totalCalculation = (parseFloat(showCost) * parseFloat(tickets)) + parseFloat(methodCost);

    if (tickets >=6 ) {
        var discountTen = (10 / 100) * parseFloat(totalCalculation);
        totalCalculation = totalCalculation - parseFloat(discountTen) ;
    }

    if (tickets >=10 ) {
        var discountFifteen = (15 / 100) * parseFloat(totalCalculation);
        totalCalculation = totalCalculation - parseFloat(discountFifteen);
    }

    //total cost
    total.innerText = 
        `Total: £${totalCalculation.toFixed(2)}`;
    
    //end calculations

}
//end submit sunction


// function that is run after clicking clear, empties result box
function clearDetails() {

    const showOutput = document.getElementById("showResult");
    const nameOutput = document.getElementById("nameResult");
    const addressOutput = document.getElementById("addressResult");
    const ticketsOutput = document.getElementById("ticketsResult");
    const methodOutput = document.getElementById("methodResult");
    const total = document.getElementById("total");
    
    nameOutput.innerText = "Name: ";
    addressOutput.innerText = "Address: " ;
    ticketsOutput.innerText = "Number of tickets: ";
    methodOutput.innerText = "Method: ";
    showOutput.innerText="Show: ";
    total.innerText= "Total: "
}
//end clear function