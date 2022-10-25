const replaceImages = () => {
    let imgs = document.body.getElementsByTagName('img')
    console.log(imgs)
    for (let i = imgs.length -1; i >=0; i--){
        let image = imgs[i]
        console.log(image);
        if (image.alt){
            let text = document.createTextNode(image.alt);
            image.parentNode.replaceChild(text,image)
        }
    }
}