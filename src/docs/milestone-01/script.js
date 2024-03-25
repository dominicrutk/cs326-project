// Setting Header Images on a Slideshow that change every 5 seconds
function headerImageSlider() {
    let i = 0
    let slider = document.getElementById('header-slide')
    // Setting an interval that goes through 3 header images (header0,1,2) every 5 secons
    setInterval(function() {
        if (i >= 0 && i < 2) {
            i++
            slider.src = "image/header" + i + ".jpg"
        }
        else if (i >= 2) {
            i = 0
            slider.src = "image/header" + i + ".jpg"
        }
    }, 5000)
}


// Add Event Listeners
document.getElementById('header-slide').addEventListener('mouseenter', headerImageSlider)

