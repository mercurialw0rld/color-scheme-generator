const btnEl = document.getElementById("getScheme");
const colorPickerEl = document.getElementById("colorPicker");
const schemeTypeEl = document.getElementById("schemeType");
const colorsContainerEl = document.getElementById("colorScheme");
const color1 = document.getElementById("1");
const color2 = document.getElementById("2");
const color3 = document.getElementById("3");
const color4 = document.getElementById("4");
const color5 = document.getElementById("5");


// this should run when the dom is loaded

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");
    // Set data-hex attributes for initial colors
    for (let i = 1; i <= 5; i++) {
        const colorDiv = document.getElementById(`${i}`);
        const colorText = document.getElementById(`V${i}`);
        if (colorDiv && colorText) {
            const hex = colorText.innerText.trim();
            colorDiv.setAttribute('data-hex', hex);
        }
    }
});



btnEl.addEventListener("click", function(e){
    e.preventDefault();
    console.log("clicked");
    generateColorScheme();
});

function generateColorScheme() {
    const color = colorPickerEl.value.slice(1);
    const schemeType = schemeTypeEl.value;
    const url = `https://www.thecolorapi.com/scheme?hex=${color}&mode=${schemeType}&count=5`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            let index = 1;
            console.log(data);
            data.colors.forEach(color => {
                const colorDiv = document.getElementById(`${index}`);
                const colorText = document.getElementById(`V${index}`);
                colorDiv.style.backgroundColor = color.hex.value;
                    colorDiv.setAttribute('data-hex', color.hex.value);
                    colorText.innerText = color.hex.value;
                index++;
            });
        });
}


function copyHexColorToClipboard(hexColor) {
    navigator.clipboard.writeText(hexColor).then(function() {
        console.log('Hex color copied to clipboard:', hexColor);
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

// Add event listeners to each color div for copying hex value
color1.addEventListener("click", function() {
    const hex = color1.getAttribute('data-hex') || color1.style.backgroundColor;
    copyHexColorToClipboard(hex);
    alert(`Color ${hex} copied to clipboard!`);
});
color2.addEventListener("click", function() {
    const hex = color2.getAttribute('data-hex') || color2.style.backgroundColor;
    copyHexColorToClipboard(hex);
    alert(`Color ${hex} copied to clipboard!`);
});
color3.addEventListener("click", function() {
    const hex = color3.getAttribute('data-hex') || color3.style.backgroundColor;
    copyHexColorToClipboard(hex);
    alert(`Color ${hex} copied to clipboard!`);
});
color4.addEventListener("click", function() {
    const hex = color4.getAttribute('data-hex') || color4.style.backgroundColor;
    copyHexColorToClipboard(hex);
    alert(`Color ${hex} copied to clipboard!`);
});
color5.addEventListener("click", function() {
    const hex = color5.getAttribute('data-hex') || color5.style.backgroundColor;
    copyHexColorToClipboard(hex);
    alert(`Color ${hex} copied to clipboard!`);
});

