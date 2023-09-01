class AndAnotherOne {

    static Modes = ['txt', 'img']

    // === SETTING ===
    static option = 0 // 0: Bottom ; 1: Result ; 2: Floating
    // === SETTING ===

    static butt() {
        this.Modes.forEach((mode) => {
            const generate = document.getElementById(mode + '2img_generate')
            const tab = document.getElementById('tab_' + mode + '2img')

            const btn = generate.cloneNode()

            btn.addEventListener('click', () => {
                generate.dispatchEvent(new Event('click'))
            })

            btn.innerHTML = 'Generate'

            btn.style.position = 'relative'
            btn.style.minHeight = '2.5em'
            btn.style.width = '60%'
            btn.style.left = '20%'
            btn.style.margin = '1em 0px 0px 0px'

            tab.appendChild(btn)
        })
    }

    static result() {
        this.Modes.forEach((mode) => {
            const generate = document.getElementById(mode + '2img_generate')
            const box = document.getElementById(mode + '2img_results')

            const btn = generate.cloneNode()

            btn.addEventListener('click', () => {
                generate.dispatchEvent(new Event('click'))
            })

            btn.innerHTML = 'Generate'

            btn.style.position = 'relative'
            btn.style.minHeight = '2.5em'
            btn.style.width = '80%'
            btn.style.left = '10%'

            box.appendChild(btn)
        })
    }

    static fixed() {
        this.Modes.forEach((mode) => {
            const generate = document.getElementById(mode + '2img_generate')
            const tab = document.getElementById('tab_' + mode + '2img')

            const btn = generate.cloneNode()

            btn.addEventListener('click', () => {
                generate.dispatchEvent(new Event('click'))
            })

            btn.innerHTML = 'Generate'

            btn.style.position = 'fixed'
            btn.style.minHeight = '4em'
            btn.style.width = '8em'
            btn.style.right = '3em'
            btn.style.bottom = '6em'

            tab.append(btn)
        })
    }
}

onUiLoaded(async () => {
    switch (AndAnotherOne.option) {
        default:
            AndAnotherOne.butt()
            break;
        case 1:
            AndAnotherOne.result()
            break;
        case 2:
            AndAnotherOne.fixed()
            break;
    }
})
