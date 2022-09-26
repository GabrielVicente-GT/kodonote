const buttonExit = (option) => {
    let isOn = false
    if(option === 'On'){
        isOn = true
    } else {
        isOn = false
    }
    return isOn
}

export default buttonExit