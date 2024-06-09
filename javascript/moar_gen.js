class AndAnotherOne {

    /**
     * @param mode string
     */
    static clone(mode) {
        const generate = document.getElementById(mode + '_generate')
        const btn = generate.cloneNode()
        btn.innerHTML = 'Generate'
        btn.id = ''

        btn.addEventListener('click', () => {
            generate.dispatchEvent(new Event('click'))
        })

        return btn
    }

    static butt() {
        ['txt2img', 'img2img', 'extras'].forEach((mode) => {
            const btn = AndAnotherOne.clone(mode)

            btn.style.position = 'relative'
            btn.style.minHeight = '2.5em'
            btn.style.width = '60%'
            btn.style.left = '20%'
            btn.style.margin = '1em 0px 0px 0px'

            const tab = document.getElementById('tab_' + mode)
            tab.appendChild(btn)
        })
    }

    static result() {
        ['txt2img', 'img2img', 'extras'].forEach((mode) => {
            const btn = AndAnotherOne.clone(mode)

            btn.style.position = 'relative'
            btn.style.minHeight = '2.5em'
            btn.style.width = '80%'
            btn.style.left = '10%'

            const box = document.getElementById(mode + '_results')
            box.appendChild(btn)
        })
    }

    static fixed() {
        ['txt2img', 'img2img', 'extras'].forEach((mode) => {
            const btn = AndAnotherOne.clone(mode)

            btn.style.position = 'fixed'
            btn.style.minHeight = '4em'
            btn.style.width = '8em'
            btn.style.right = '3em'
            btn.style.bottom = '6em'
            btn.style.zIndex = '5000'

            const tab = document.getElementById('tab_' + mode)
            tab.append(btn)
        })
    }

}

(typeof onUiLoadedReady !== 'undefined' ? onUiLoadedReady : onUiLoaded)(async () => {
    // 0: Bottom ; 1: Result ; 2: Floating
    const config = gradioApp().getElementById('setting_moar_generate').querySelectorAll('label')
    let option = -1;

    for (let i = 0; i < 3; i++) {
        if (config[i].classList.contains('selected')) {
            option = i;
            break;
        }
    }

    switch (option) {
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
