function initMain(){
    const product_images = document.getElementsByClassName('product-image-base')
    function selectImage(index){
        for(let i = 0; i < product_images.length; i++){
            if(i == index){
                product_images.item(i).classList.add('selected')
            }else{
                product_images.item(i).classList.remove('selected')
            }
        }
    }
    for(let i = 0; i < product_images.length; i++){
        product_images.item(i).addEventListener('click', () => {
            selectImage(i)
        })
    }
}

window.onload = initMain