$(function(){ // в начале каждого js файла
    var header = $("#header");
    var introH = $("#intro").innerHeight(); // переменная в которую сохраняем высоту интро блока
    var scrollOffset = $(window).scrollTop(); // закидываем в переменную текущий скрол страницы
    checkScroll(scrollOffset); //только зашли на страницу у нас прогрузился js и отправляется туда scrollOffset
    
    // Fixed Header
    
    $(window).on("scroll", function(){ // это значит когда мы скролим нашу страницу
        scrollOffset = $(this).scrollTop();
        
        checkScroll(scrollOffset);// при скроле будем вызывать эту функцию
        
    });
    
    function checkScroll(scrollOffset){ 
        if(scrollOffset >= introH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
    
    
    // Smooth scroll
    
    $("[data-scroll]").on("click", function(event){ // при клике на элемент где есть атрибут data-scroll
    event.preventDefault(); // отменили стандартное поведение ссылки 
    
    var blockId = $(this).data('scroll'); // вытаскиваем значение из data-scroll
    
    var blockOffset = $(blockId).offset().top; // offset().top - получаем позицию этого элемента от верха страницы 
        
        
        $("html, body").animate({ // метод плавного скрола, 500 - это сколько оно будет милисекунд скролить
            scrollTop:  blockOffset
        }, 500);  
    });
    
    
    /*Menu nav toggle*/
    
    $("#nav_toggle").on("click", function(event){
       event.preventDefault(); // убираем стандартное поведение кнопки
        
        $(this).toggleClass("active"); 
        $("#nav").toggleClass("active");
    });
    
    
    // Collaps
    
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();
        
        var blockId = $(this).data('collapse'); // закидываем в переменную айди элемента на который мы нажали где есть атрибут data-collapse
        
        $(this).toggleClass("active"); // добавляем active к элементу на который нажали
          
    });
    
    
    // Slider
    
    $("[data-slider]").slick({
        infinite: true, // сделали его бесконечным
        fade: false, 
        slidesToShow: 1, // сколько слайдов показывать
        slidesToScroll: 1 // сколько слайдов скролить
        
    });
    
});