let containerEl = document.getElementById("bgContainer");
let hrsInput = document.getElementById("hoursInput");
let minsInput = document.getElementById("minutesInput");
let btnEL = document.getElementById("convertBtn");
let timeInSeconds = document.getElementById("timeInSeconds");
let errMsg = document.getElementById("errorMsg");
let secondsMsg = "Please Enter a Valid number of Hours";
let minutesMsg = "Please Enter a Valid number of minutes"

function convertHrsAndMinutesToSeconds() {
    let hrsInputValue = parseInt(hrsInput.value);
    let minsInputValue = parseInt(minsInput.value);
    let timeInSecond = hrsInputValue * 3600 + minsInputValue * 60;
    if (hrsInput.value === "") {
        errMsg.textContent = secondsMsg;
        errMsg.classList.add("error-msg");
        containerEl.appendChild(errMsg);
    } else if (minsInput.value === "") {
        errMsg.textContent = minutesMsg;
        errMsg.classList.add("error-msg");
        containerEl.appendChild(errMsg);
    } else {
        timeInSeconds.textContent = timeInSecond;
        timeInSeconds.classList.add("seconds-msg");
        containerEl.appendChild(timeInSeconds);

    }
}
btnEL.addEventListener("click", convertHrsAndMinutesToSeconds);