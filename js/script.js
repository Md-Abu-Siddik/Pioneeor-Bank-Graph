// Login btn

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // if(email == "siddik@gmail.com" && password == '1994'){
    //     let loginArea = document.getElementById("login-area");
    //     loginArea.style.display = "none";
    //     let transactionArea = document.getElementById("transaction-area");
    //     transactionArea.style.display = "block";
    // }
    // else{
    //     alert('Email of password error');
    // }
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
    graphShow();
})

// deposite btn
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);
    updateSpanText("currentDeposit", depositNumber);

    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";

    graphShow();

})
// widthdraw
const widthdrawBtn = document.getElementById("widthdrawBtn");
widthdrawBtn.addEventListener("click", function () {
    const widthdrawBalance = document.getElementById("widthdrawBalance").value;
    widthdrawBalanceAmount = parseFloat(widthdrawBalance);

    // const currentWidthdraw = document.getElementById("widthdrawAmount").innerText;
    // curretnWidthdrawNumber = parseFloat(currentWidthdraw);
    // const totalWidthdrawAmount = widthdrawBalanceAmount + curretnWidthdrawNumber;
    // document.getElementById("widthdrawAmount").innerText = totalWidthdrawAmount;

    updateSpanText("widthdrawAmount", widthdrawBalanceAmount);

    // const totalBalance = document.getElementById("currentBalance").innerText
    // const totalBalanceNumber = parseFloat(totalBalance);
    // const totalBalanceAmount = totalBalanceNumber - widthdrawBalanceAmount;
    // document.getElementById("currentBalance").innerText = totalBalanceAmount;

    updateSpanText("currentBalance", -1 * widthdrawBalanceAmount);

    document.getElementById("widthdrawBalance").value = "";

    graphShow();

})

function updateSpanText(id1, depositNumber) {
    const current = document.getElementById(id1).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id1).innerText = totalAmount;
}

function graphShow(){
    const deposite = document.getElementById('currentDeposit').innerText;
    const depositFloat = parseFloat(deposite);
    const widthdraw = document.getElementById('widthdrawAmount').innerText;
    const widthdrawFloat = parseFloat(widthdraw);
    const total = document.getElementById('currentBalance').innerText;
    const totalFloat = parseFloat(total);

    var xValues = ["Deposit", "Withdraw", "Balance"];
    var yValues = [depositFloat, widthdrawFloat, totalFloat];
    var barColors = ["red", "green", "blue", "orange", "brown"];

    new Chart("myChart", {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues
            }]
        },
        options: {
            legend: { display: false },
            title: {
                display: true,
                text: "Pioneeor Bank Statement 2022"
            }
        }
    });
}