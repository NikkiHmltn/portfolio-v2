$(document).ready(()=> {
    $(window).scroll(() => {
        if(window.scrollY > 300) {
            $(".nav-container").addClass("fixed-nav")
            navbar_height = $("nav").offsetHeight
            $(document).css("padding-top", `${navbar_height} px`)
        } else {
            $(".nav-container").removeClass("fixed-nav")
            $(document).css("padding-top", 0)
        }
    })
})