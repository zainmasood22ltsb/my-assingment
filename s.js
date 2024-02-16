let pin = prompt("Please enter your PIN")
correctpin = "1234"
    let balance = 0;

        if (pin === correctpin) {
            showOptions();
        }else{
            alert("Invalid PIN, Please Try Again")
            pin = prompt("Please enter your PIN")
        }

    function showOptions() {
        const choice = prompt("Choose an option: \n1. Deposit \n2. Check Balance");
        switch(choice) {
            case "1":
                depositAmount();
                break;
            case "2":
                alert("Your balance is: $" + balance);
                break;
            default:
                alert("Invalid choice. Please try again.");
                showOptions();
        }
    }
// From youtube
    function depositAmount() {
        const deposit = parseFloat(prompt("Enter the amount to deposit:"));
        if (!isNaN(deposit) && deposit > 0) {
            balance += deposit;
            alert("Deposit successful. Your new balance is: $" + balance);
        } else {
            alert("Invalid amount. Please try again.");
            depositAmount();
        }
    }

