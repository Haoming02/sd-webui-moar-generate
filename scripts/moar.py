from modules import script_callbacks, shared
import gradio as gr


def add_ui_settings():
    shared.opts.add_option(
        "moar_generate",
        shared.OptionInfo(
            "Bottom",
            "Position of the 2nd Generate Button",
            gr.Radio,
            lambda: {"choices": ["Bottom", "Result", "Floating"]},
            section=("ui", "User interface"),
        ).needs_reload_ui(),
    )


script_callbacks.on_ui_settings(add_ui_settings)
