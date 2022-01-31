namespace OLED_I2C {

    // https://sourceforge.net/projects/tft-font-factory/
    // Export as
    //  - customized array
    //  - byte grouping by row
    //  - byte order top/left pixel MSB
    //  - bit order MSB first

    export let numericFont_16x16: Buffer
    numericFont_16x16 = hex`
        000007C00FE00C60183018301830183018301830183018300C600FE007C00000
        00000180018003800F800D800180018001800180018001800180018001800000
        000007C00FE01C70183000300030006000C00180030006000C001FF01FF00000
        000007800FC01C601860006003C003E000700030003018301C700FE007C00000
        0000004000C001C003C006C006C00CC018C030C03FF03FF000C000C000C00000
        00000FE00FE00C000C0018001BC01FE018300030003018301C700FE007C00000
        000003C007E00C701C3018001BC01FE01C701830183018300C700FE003C00000
        00001FF01FF00020006000C00080018001800300030003000600060006000000
        000007C00FE01C70183018301C700FE00FE01C701830183018700FE007C00000
        000007800FE01C601830183018301C700FF007B0003018301C600FE007800000
    `
}
