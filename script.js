document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const diners = document.getElementById('diners').value;

    alert(`Reservation confirmed for ${name} on ${date} at ${time} for ${diners} diner(s).`);
});
