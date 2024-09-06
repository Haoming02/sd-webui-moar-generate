from modules.script_callbacks import on_ui_settings
from modules.shared import OptionInfo, opts
from gradio import Radio


def add_settings():
    section = ("moar", "Moar Generate")

    opts.add_option(
        "moar_generate",
        OptionInfo(
            "Off",
            "Position of the extra Generate button",
            Radio,
            lambda: {"choices": ("Off", "Bottom", "Result", "Floating")},
            section=section,
            category_id="ui",
        ),
    )

    opts.add_option(
        "moar_upscale",
        OptionInfo(
            "Off",
            "Position of the extra Upscale button",
            Radio,
            lambda: {"choices": ("Off", "Bottom", "Result", "Floating")},
            section=section,
            category_id="ui",
        ).info("for txt2img"),
    )

    opts.add_option(
        "moar_floating",
        OptionInfo(
            "Bottom-Right",
            "Floating Corner",
            Radio,
            lambda: {
                "choices": ("Bottom-Right", "Bottom-Left", "Top-Right", "Top-Left")
            },
            section=section,
            category_id="ui",
        ),
    )


on_ui_settings(add_settings)
