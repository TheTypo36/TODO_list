var catEle = document.getElementsByClassName('category-label-container');

for (let i of catEle) {
    if (i.innerText === "Work") {
        i.style.backgroundColor = "blue";
    } else if (i.innerText === "Home") {
        i.style.backgroundColor = "orange";

    } else if (i.innerText === "Personal") {
        i.style.backgroundColor = "cyan";
    }
}

$('textarea').autoresize();