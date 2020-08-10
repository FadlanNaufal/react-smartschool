const mainColors = {
    blue1 : '#4591F5',
    black1 : '#112340',
    black2 : 'rgba(0,0,0,0.5)',
    white1 : '#fff',
    gray1 : '#76787B',
    gray2 : '#7D8797',
    gray3 : '#F9F9F9',
    dark1 : '#2C569A',
    dark2 : '#7992BC'
}

export const basicColors = {
    primary : mainColors.blue1,
    secondary : mainColors.black1,
    mainBackground : mainColors.gray3,
    black : 'black',
    white : 'white',
    text : {
        primary : mainColors.black1,
        secondary : mainColors.gray2,
        active : mainColors.white1,
        unactive : mainColors.dark2
    },
    button : {
        primary : {
            background : mainColors.blue1,
            text : mainColors.white1
        },
        secondary : {
            background : mainColors.white1,
            text : mainColors.black1
        }
    },
    border : mainColors.gray1,
    bottomNav : mainColors.dark1
}