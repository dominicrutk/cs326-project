function headerImageSlider() {
    let i = 0
    let slider = document.getElementById('header-slide')
    const header_interval = setInterval(function() {
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

