const buildCrystal = () => {
    const $div = $('<div>');
    const randomEffects = addRandomEffects();
    $div.addClass('col-3 col-sm-3');
    
    const $image = $('<img>');
    $image.addClass("diamond rounded-circle");
    $image.addClass(randomEffects);
    $image.attr("src", "./assets/images/diamond-158431.svg");

    const randomValue = assignRandomValue(12);
    $image.attr("data-value", randomValue);
    $image.click(incrementScore);

    $div.append($image)

    return $div;
}

const addRandomEffects = () => {
    const colors = [
        'red', 'blue', 'green', 'orange', 'purple', 'yellow'
    ];

    const effects = ['bounceIn', 'fadeIn', 'rotateIn', 'jackInTheBox']

    const randomColorIndex = Math.floor(Math.random() * colors.length);
    const randomEffectsIndex = Math.floor(Math.random() * effects.length);

    return `${colors[randomColorIndex]}  ${effects[randomEffectsIndex]}`;
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
    const $currentScore = $('#current-score');
    let newScore = +$currentScore.text() + $(event.currentTarget).data('value');
    
    $currentScore.fadeOut('fast', () => {
        $currentScore.text(newScore).fadeIn('fast', () => determineWinOrLose(newScore));
    });

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