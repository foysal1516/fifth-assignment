function showASectionById(id) {
    document.getElementById('cart-container').classList.add('hidden');
    document.getElementById('history-container').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function calculationForDonateBtn(donateAmount, donateBalance, event) {
    const mainBalance = document.getElementById('main-balance').innerText;
    const mainBalanceNumber = parseFloat(mainBalance);
    const donateAmountText = document.getElementById(donateAmount).value;
    const donateAmountNumber = parseFloat(donateAmountText)
    const donateBalanceText = document.getElementById(donateBalance).innerText;
    const donateBalanceNumber = parseFloat(donateBalanceText);

    if (isNaN(donateAmountNumber) || donateAmountNumber > mainBalanceNumber || donateAmountNumber < 1) {
        alert('Invalid input.pls try again')
        // hide modal
        document.getElementById('modal').classList.add('hidden')
        return;
    }
    else {
        const remainingBalance = mainBalanceNumber - donateAmountNumber;
        const totalDonateBalane = donateAmountNumber + donateBalanceNumber;

        document.getElementById('main-balance').innerText = remainingBalance;
        document.getElementById(donateBalance).innerText = totalDonateBalane;
        document.getElementById(donateAmount).value = '';

        // show modal
        const cardHeadText = event.target.parentNode.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.previousSibling.innerText
        document.getElementById('donate-title').innerText = cardHeadText;
        document.getElementById('modal').classList.remove('hidden')

        // set the donate history

        const historyContainer = document.getElementById('history-container');
        const div = document.createElement('div');
        div.classList.add('p-5', 'border-2', 'rounded-md', 'mb-3');
        div.innerHTML = `
        <h3 class="text-2xl font-bold p-3">${donateAmountNumber + " " + cardHeadText}</h3>
        <p class="px-3">${new Date()}</p>
        `
        historyContainer.appendChild(div)


    }


}