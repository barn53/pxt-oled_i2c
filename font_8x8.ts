namespace OLED_I2C {

    // https://sourceforge.net/projects/tft-font-factory/
    // Export as
    //  - customized array
    //  - byte grouping by row
    //  - byte order top/left pixel MSB
    //  - bit order MSB first

    export let numericFont_8x8: Buffer
    numericFont_8x8 = hex`
        3844444444444438
        1030501010101010
        384404040810207C
        3844041804044438
        08182828487C0808
        3C20407804044438
        3844407844444438
        7C08081010202020
        3844443844444438
        384444443C044438
    `
}
