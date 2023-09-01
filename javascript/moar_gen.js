class Butt {

    static Modes = ['txt', 'img']

    // === SETTING ===
    static option = 0 // 0: Bottom ; 1: Result
    // === SETTING ===

    static main() {

        this.Modes.forEach((mode) => {
            const generate = document.getElementById(mode + '2img_generate')
            const tab = (this.option === 0) ? document.getElementById('tab_' + mode + '2img') : document.getElementById(mode + '2img_results')

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
