let inputEl = document.getElementById("userInput");
let factText = document.getElementById("fact");
let spinnerEl = document.getElementById("spinner");

function factCheck(event) {
    if (event.key === "Enter") {
        let inputNum = inputEl.value;
        if (inputNum === "") {
            alert("Enter a Number");
            return;
        }
        let url = "https://apis.ccbp.in/numbers-fact?number=" + inputNum;
        let options = {
            method: "GET"
        };
        spinnerEl.classList.remove("d-none");
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(jsonData) {
                spinnerEl.classList.add("d-none");
                let factEl = jsonData;
                factText.textContent = factEl.fact;
            })
    }
}

inputEl.addEventListener("keydown", factCheck);