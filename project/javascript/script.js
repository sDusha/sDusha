const imageOut = document.querySelector('.gallery');
for (let key in images){
    let img = document.createElement('img');
    img.setAttribute('data-key', key);
    img.classList = 'photo_gallery'
    img.src = 'media/images/bolide2022/'+key+'.jpg';
    imageOut.append(img)
}