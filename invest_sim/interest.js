let investment_form = document.getElementById('investment');

investment_form.addEventListener('submit', (e) => {
    e.preventDefault();

    let initial_value = parseFloat(document.getElementById("initial_value").value);
    let interest_rate = parseFloat(document.getElementById("interest").value);
    let time_invested = parseFloat(document.getElementById("investment_time").value);

    let final_value = initial_value * ((1 + interest_rate)**time_invested);

    alert(final_value);
});