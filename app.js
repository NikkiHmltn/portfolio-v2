$(document).ready(()=> {
    $(window).scroll(() => {
        if(window.scrollY > 100) {
            $(".nav-container").addClass("fixed-nav")
                    } else {
            $(".nav-container").removeClass("fixed-nav")
        }
    })
})