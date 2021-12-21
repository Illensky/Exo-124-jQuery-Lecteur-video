// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').first();
let progress = $('.progress').first();
const playerbtn = $('.toggle')
console.log(playerbtn.text())
playerbtn.click(function () {

    if (playerbtn.text() === "►") {
        playerbtn.text("⏸")
        player.get(0).play()
    } else {
        playerbtn.text("►")
        player.get(0).pause()
    }
})

const progressBar = document.createElement("div")
progress[0].appendChild(progressBar)
progressBar.style.height = "80%"
progressBar.style.backgroundColor = "white"

player.get(0).addEventListener("timeupdate", function () {
    progressBar.style.width = ((player.get(0).currentTime / 596) * 100).toString() + "%"
})