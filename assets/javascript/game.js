const buildCrystal = () => {
    const $image = $('<img>');

    $image.addClass("diamond");
    $image.attr("src", "./assets/images/diamond-158431.svg");
    $image.attr("height" , "100px");
    $image.attr("width" , "100px");

    const randomValue = assignRandomValue(12);
    $image.attr("value", randomValue);

    return $image;
}

const assignRandomValue = (maximumValue) => {
    return Math.floor(Math.random() * maximumValue) + 1;
}

const addCrystals = (number) => {
    const $crystals = $('#crystals');

    for (let i =0; i < number; i++) {
        const crystal = buildCrystal();
        $crystals.append(crystal);
    }
}

const setWinningNumber = (maximumValue) => {
    debugger
    const number = assignRandomValue(maximumValue);
    $('#target-number').text(number);
}

const beginGame = () => {
    addCrystals(4);
    setWinningNumber(100, 20);
}

beginGame();