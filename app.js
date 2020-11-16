fetch("https://api.nasa.gov/planetary/apod?api_key=YQcvCrtT07JREAmVX12qSDBfrytYf6pe4hEvlO90")
    .then(response => response.json())
    .then((data) => {
        document.getElementById('title').textContent = data.title
        document.getElementById('date').textContent = data.date
        document.getElementById('picture').src = data.hdurl
        document.getElementById('explanation').textContent = data.explanation
    })

// const url = 'https://api.nasa.gov/planetary/apod?api_key='
// const api_key = config.NASA_API_KEY

// const fetchNASAData = async() => {
//     try {
//         const response = await fetch(`${url}${api_key}`)
//         const data = await response.json()
//         console.log('NASA APOD data', data)
//         displayData(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// const displayData = data => {
//     document.getElementById('title').textContent = data.title
//     document.getElementById('date').textContent = data.date
//     document.getElementById('picture').src = data.hdurl
//     document.getElementById('explanation').textContent = data.explanation
// }

// fetchNASAData()

//--------------- Part II ------------------//
let arrData = []
console.log(arrData)




fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=YQcvCrtT07JREAmVX12qSDBfrytYf6pe4hEvlO90")
    .then(response => response.json())
    .then((data) => {
        for (let i = 0; i < 5; i++) {
            arrData.push(data.photos[i]);
        };
        document.getElementById("picture0").src = arrData[0].img_src;
        document.getElementById("picture1").src = arrData[1].img_src;
        document.getElementById("picture2").src = arrData[2].img_src;
        document.getElementById("picture3").src = arrData[3].img_src;
        document.getElementById("picture4").src = arrData[4].img_src;
        document.getElementById("picture5").src = arrData[5].img_src;
        document.getElementById("picture18").src = arrData[7].img_src;
        document.getElementById("picture19").src = arrData[8].img_src;

    })

fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/spirit/photos?sol=1000&api_key=YQcvCrtT07JREAmVX12qSDBfrytYf6pe4hEvlO90")
    .then(response => response.json())
    .then((data) => {
        for (let i = 0; i < 5; i++) {
            arrData.push(data.photos[i]);
        };
        document.getElementById("picture6").src = arrData[0].img_src;
        document.getElementById("picture7").src = arrData[1].img_src;
        document.getElementById("picture8").src = arrData[2].img_src;
        document.getElementById("picture9").src = arrData[3].img_src;
        document.getElementById("picture10").src = arrData[4].img_src;
        document.getElementById("picture11").src = arrData[4].img_src;

    })

fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/opportunity/photos?sol=1000&api_key=YQcvCrtT07JREAmVX12qSDBfrytYf6pe4hEvlO90")
    .then(response => response.json())
    .then((data) => {
        for (let i = 0; i < 5; i++) {
            arrData.push(data.photos[i]);
        };
        document.getElementById("picture12").src = arrData[0].img_src;
        document.getElementById("picture13").src = arrData[1].img_src;
        document.getElementById("picture14").src = arrData[2].img_src;
        document.getElementById("picture15").src = arrData[3].img_src;
        document.getElementById("picture16").src = arrData[4].img_src;
        document.getElementById("picture17").src = arrData[2].img_src;

    })

// document.getElementById("picture0").src = arrData[0].img_src;
// document.getElementById("picture1").src = arrData[1].img_src;
// document.getElementById("picture2").src = arrData[2].img_src;
// document.getElementById("picture3").src = arrData[3].img_src;
// document.getElementById("picture4").src = arrData[4].img_src;
// document.getElementById("picture5").src = arrData[5].img_src;
// document.getElementById("picture6").src = arrData[6].img_src;
// document.getElementById("picture7").src = arrData[7].img_src;
// document.getElementById("picture8").src = arrData[8].img_src;
// document.getElementById("picture9").src = arrData[9].img_src;
// document.getElementById("picture10").src = arrData[10].img_src;
// document.getElementById("picture11").src = arrData[11].img_src;
// document.getElementById("picture12").src = arrData[12].img_src;
// document.getElementById("picture13").src = arrData[13].img_src;
// document.getElementById("picture14").src = arrData[14].img_src;
// document.getElementById("picture15").src = arrData[15].img_src;
// document.getElementById("picture16").src = arrData[16].img_src;
// document.getElementById("picture17").src = arrData[17].img_src;


console.log(arrData)

const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// Set first img opacity
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
    // Reset the opacity
    img.forEach(img => (img.style.opacity = 1));

    // Change current image to src of clicked image
    current.src = e.target.src;

    // Add fade in class
    current.classList.add('fade-in');

    // Remove fade-in class after .5 seconds
    setTimeout(() => current.classList.remove('fade-in'), 500);

    // Change the opacity to opacity var
    e.target.style.opacity = opacity;
}