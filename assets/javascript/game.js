const buildCrystal = () => {
    const $image = $('<img>');

    $image.addClass("diamond");
    $image.attr("src", "");
    $image.attr("src", "./assets/images/diamond-158431.svg");
    $image.attr("height" , "100px");
    $image.attr("width" , "100px");

    const randomValue = assignRandomValue(12);
    $image.attr("data-value", randomValue);
    $image.click(incrementScore);

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
    const number = assignRandomValue(maximumValue);
    $('#target-number').text(number);
}

const beginGame = () => {
    $('#crystals').empty();
    $('#current-score').text('0');
    addCrystals(4);
    setWinningNumber(100, 20);
}

const incrementScore = (event) => {
    // Must use a function declaration because arrow functions don't have their owne `this`
    // event.currentTarget points to the enclosing div (possibly due to bubbling?)
    const $currentScore = $('#current-score');
    let newScore = +$currentScore.text() + $(event.currentTarget).data('value');
    
    $currentScore.text(newScore);

    determineWinOrLose(newScore);
}

const determineWinOrLose = (currentScore) => {
    const $targetNumber = +$('#target-number').text();
    
    (currentScore === $targetNumber) 
            ? processWinsAndLosses('win')
            : (currentScore > $targetNumber) 
                    ? processWinsAndLosses('lose')
                    : '';
}

const processWinsAndLosses = (type) => {
    $type = $(`#${type}`);
    $type.text( +$type.text() + 1 )
    alert(`You ${type}!`);
    beginGame();
}

beginGame();