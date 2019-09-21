$("#menu").change(function() {
    if(this.checked) {
        $(".mobile-menu").toggleClass("visible")
    }
    else {
        $(".mobile-menu").removeClass("visible")
    }
});