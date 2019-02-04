function Slider(sSelector){
    var m = this;
    m.slider = $(sSelector);
    m.sliderImg = m.slider.find('.bigImg');
    m.slides = m.slider.find('.slideEl');
    m.prevArrow = m.slider.find('.slider__arrow_prev');
    m.nextArrow = m.slider.find('.slider__arrow_next');
    m.elemsList = m.slider.find('.wrapper');
    m.slidesMax = m.slides.length;
    m.currentSlideValue = 0;
    m.lastSlideValue = -770;
    m.firstSlidevalue = 0;
    m.choosenSlideIndex = m.slides.index(m.slides[0]);
    m.choosenSlideLastIndex = m.slides.index(m.slides[7]);
    m.prevSlideIndex = 0;

    m.showPrev = function(){
        if(m.currentSlideValue != m.firstSlidevalue){
            m.currentSlideValue += 110;
            m.elemsList.animate({left : m.currentSlideValue + 'px'}, 500);
            m.chooseImgPrev();
        }
        else{
            m.currentSlideValue = m.lastSlideValue;
            m.elemsList.animate({left : m.currentSlideValue + 'px'}, 500);
            m.chooseImgPrevFromLast();
        }
    }

    m.showNext = function(){
        if(m.currentSlideValue != m.lastSlideValue){
            m.currentSlideValue -= 110;
            m.elemsList.animate({left : m.currentSlideValue + 'px'}, 500);
            m.chooseImgNext();
        }
        else{
            m.currentSlideValue = 0;
            m.elemsList.animate({left : m.currentSlideValue + 'px'}, 500);
            m.chooseImgNextFromBegin();
        }
    }

    m.chooseImgNext = function(){
        if(m.currentSlideValue != (m.lastSlideValue - 110)){
        m.choosenSlideIndex += 1;
        m.prevSlideIndex = m.choosenSlideIndex - 1;
        m.nextSlide = m.slides.eq(m.choosenSlideIndex);
        m.prevSlide = m.slides.eq(m.prevSlideIndex);
        m.prevSlide.css('border', 'none');
        m.nextSlide.css('border', '1px solid white');
        m.showSlide();
        }
    }

    m.chooseImgNextFromBegin = function(){
        m.choosenSlideIndex = 0;
        m.prevSlideIndex = m.choosenSlideIndex - 1;
        m.prevSlide = m.slides.eq(m.prevSlideIndex);
        m.nextSlide = m.slides.eq(m.choosenSlideIndex);
        m.prevSlide.css('border', 'none');
        m.nextSlide.css('border', '1px solid white');
        m.showSlide();
    }
        
    m.chooseImgPrev = function(){
        if(m.currentSlideValue != (m.firstSlidevalue + 110)){
        m.choosenSlideIndex -= 1;
        m.prevSlideIndex = m.choosenSlideIndex + 1;
        m.nextSlide = m.slides.eq(m.choosenSlideIndex);
        m.prevSlide = m.slides.eq(m.prevSlideIndex);
        m.prevSlide.css('border', 'none');
        m.nextSlide.css('border', '1px solid white');
        m.showSlide(); 
        }
    }

    m.chooseImgPrevFromLast = function(){
        m.choosenSlideIndex = 7;
        m.prevSlideIndex = m.choosenSlideIndex - 1;
        m.prevSlide = m.slides.eq(m.prevSlideIndex);
        m.nextSlide = m.slides.eq(m.choosenSlideIndex);
        m.prevSlide.css('border', 'none');
        m.nextSlide.css('border', '1px solid white');
        m.showSlide();
    }

    m.showSlide = function(){
        var elemToTake = m.slides.eq(m.choosenSlideIndex);
        var imgToTake = elemToTake.children('img');
        /*var bgOfChoosenElement = elemToTake.css('backgroundColor');
        m.slider.css('backgroundColor', bgOfChoosenElement);*/
        var takenSrc = imgToTake.attr('src');
        var srcForBigPic = takenSrc.replace('_small', '');
        m.sliderImg.attr('src', srcForBigPic);
    }

    m.prevArrow.click(m.showPrev);
    m.nextArrow.click(m.showNext);

}