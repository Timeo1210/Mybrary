const ratio = 0.1
const options = {
    root: null,
    rootMargin: "0px",
    treshold: ratio,
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            //transition u
            console.log('test')
            entry.target.classList.remove('reveal-translate-X')
            entry.target.classList.remove('reveal-translate-Y')
            entry.target.classList.add('reveal_visible')
            observer.unobserve(entry.target)
            setTimeout(function() {
                entry.target.classList.remove('reveal_visible')
            }, 1000)
        }
    })
}

const observer = new IntersectionObserver(handleIntersect, options)

document.querySelectorAll("[class*='reveal-'").forEach(function (element) {
    observer.observe(element)
})
