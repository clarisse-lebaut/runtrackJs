function generateCalendar(year, month){
    const calendarBody = document.getElementById('corpscalendrier');
    calendarBody.innerHTML = '';

    const daysInMonth = new Date(year, month +1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    let date = 1;
    for (let i = 0; i < 6; i++){
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            }
            else if (date > daysInMonth){
                break;
            }
            else {
                const cell = document.createElement('td');
                cell.textContent = date;
                row.appendChild(cell);
                date++;
            }
        }

        calendarBody.appendChild(row);
    }
}