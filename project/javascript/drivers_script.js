const imageOut1 = document.querySelector('.drivers_img1');
const imageOut2 = document.querySelector('.drivers_img2');
const imageOut3 = document.querySelector('.drivers_img3');
const driverName = document.querySelector('.name_info');
const driverTeam = document.querySelector('.team_info');
const driverCountry = document.querySelector('.country_info');
const driverWins = document.querySelector('.wins_info');
const driverExpirience = document.querySelector('.experience_info');
const driverChampionships = document.querySelector('.championships_info')
const driverDebut = document.querySelector('.debut_info')
// объявлены все необходимые переменны, в которые записаны данные
let k = 1;
// оформление сайта, добавление новых элементов(изображений) на веб-страницу
for (let key in driver_images){
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.classList = 'photo_drivers'
    img.src = 'media/images/drivers2022/'+key+'.jpg';
    if(k%2 == 0){
        imageOut1.append(img)
    }
    else{
        imageOut2.append(img)
    }
    k++;
}
// обработчик события клика на картинку
imageOut1.addEventListener('click', showInfo);
imageOut2.addEventListener('click', showInfo);
let l = true;
function showInfo(){
    const key = event.target.dataset['key']
    if (key == undefined){
        return true;
    }
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.classList = 'photo_drivers'
    img.id = 'center'
    img.src = 'media/images/drivers2022/'+key+'.jpg';
    if(l){
        // 1 добавление элемента
        img.id = 'center'
        imageOut3.append(img)
        let img_block = img;
        l = false;
        document.getElementById('p1').style = "visibility: visible;"
        document.getElementById('p2').style = "visibility: visible;"
        document.getElementById('p3').style = "visibility: visible;"
        document.getElementById('p4').style = "visibility: visible;"
        document.getElementById('p5').style = "visibility: visible;"
    }
    else{
        //последующие добовления
        document.getElementById('center').src = 'media/images/drivers2022/'+key+'.jpg';
    }
    // заполнение данных
    driverName.textContent = driver_images[key]['name']
    driverTeam.textContent = driver_images[key]['team']
    driverCountry.textContent = driver_images[key]['country']
    driverWins.textContent = driver_images[key]['win']
    driverExpirience.textContent = driver_images[key]['experience']
    driverChampionships.textContent = driver_images[key]['championships']
    driverDebut.textContent = driver_images[key]['Debut']
}