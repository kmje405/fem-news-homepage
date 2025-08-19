const viewportDisplay = document.querySelector(".debug")

const viewportWidth = window.innerWidth;

if (viewportWidth < 768) {
    viewportDisplay.innerHTML = `<p>Mobile: ${viewportWidth}</p>`;
    elseif (viewportWidth < 1200 ){
        viewportDisplay.innerHTML = `<p>Tablet: ${viewportWidth}</p>`;
    }else (viewportDisplay > 1200) {
        viewportDisplay.innerHTML = `<p>Desktop: ${viewportWidth}</p>`;

    }
}