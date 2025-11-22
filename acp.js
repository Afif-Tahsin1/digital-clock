function updateCalender(){
    const date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
    const day  = days[date.getDay()];
    const month_date = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    document.getElementById("day").textContent = `${day}`;
    document.getElementById("date").textContent = `${month_date}`;
    document.getElementById("month-year").textContent = `${month} ${year}`;

}

updateCalender()