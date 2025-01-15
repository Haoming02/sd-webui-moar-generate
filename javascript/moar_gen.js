(function () {
    class AnotherOne {

        /** @returns {string} "Bottom-Right" | "Bottom-Left" | "Top-Right" | "Top-Left" */
        static #parseCorner() {
            const config_floating = document.getElementById("setting_moar_floating");
            return config_floating.querySelector("label.selected")
                .querySelector("span").textContent.trim();
        }

        /** @param {string} mode @returns {HTMLButtonElement} */
        static #clone(mode) {
            const generate = document.getElementById(`${mode}_generate`);
            const interrupt = document.getElementById(`${mode}_interrupt`);
            const moar = generate.cloneNode(false);

            moar.textContent = "Generate";
            moar.id = `${generate.id}_moar`;
            moar.removeAttribute("title");
            moar.style.border = "none";
            moar.onclick = () => {
                if (moar.textContent === "Interrupt")
                    interrupt.click();
                else
                    generate.click();
            }
            return moar;
        }

        /** @param {HTMLButtonElement} btn @param {string} mode */
        static #butt(btn, mode) {
            btn.style.position = "relative";
            btn.style.minHeight = "2.5em";
            btn.style.width = "60%";
            btn.style.left = "20%";
            btn.style.margin = "1em 0em 0em 0em";

            const tab = document.getElementById(`tab_${mode}`);
            tab.appendChild(btn);
        }

        /** @param {HTMLButtonElement} btn @param {string} mode */
        static #result(btn, mode) {
            btn.style.position = "relative";
            btn.style.minHeight = "2.5em";
            btn.style.width = "80%";
            btn.style.left = "10%";

            const box = document.getElementById(`${mode}_results`);
            box.appendChild(btn);
        }

        /** @param {HTMLButtonElement} btn @param {string} mode */
        static #fixed(btn, mode) {
            const corner = this.#parseCorner();

            btn.style.position = "fixed";
            btn.style.minHeight = "4em";
            btn.style.zIndex = "420";
            btn.style.width = "8em";

            if (corner.includes("Bottom"))
                btn.style.bottom = "6em";
            else
                btn.style.top = "6em";

            if (corner.includes("Right"))
                btn.style.right = "2em";
            else
                btn.style.left = "2em";

            const tab = document.getElementById(`tab_${mode}`);
            tab.append(btn);
        }

        static init() {
            for (const mode of ["txt2img", "img2img", "extras"]) {
                const prev = document.getElementById(`${mode}_generate_moar`);
                prev?.remove();

                const config_generate = document.getElementById("setting_moar_generate");
                /** @type {string} - "Off" | "Bottom" | "Result" | "Floating" */
                const mode_generate = config_generate.querySelector("label.selected")
                    .querySelector("span").textContent.trim();

                if (mode_generate === "Off")
                    return;

                const btn = this.#clone(mode);
                switch (mode_generate) {
                    case "Bottom":
                        this.#butt(btn, mode);
                        break;
                    case "Result":
                        this.#result(btn, mode);
                        break;
                    case "Floating":
                        this.#fixed(btn, mode);
                        break;
                }

                const interrupt = document.getElementById(`${mode}_interrupt`);
                onAfterUiUpdate(() => {
                    if (uiElementIsVisible(interrupt)) {
                        btn.textContent = "Interrupt";
                        btn.style.background = getComputedStyle(interrupt).background;
                    }
                    else {
                        btn.textContent = "Generate";
                        btn.style.background = "";
                    }
                });
            }
        }

    }

    onUiLoaded(() => {
        AnotherOne.init();
        document.getElementById("settings_submit")
            .addEventListener("click", () => { AnotherOne.init(); });
    });
})();
