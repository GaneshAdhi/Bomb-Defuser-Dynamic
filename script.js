let inputEl = document.getElementById("defuser");

let para = document.getElementById("timer");

let count = 10;

let interValId = setInterval(function() {
    count -= 1;
    para.textContent = count;
    if (count === 0) {
        para.textContent = "Boom";
        clearInterval(interValId);
    }


}, 1000);




inputEl.addEventListener("keydown", function(event) {
    let bombDefureText = inputEl.value;



    if (bombDefureText === "defuse" && event.key === "Enter" && count !== 0) {
        para.textContent = "You did it!";
        clearInterval(interValId);
    }
})
