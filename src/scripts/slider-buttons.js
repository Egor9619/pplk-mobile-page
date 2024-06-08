let items = document.querySelectorAll('.slider .item');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    
    // Индекс текущего активного слайда
    let active = 2;
    function loadShow(){
        // Текущая страница слайдера
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // Следующая страница слайдера
        for(var i = active + 1; i < items.length; i++){
            stt++;
            items[i].style.transform = `translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            // Если слайд не является соседним по отношению к активному
            // К нему применяется opacity: 0, иначе opacity: 0.6 
            items[i].style.opacity = stt > 2 ? 1 : 0.6;
        }
        stt = 0;

        // Предыдущая страница слайдера
        for(var i = active - 1; i >= 0; i--){
            stt++;
            items[i].style.transform = `translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(5px)';
            // Если слайд не является соседним по отношению к активному
            // К нему применяется opacity: 0, иначе opacity: 0.6 
            items[i].style.opacity = stt > 2 ? 0.6 : 1;
        }
    }
    loadShow();
    next.onclick = function(){
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }