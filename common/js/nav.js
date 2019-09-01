(function(document,jquery){
    console.log(document)
    console.log(jquery)
        var openTrigger = '.js-menu-button',
            isOpen = false;
    
    function toggleMenu(state){
        event.preventDefault();
        var jsNav = jquery('.js-nav');
        if(state){
            jsNav.removeClass('closed').addClass('open')
        } else {
            jsNav.removeClass('open').addClass('closed')
        }
    }

    jquery('.js-menu-button').click(function(event){
        toggleMenu(true)
    })

    jquery('.js-close-menu').click(function(event){
        toggleMenu(false)
    })
})(document,$);