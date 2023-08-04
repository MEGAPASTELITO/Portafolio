const img = document.querySelectorAll('.img');

const buyFullImg = (id) =>{
    const  container = document.createElement('div');
    const  close = document.createElement('div');
    const  img = document.createElement('img');

    container.classList.add('bg-full');
    close.classList.add('close');
    img.classList.add('img-full');

    img.src = `img/${id+1}.png`;

    container.appendChild(close);
    container.appendChild(img);

    close.addEventListener('click',()=>{
        document.body.removeChild(container);
    })

    container.addEventListener('click',()=>{
        document.body.removeChild(container);
    })

    document.body.appendChild(container);
}

for (let i = 0;i <img.length;i++){
    img[i].addEventListener('click',()=>{
        buyFullImg(i);
    })
}