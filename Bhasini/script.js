const button = document.getElementById("submit");
const input_lang = document.getElementById("slct-inp");
const output_lang = document.getElementById("slct-out");
const inp_area = document.getElementById("input-area");
const output_area = document.getElementById("output-area");

button.addEventListener("click", () => { translate(); });

async function translate() {
    const sourceLanguage = input_lang.value;
    const targetLanguage = output_lang.value;
    const textToTranslate = inp_area.value;

    const requestData = {
        source: sourceLanguage,
        content: textToTranslate,
        target: targetLanguage
    };
    console.log(requestData);

    const response = await fetch('https://bhashiniproject.up.railway.app/translate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    });
    const data = await response.json();
    document.getElementById("output-area").innerText = data.translated_content;
}
