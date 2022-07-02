let count = 0;

const value = document.querySelector("#value");
console.log("value: ", value);
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
            value.innerHTML = count;
        }else if (styles.contains("increase")) {
            count++;
            value.innerHTML = count;
        }else {
            count = 0;
            value.innerHTML = count;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "#222";
        }
    });
});