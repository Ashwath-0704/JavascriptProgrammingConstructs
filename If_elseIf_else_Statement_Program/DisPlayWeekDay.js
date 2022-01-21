
// Read a Number and Display the week day (Sunday, Monday,...)

function findTheWeekDayIF_ELSE_IF_Statement(DateNew) {

    let date = new Date(DateNew);
    let day = date.getDay();

    if (day === 0) {
        console.log("Sunday");
    } else if (day == 1) {
        console.log("Monday");
    } else if (day == 2) {
        console.log("Tuesday");
    } else if (day == 3) {
        console.log("Wednesday");
    } else if (day == 4) {
        console.log("Thursday");
    } else if (day == 5) {
        console.log("Friday");
    } else if (day == 6) {
        console.log("Saturday");
    }

}

findTheWeekDayIF_ELSE_IF_Statement("2022,01,21");