let color = undefined

$ (function() {
    $('#btn').on('click', function() {
      onClickMeClicked()  
    })
})

/**
 * Handler. Actios taken after 'Click Me' Clicked.
 */
function onClickMeClicked() {
    updateBg()
}

/**
 * Updates the state and updated the UI.
 */

function updateBg() {
    color = getColor()
    showBgColor()
}



/**
 * selects randomly a color from a standard array.
 * @returns the color
 */
function getColor() {
    const colors = ['black','red','green','blue','white']
    return colors[Math.floor(Math.random() * colors.length)]
}

function showBgColor() {
    $('#color').html(color)
    $('body').css({'background-color': color})
}