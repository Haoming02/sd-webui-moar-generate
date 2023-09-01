class Butt {

    static Modes = ['txt', 'img']

    static main() {
        this.Modes.forEach((mode) => {
            const generate = document.getElementById(mode + '2img_generate')
            const tab = document.getElementById('tab_' + mode + '2img')

            const btn = generate.cloneNode()

            btn.addEventListener('click', () => {
                generate.dispatchEvent(new Event('click'))
            })

            btn.innerHTML = 'Generate'
            btn.style.width = '100%'

            tab.appendChild(btn)
        })
    }
}

onUiLoaded(async () => {
    Butt.main()
})
