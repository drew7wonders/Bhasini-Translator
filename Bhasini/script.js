const button = document.getElementById("submit");
const input_lang = document.getElementById("slct-inp");
const output_lang = document.getElementById("slct-out");
const inp_area = document.getElementById("input-area");
const output_area = document.getElementById("output-area");

const apiKey = 'xoxQuduNRtWVu5mKsOB0dOXHEdf6xd5Wun2FCCHKT_gNwfL-VLNS9n2EOyPvtlP6'; // Replace with your actual API key
console.log(input_lang.value);

button.addEventListener("click", () => {
    const sourceLanguage = input_lang.value;
    const targetLanguage = output_lang.value;
    const textToTranslate = inp_area.value;

    const requestData = {
        source: sourceLanguage,
        content: textToTranslate,
        target: targetLanguage
    };
    console.log(requestData);
  // ...

    fetch('https://bhashiniproject.up.railway.app/translate', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
    })
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("output-area").innerText = data.translated_content;
    })
    .catch(error => {
        console.error(error);
    });

});