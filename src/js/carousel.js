const banner = document.querySelector('#banner')

const imagenes = ['../src/assets/bg.jpg', 
                    '../src/assets/bg2.jpg', 
                    '../src/assets/bg3.jpg', 
                    '../src/assets/bg4.jpg', 
                    '../src/assets/bg5.jpg', 
                    '../src/assets/bg6.jpg', 
                    '../src/assets/bg7.jpg', 
                    '../src/assets/bg8.jpg', 
                    '../src/assets/bg9.jpg', 
                    '../src/assets/bg10.jpg',
]

// Fn para rotar las imagenes cada 4 segundos

let index = 0

const rotateImg = () => {
    const bannerImg = imagenes.filter(img => imagenes)
        index++
        if(index === bannerImg.length)
            index = 0
            banner.src = imagenes[index]
    }

setInterval(() => {
    rotateImg()
}, 4000);

