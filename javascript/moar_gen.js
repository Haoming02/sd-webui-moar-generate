class AnotherOne {

    static #Tabs = ['txt2img', 'img2img', 'extras'];

    /** @returns {string} "Bottom-Right" | "Bottom-Left" | "Top-Right" | "Top-Left" */
    static parseCorner() {
        const config_floating = document.getElementById("setting_moar_floating");
        return config_floating.querySelector("label.selected")
            .querySelector("span").textContent.trim();
    }

    /** @param {string} mode @returns {HTMLButtonElement} */
    static #clone(mode) {
        const generate = document.getElementById(`${mode}_generate`);
        const moar = generate.cloneNode(false);

        moar.textContent = 'Generate';
        moar.id = `${generate.id}_moar`;
        moar.removeAttribute("title");
        moar.onclick = () => { generate.click(); }

        return moar;
    }

    static #butt() {
        this.#Tabs.forEach((mode) => {
            const btn = this.#clone(mode);

            btn.style.position = 'relative';
            btn.style.minHeight = '2.5em';
            btn.style.width = '60%';
            btn.style.left = '20%';
            btn.style.margin = '1em 0em 0em 0em';

            const tab = document.getElementById(`tab_${mode}`);
            tab.appendChild(btn);
        });
    }

    static #result() {
        this.#Tabs.forEach((mode) => {
            const btn = this.#clone(mode);

            btn.style.position = 'relative';
            btn.style.minHeight = '2.5em';
            btn.style.width = '80%';
            btn.style.left = '10%';

            const box = document.getElementById(`${mode}_results`);
            box.appendChild(btn);
        });
    }

    static #fixed() {
        this.#Tabs.forEach((mode) => {
            const btn = this.#clone(mode);

            btn.style.position = 'fixed';
            btn.style.minHeight = '4em';
            btn.style.zIndex = '69420';
            btn.style.width = '8em';

            const corner = this.parseCorner();

            if (corner.includes("Bottom"))
                btn.style.bottom = '6em';
            else
                btn.style.top = '6em';

            if (corner.includes("Right"))
                btn.style.right = '4em';
            else
                btn.style.left = '4em';

            const tab = document.getElementById(`tab_${mode}`);
            tab.append(btn);
        });
    }

    /** "Off" | "Bottom" | "Result" | "Floating" */
    static init() {

        this.#Tabs.forEach((mode) => {
            const moar = document.getElementById(`${mode}_generate_moar`);
            moar?.remove();
        });

        const config_generate = document.getElementById("setting_moar_generate");
        const mode_generate = config_generate.querySelector("label.selected")
            .querySelector("span").textContent.trim();

        switch (mode_generate) {
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

onUiLoaded(() => {
    AnotherOne.init();

    document.getElementById("settings_submit").addEventListener("click", () => {
        AnotherOne.init();
        AndAnotherOne.init();
    });
});
