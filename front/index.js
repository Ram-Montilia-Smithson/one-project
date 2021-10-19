const header = document.getElementById("header");
const button = document.getElementById("button");
const section = document.getElementById("section");
const nav = document.getElementById("nav")

            // <li class="li" id="ensurance">ביטוח</li>
            // <li class="li" id="opinions">דעות</li>
            // <li class="li" id="creer">קריירה והשכלה גבוהה</li>

const money = document.getElementById("money")
const news = document.getElementById("news")
const shopping = document.getElementById("shopping")

button.addEventListener("click", getInfo)
news.addEventListener("click", getNews)

async function getNews() {
    await fetch('http://localhost:5000/news')
        .then(response => {
            console.log(response);
            return response.json()
        })
        .then(data => {
            console.log(data)
        });
}

function getInfo() {
    fetch('http://localhost:5000/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            section.innerHTML = `
                <ul>
                    <li>${data.name}</li>
                </ul>
            `
        });
}