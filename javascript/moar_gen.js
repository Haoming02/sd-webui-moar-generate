class AndAnotherOne {

    static butt() {
        ['txt2img', 'img2img', 'extras'].forEach((mode) => {
            const generate = document.getElementById(mode + '_generate')
            const tab = document.getElementById('tab_' + mode)

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
        ['txt2img', 'img2img', 'extras'].forEach((mode) => {
            const generate = document.getElementById(mode + '_generate')
            const box = document.getElementById(mode + '_results')

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
        ['txt2img', 'img2img', 'extras'].forEach((mode) => {
            const generate = document.getElementById(mode + '_generate')
            const tab = document.getElementById('tab_' + mode)

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
