(function () {
    class AndAnotherOne {

        /** @type {HTMLButtonElement} */
        static #moar = null;

        /** @returns {string} "Bottom-Right" | "Bottom-Left" | "Top-Right" | "Top-Left" */
        static #parseCorner() {
            const config_floating = document.getElementById("setting_moar_floating");
            return config_floating.querySelector("label.selected")
                .querySelector("span").textContent.trim();
        }

        /** @returns {HTMLButtonElement} */
        static #clone() {
            const btn = document.getElementById("txt2img_upscale");
            const moar = btn.cloneNode(false);
            this.#moar = moar;

            moar.textContent = "Upscale";
            moar.id = `${btn.id}_moar`;
            moar.removeAttribute("title");
            moar.style.border = "none";
            moar.onclick = () => { btn.click(); }
            return moar;
        }

        static #butt() {
            const btn = this.#clone();

            btn.style.position = "relative";
            btn.style.minHeight = "2.5em";
            btn.style.width = "60%";
            btn.style.left = "20%";
            btn.style.margin = "1em 0em 0em 0em";

            const tab = document.getElementById("tab_txt2img");
            tab.appendChild(btn);
        }

        static #result() {
            const btn = this.#clone();

            btn.style.position = "relative";
            btn.style.minHeight = "2.5em";
            btn.style.width = "80%";
            btn.style.left = "10%";

            const box = document.getElementById("txt2img_results");
            box.appendChild(btn);
        }

        static #fixed() {
            const btn = this.#clone();
            const corner = this.#parseCorner();

            btn.style.position = "fixed";
            btn.style.minHeight = "4em";
            btn.style.zIndex = "420";
            btn.style.width = "8em";

            if (corner.includes("Bottom"))
                btn.style.bottom = "2em";
            else
                btn.style.top = "2em";

            if (corner.includes("Right"))
                btn.style.right = "2em";
            else
                btn.style.left = "2em";

            const tab = document.getElementById("tab_txt2img");
            tab.append(btn);
        }

        static init() {
            this.#moar?.remove();

            const config_upscale = document.getElementById("setting_moar_upscale");
            /** @type {string}: "Off" | "Bottom" | "Result" | "Floating" */
            const mode_upscale = config_upscale.querySelector("label.selected")
                .querySelector("span").textContent.trim();

            if (mode_upscale === "Off")
                return;

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

            const interrupt = document.getElementById("txt2img_interrupt");
            onAfterUiUpdate(() => {
                if (uiElementIsVisible(interrupt))
                    this.#moar.style.visibility = "hidden";
                else
                    this.#moar.style.visibility = "unset";
            });
        }

    }

    onUiLoaded(() => {
        AndAnotherOne.init();
        document.getElementById("settings_submit")
            .addEventListener("click", () => { AndAnotherOne.init(); });
    });
})();
