// 프로젝트 페이지 책갈피 효과
class FolderScroll {
    constructor(wrapper, sticky) {
        this.wrapper = wrapper
        this.sticky = sticky
        this.children = this.sticky.querySelectorAll('.section')
        this.length = this.children.length
        this.headerVh = 6
        this.contentVh = 92 - this.headerVh * this.length
        this.start = 0
        this.end = 0
    }

    init() {
        this.start = this.wrapper.offsetTop + 100
        this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight - 100

        this.children.forEach((child, i) => {
            child.style.bottom = -(100 - this.headerVh * (this.length - i)) + 'vh'
            child.querySelector('.title').style.height = this.headerVh + 'vh'
            child.querySelector('.content').style.height = this.contentVh + 'vh'
        })
    }

    animate() {
        this.children.forEach((child, i) => {
            const unit = (this.end - this.start) / this.length
            const s = this.start + unit * i + 100
            const e = this.start + unit * (i + 1)

            if (scrollY <= s) {
                child.style.transform = `translate3d(0, 0, 0)`
            } else if (scrollY >= e) {
                child.style.transform = `translate3d(0, ${-this.contentVh}%, 0)`
            } else {
                child.style.transform =
                    `translate3d(0, ${(scrollY - s) / (unit - 100) * (-this.contentVh)}%, 0)`
            }
        })
    }
}

const mainContent1 = document.querySelector('.main-content-1')
const sticky = document.querySelector('.sticky')
const folderScroll = new FolderScroll(mainContent1, sticky)
folderScroll.init()

window.addEventListener('resize', () => {
    folderScroll.init()
})
window.addEventListener('scroll', () => {
    folderScroll.animate()
})