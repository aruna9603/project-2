const textarea = document.getElementById("textarea");
const count = document.getElementById("count");
const error = document.querySelector(".error");

const maxChars = 200;

textarea.addEventListener("input", function () {

    let textLength = textarea.value.length;

    // limit exceed aana
    if (textLength > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
        error.innerText = "Maximum 200 characters only!";
        error.style.color = "red";
        alert("You can type only 200 characters");
    } else {
        error.innerText = "";
    }

    // live count update
    count.innerText = `${textarea.value.length}/${maxChars} characters`;
});
