let date = moment().format("MMM Do, YYYY");
$("#currentDay").text(date);

let currentHour = moment().format("HH")

let timeBlock = $('.container')

let hour = $('.hour')

let textArea = $('textArea')

let pl = document.querySelectorAll("p")

console.log(hour[0])
console.log(currentHour)
console.log(pl)

for (let i = 0; i < array.length; i++) {
    if (hour == currentHour) {
    textArea.css("background-color", "red")
}else if (hour > currentHour) {
    textArea.css("background-color", "green")
}
}

pl[0].id

pl[0].nextSibling.nextElementSibling