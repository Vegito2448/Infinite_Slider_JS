'use strict'
window.addEventListener('DOMContentLoaded', (event) => {
    // declarando objetos de uso
    const thumbnails=document.querySelectorAll('.thumbnail'),
          slider=document.querySelector('#slider'),
          prev=document.querySelector('#prev'),
          next=document.querySelector('#next'),
        
          //scroll maximo que puede hacerse a la izquierda
          maxScrollLeft=((slider.scrollWidth)-(slider.clientWidth));
    
    // Al hacer click en la flecha izquierda manipula la propiedad de scroll
    prev.addEventListener('click',()=>{
        /* has scroll a la izquierda, establece el número de píxeles
        que desplaza el contenido de un elemento hacia la izquierda. */
        slider.scrollLeft-=125;//desplaza 125px al hacer click
    });

    // Al hacer click en la flecha derecha
    next.addEventListener('click',()=>{
        // has scroll a la izquierda
        slider.scrollLeft+=125;
    });

    // Funcion de auto reproduccion del slider y devuelta al incio
    function autoPlay(){
        if(slider.scrollLeft>(maxScrollLeft-1)){
            slider.scrollLeft-=maxScrollLeft;
        }else{
            slider.scrollLeft+=1;
        }
    }
    
    // ejecuta la funcion cada 50ms
    let play=setInterval(autoPlay,50);

    // Pausar SLIDER en hover
    for (let i = 0; i < thumbnails.length; i++) {
        //recorre todas las miniaturas
        thumbnails[i].addEventListener('mouseover',()=>{
            // limpia el intervalo(setInterval) que lleva para detener la reproduccion en hover
            clearInterval(play);
        });
        thumbnails[i].addEventListener('mouseout',()=>{
            // limpia el intervalo(setInterval) que lleva para detener la reproduccion en hover
            return play=setInterval(autoPlay,50);
        });
        
    }
})