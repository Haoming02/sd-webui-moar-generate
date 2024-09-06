class AndAnotherOne {

    /** @returns {HTMLButtonElement} */
    static #clone() {
        const generate = document.getElementById("txt2img_upscale");
        const moar = generate.cloneNode(false);

        moar.textContent = 'Upscale';
        moar.id = `${generate.id}_moar`;
        moar.removeAttribute("title");
        moar.onclick = () => { generate.click(); }

        return moar;
    }

    static #butt() {
        const btn = this.#clone();

        btn.style.position = 'relative';
        btn.style.minHeight = '2.5em';
        btn.style.width = '60%';
        btn.style.left = '20%';
        btn.style.margin = '1em 0em 0em 0em';

        const tab = document.getElementById("tab_txt2img");
        tab.appendChild(btn);
    }

    static #result() {
        const btn = AndAnotherOne.#clone();

        btn.style.position = 'relative';
        btn.style.minHeight = '2.5em';
        btn.style.width = '80%';
        btn.style.left = '10%';

        const box = document.getElementById("txt2img_results");
        box.appendChild(btn);
    }

    static #fixed() {
        const btn = AndAnotherOne.#clone();

        btn.style.position = 'fixed';
        btn.style.minHeight = '4em';
        btn.style.zIndex = '69420';
        btn.style.width = '8em';

        const corner = AnotherOne.parseCorner();

        if (corner.includes("Bottom"))
            btn.style.bottom = '2em';
        else
            btn.style.top = '2em';

        if (corner.includes("Right"))
            btn.style.right = '4em';
        else
            btn.style.left = '4em';

        const tab = document.getElementById("tab_txt2img");
        tab.append(btn);
    }

    /** "Off" | "Bottom" | "Result" | "Floating" */
    static init() {

        const moar = document.getElementById("txt2img_upscale_moar");
        moar?.remove();

        const config_upscale = document.getElementById("setting_moar_upscale");
        const mode_upscale = config_upscale.querySelector("label.selected")
            .querySelector("span").textContent.trim();

        switch (mode_upscale) {
            case "Bottom":
                this.#butt();
                break;
            case "Result":
                this.#result();
                break;
            case "Floating":
                this.#fixed();
                break;
        }

    }

}

onUiLoaded(() => { AndAnotherOne.init(); });
