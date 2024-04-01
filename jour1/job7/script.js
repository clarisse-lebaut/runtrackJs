
// faire apparaitre une date
let date = new Date()
console.log(
    new Intl.DateTimeFormat('en-GB').format(date) 
    /* on met GB pour que le format correspondent */
    /* .foramt permet de formater la date */
)

// faire apparaitre les jours de la semaine
let day = new Day()
console.log(
    new Intl.DayTimeFormat('en-GB').format(date)
)