const DEFAULT = 0
let counter = DEFAULT

$(function() {

    $('#btnDecr').on('click', () => onDecreaseClicked())
    $('#btnReset').on('click', () => onResetClicked())
    $('#btnIncr').on('click', () => onIncreaseClicked())


   
})

/**
 * Actuins taken after the Decrease button
 * was clicked. Actions include decrease the counter.
 */


function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actuins taken after the reset button
 * was clicked. Actions include reset the counter.
 */


function onResetClicked() {
    resetCounter()
}

/**
 * Actuins taken after the increase button
 * was clicked. Actions include increase the counter.
 */


function onIncreaseClicked() {
    increaseCounter()
}

//Model

/**
 * Decrease the counter and render to UI.
 */

function decreaseCounter() {
    counter--
    showCounter()

}


/**
 * Resets the counter to zero and renders to UI.
 */
function resetCounter() {
    counter = DEFAULT
    showCounter()
}


/**
 * increases the count by one and renders to UI.
 */
function increaseCounter() {
    counter++
    showCounter()
}


/**
 * Assigns the counter to the corresponding UI element.
 * And gives styling accordingly.
 */

function showCounter() {
    //Data binding
   const counterDOM = $('#counter')
   counterDOM.text (counter)

   //Styling
   styleCounterElement(counterDOM)

}

function styleCounterElement(counterDOM) {
    $(counterDOM).toggleClass('color-green', counter>0 )
    $(counterDOM).toggleClass('color-black', counter==0)
    $(counterDOM).toggleClass('color-red', counter<0)
}


//     if(counter==0)
//     document.querySelector('#counter').style.color = "black"
// }else if (counter>0) {
//     document.querySelector('#counter').style.color = 'green'
// } else {if (counter < 0){}
// counterDOM.style.color = "red"}