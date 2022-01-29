//% weight=20 color=#0855AA icon="O" block="OLED_I2C"
namespace OLED_I2C {

    // https://sourceforge.net/projects/tft-font-factory/
    // Export as
    //  - customized array
    //  - byte grouping by row
    //  - byte order top/left pixel MSB
    //  - bit order MSB first

    let numericFont_8x8: Buffer
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
    let numericFont_16x16: Buffer
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

    let numericFont_16x24: Buffer
    numericFont_16x24 = hex`
        0000000007E01FF81FF83C3C381C781C700E700E700E700E700E700E700E700E700E381E381C3C3C1FF81FF807E00000
        00000000006000E001E003E00FE01EE018E010E000E000E000E000E000E000E000E000E000E000E000E000E000E00000
        0000000007C01FF03FF8387C701C701C001C001C00180038007000E001C0038007000E001C0038003FFC7FFC7FFC0000
        0000000007C01FF03FF8783C701C001C001C001C007803F003F8001C000E000E000E700E781E383C3FFC1FF807E00000
        0000000000180038007800F800F801F803B807380E380E381C38383870387FFE7FFE7FFE003800380038003800380000
        000000001FFC1FFC1FFC38003800380038003BE077F87FFC781C001E000E000E000E700E781E383C3FF81FF007E00000
        0000000003F00FF81FFC1C1E380E3800700071E077F87FFC7C3C781E700E700E700E700E381E3C3C1FFC0FF803E00000
        000000003FFE3FFE3FFE000C001C00380030007000E000E001C001C001C0038003800380038007000700070007000000
        0000000007E00FF01FF83C3C381C381C381C1C380FF007E01FF8383C381E700E700E700E780E3C1C3FFC1FF807E00000
        0000000007C01FF03FF83C3C781C700E700E700E700E781E3C3E3FFE1FEE078E000E001C701C78383FF81FF00FC00000
    `

    let numericFont_24x32: Buffer
    numericFont_24x32 = hex`
        00000000000000FC0003FF0007FF800FFFC00F87C01F03E01F03E01E01E03E01F03E01F03E01F03E01F03E01F03E01F03E01F03E01F03E01F03E01F03E01F01E01E01F03E01F03E00F87C00FFFC007FF8003FF0000FC00000000000000000000
        000000000000000F00001F00003F00007F0000FF0001FF0007FF000FFF000FDF000F1F000C1F00001F00001F00001F00001F00001F00001F00001F00001F00001F00001F00001F00001F00001F00001F00001F00001F00000000000000000000
        00000000000000FE0003FF8007FFC00FFFE00FC3E01F81F01F01F01F01F00001F00001F00003E00007E0000FC0001FC0003F80007F0000FE0001FC0003F80007E00007C0000FC0001FFFF01FFFF01FFFF03FFFF03FFFF0000000000000000000
        00000000000000FC0003FF0007FF800FFFC00F87E01F03E00F03E00003E00007E0000FC0003F80007F00007F80007FC00007E00003E00001F00001F00001F01E01F03E01F03F03E01F87E01FFFC00FFF8003FF0000FC00000000000000000000
        0000000000000007C00007C0000FC0001FC0001FC0003FC0007FC0007FC000FFC000F7C001E7C003E7C003C7C007C7C00F87C00F07C01F07C03E07C03FFFF83FFFF83FFFF83FFFF80007C00007C00007C00007C00007C0000000000000000000
        00000000000001FFF001FFF003FFF003FFF003FFF003E00003E00007E00007C00007DF0007FFC007FFE00FFFF00FC3F00781F80000F80000F80000F80000F80F00F81F00F81F81F00FC3F00FFFE007FFC003FF8000FE00000000000000000000
        00000000000000FE0001FF0007FF800FFFC00F87C01F03E01E03E01E00003E00003E7E003FFF003FFFC03FFFC03F87E03F03E03E01F03E01F03E01F03E01F01E01F01F01F01F03E00F87E00FFFC007FFC003FF0000FC00000000000000000000
        0000000000003FFFF03FFFF03FFFF03FFFF03FFFF00003E00007C0000F80000F80001F00001E00003E00003C00007C00007C0000F80000F80000F80001F00001F00001F00001F00003E00003E00003E00003E00003E000000000000000000000
        00000000000001FC0003FF000FFFC00FFFC01F87E01F03E01F03E01F03E01F03E00F87C00FFF8003FF0007FF800FFFC01F87E01F03E03E01F03E01F03E01F03E01F03E01F03F03F01F87E01FFFE00FFFC003FF8000FE00000000000000000000
        00000000000000FC0003FF000FFF800FFFC01F87C01F03E03E03E03E01E03E01F03E01F03E01F03E01F01F03F01F87F00FFFF00FFFF003FFF001F9F00001F00001E01F01E01F03E00F87C00FFFC007FF8003FE0001FC00000000000000000000
    `

    let numericFont_32x40: Buffer
    numericFont_32x40 = hex`
        001FE000007FF80000FFFC0001FFFE0003FFFF0003FFFF0007F87F8007F03F800FE01FC00FE01FC00FE01FC00FC00FC01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE00FC00FC00FE01FC00FE01FC00FE01FC007F03F8007F87F8007FFFF0003FFFF0001FFFE0000FFFC00007FF800000FE0000000000000000000
        0001F8000001F8000003F8000003F8000007F800000FF800001FF800007FF80000FFF80003FFF80007FFF80007FBF80007F3F80007E3F8000783F8000403F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000003F8000000000000000000
        000FF000007FFC0000FFFE0001FFFF0003FFFF8003FFFFC007F83FC007F01FE00FF00FE00FE00FE00FE00FE003E00FE000000FE000000FE000001FC000001FC000003FC000007F800000FF800001FF000003FE000007FC00000FF800001FF000003FE000007FC00000FF800000FF000001FE000003FE000007FC000007FFFFE00FFFFFE00FFFFFE00FFFFFE01FFFFFE01FFFFFE01FFFFFE00000000000000000
        001FC000007FF00000FFFC0001FFFE0003FFFE0007FFFF0007F8FF0007F07F800FF03F800FE03F8000E03F8000003F8000003F8000007F000000FF000003FE000007FC000007F0000007FC000007FE000007FF8000003F8000001FC000001FE000000FE000000FE003C00FE01FC00FE01FE00FE01FE01FE00FF01FC00FF87FC007FFFF8007FFFF8003FFFF0001FFFE00007FF800001FE0000000000000000000
        00003F0000007F000000FF000000FF000001FF000003FF000003FF000007FF00000FFF00000FFF00001FFF00003FFF00003FFF00007F7F0000FE7F0000FE7F0001FC7F0003F87F0003F87F0007F07F000FE07F000FE07F001FC07F003F807F003FFFFFF83FFFFFF83FFFFFF83FFFFFF83FFFFFF83FFFFFF800007F0000007F0000007F0000007F0000007F0000007F0000007F0000007F000000000000000000
        00FFFFC000FFFFC000FFFFC001FFFFC001FFFFC001FFFFC001FFFFC001FC000003F8000003F8000003F8000003F8000003FBF00007FFFC0007FFFF0007FFFF8007FFFFC007FFFFC00FF83FE00FF01FE001E00FE0000007F0000007F0000007F0000007F0000007F003C007F01FC007F01FE00FF00FE00FE00FF01FE00FF83FC007FFFFC003FFFF8003FFFF0000FFFE00007FF800001FE0000000000000000000
        000FE000003FF800007FFE0001FFFF0001FFFF0003FFFF8007F87F8007F03FC00FE01FC00FE01F000FC000000FC000001FC000001FC7E0001FDFFC001FFFFE001FFFFF001FFFFF801FFFFF801FF87FC01FE03FC01FE01FE01FC00FE01FC00FE01FC00FE01FC00FE00FC00FE00FC00FE00FE00FE00FE01FC007F01FC007F87FC003FFFF8003FFFF8001FFFF0000FFFE00003FF800000FE0000000000000000000
        1FFFFFE01FFFFFE01FFFFFE01FFFFFE01FFFFFE01FFFFFE01FFFFFC000003FC000007F8000007F000000FE000001FE000001FC000003F8000003F8000007F0000007F000000FE000000FE000001FC000001FC000003F8000003F8000003F8000007F0000007F0000007F000000FE000000FE000000FE000000FE000000FE000001FC000001FC000001FC000001FC000001FC000001FC00000000000000000000
        001FE00000FFFC0001FFFE0003FFFF0007FFFF8007FFFF800FF87FC00FF03FC00FE01FC00FE01FC00FE01FC00FE01FC007F03F8007F87F8003FFFF0001FFFE00007FF80000FFFC0003FFFF0007FFFF8007F87F800FE03FC00FE01FC01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FC00FE01FE01FE00FF01FC00FF87FC007FFFF8007FFFF8003FFFF0001FFFE00007FF800001FE0000000000000000000
        001FC000007FF00001FFFC0003FFFE0007FFFF0007FFFF000FF87F800FE03F800FE01FC01FC01FC01FC00FC01FC00FC01FC00FE01FC00FE01FC00FE01FC00FE01FE01FE00FF01FE00FF87FE007FFFFE007FFFFE003FFFFE001FFF7E000FFEFE0001F8FE000000FE000000FC000000FC003E01FC00FE01FC00FF03F8007F87F8007FFFF0003FFFE0003FFFE0001FFF80000FFF000001FC0000000000000000000
    `

    let _I2CAddr = 0;
    let _frameBuffer = pins.createBuffer(1025); // first byte seems to be command, then 1024 bytes data
    let _buf2 = pins.createBuffer(2);
    let _buf3 = pins.createBuffer(3);
    let _buf4 = pins.createBuffer(4);

    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0;
        _buf3[1] = d1;
        _buf3[2] = d2;
        pins.i2cWriteBuffer(_I2CAddr, _buf3);
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0;
        _buf4[1] = d1;
        _buf4[2] = d2;
        _buf4[3] = d3;
        pins.i2cWriteBuffer(_I2CAddr, _buf4);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = col
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

    /**
     * set pixel in OLED
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param color is dot color, eg: 1
     */
    //% blockId="OLED_I2C_PIXEL" block="set pixel at x %x|y %y|color %color"
    //% weight=70 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function pixel(x: number, y: number, color: number = 1) {
        let page = y >> 3
        let shift_page = y % 8
        let index = x + page * 128 + 1
        let b = (color) ? (_frameBuffer[index] | (1 << shift_page)) : (_frameBuffer[index] & ~(1 << shift_page))
        _frameBuffer[index] = b

        /*
        draw directly to screen
        set_pos(x, page)
        _buf2[0] = 0x40
        _buf2[1] = b
        pins.i2cWriteBuffer(_I2CAddr, _buf2)
        */
    }

    /**
     * show numeric string in OLED
     * @param x top left x address of start
     * @param y top left y address of start
     * @param s is the text will be show, eg: '1234567890'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED_I2C_NUMERICSTRING_8x8" block="show numeric string with 8x8 font at x %x|y %y|text %s|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function numericString_8x8(x: number, y: number, s: string, color: number = 1) {
        numericString(x, y, s, numericFont_8x8, 8, 8, color)
    }

    /**
     * show numeric string in OLED
     * @param x top left x address of start
     * @param y top left y address of start
     * @param s is the text will be show, eg: '1234567890'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED_I2C_NUMERICSTRING_16x16" block="show numeric string with 16x16 font at x %x|y %y|text %s|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function numericString_16x16(x: number, y: number, s: string, color: number = 1) {
        numericString(x, y, s, numericFont_16x16, 16, 16, color)
    }

    /**
     * show numeric string in OLED
     * @param x top left x address of start
     * @param y top left y address of start
     * @param s is the text will be show, eg: '1234567890'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED_I2C_NUMERICSTRING_16x24" block="show numeric string with 16x24 font at x %x|y %y|text %s|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function numericString_16x24(x: number, y: number, s: string, color: number = 1) {
        numericString(x, y, s, numericFont_16x24, 16, 24, color)
    }

    /**
     * show numeric string in OLED
     * @param x top left x address of start
     * @param y top left y address of start
     * @param s is the text will be show, eg: '1234567890'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED_I2C_NUMERICSTRING_24x32" block="show numeric string with 24x32 font at x %x|y %y|text %s|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function numericString_24x32(x: number, y: number, s: string, color: number = 1) {
        numericString(x, y, s, numericFont_24x32, 24, 32, color)
    }

    /**
     * show numeric string in OLED
     * @param x top left x address of start
     * @param y top left y address of start
     * @param s is the text will be show, eg: '1234567890'
     * @param color is string color, eg: 1
     */
    //% blockId="OLED_I2C_NUMERICSTRING_32x40" block="show numeric string with 32x40 font at x %x|y %y|text %s|color %color"
    //% weight=80 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function numericString_32x40(x: number, y: number, s: string, color: number = 1) {
        numericString(x, y, s, numericFont_32x40, 32, 40, color)
    }

    /**
     * show numeric string in OLED
     * @param x top left x address of start
     * @param y top left y address of start
     * @param s is the text will be show, eg: '1234567890'
     * @param fontBuffer font pixel width, e.g. numericFont_8x8
     * @param fontHeight font pixel width, e.g. 8
     * @param fontHeight font pixel height, e.g. 8
     * @param color is string color, eg: 1
     */
    function numericString(x: number, y: number, s: string, fontBuffer: Buffer, fontWidth: number, fontHeight: number, color: number = 1) {
        let byte = 0
        let byteIndex = 0

        for (let n = 0; n < s.length; n++) {
            let charIndex = s.charCodeAt(n) - '0'.charCodeAt(0)
            let charBuffer = fontBuffer.slice(charIndex * (fontWidth * fontHeight / 8), (fontWidth * fontHeight / 8))

            // line by line from top of glyph
            for (let i = 0; i < fontHeight; i++) {
                // byte by byte from left of glyph line
                for (let j = 0; j < (fontWidth / 8); j++) {
                    let byte = charBuffer[(i * (fontWidth / 8)) + j]
                    if (color == 0) {
                        byte &= ~byte
                    }
                    for (let pos = 7, ding = 0; pos >= 0; pos--, ding++) {
                        let px = (byte & (1 << pos)) > 0
                        let pxX = x + (n * fontWidth) + (j * 8) + ding
                        let pxY = y + i
                        pixel(pxX, pxY, px ? 1 : 0)
                    }
                }
            }
        }
    }

    /**
     * draw a horizontal line
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="OLED_I2C_HLINE" block="draw a horizontal line at x %x|y %y|number %len|color %color"
    //% weight=71 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function hline(x: number, y: number, len: number, color: number = 1) {
        for (let i = x; i < (x + len); i++)
            pixel(i, y, color)
    }

    /**
     * draw a vertical line
     * @param x is X alis, eg: 0
     * @param y is Y alis, eg: 0
     * @param len is the length of line, eg: 10
     * @param color is line color, eg: 1
     */
    //% blockId="OLED_I2C_VLINE" block="draw a vertical line at x %x|y %y|number %len|color %color"
    //% weight=72 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function vline(x: number, y: number, len: number, color: number = 1) {
        for (let i = y; i < (y + len); i++)
            pixel(x, i, color)
    }

    /**
     * draw a rectangle
     * @param x1 is X alis, eg: 0
     * @param y1 is Y alis, eg: 0
     * @param x2 is X alis, eg: 60
     * @param y2 is Y alis, eg: 30
     * @param color is line color, eg: 1
     */
    //% blockId="OLED_I2C_RECT" block="draw a rectangle at x1 %x1|y1 %y1|x2 %x2|y2 %y2|color %color"
    //% weight=73 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function rect(x1: number, y1: number, x2: number, y2: number, color: number = 1) {
        if (x1 > x2)
            x1 = [x2, x2 = x1][0];
        if (y1 > y2)
            y1 = [y2, y2 = y1][0];
        hline(x1, y1, x2 - x1 + 1, color)
        hline(x1, y2, x2 - x1 + 1, color)
        vline(x1, y1, y2 - y1 + 1, color)
        vline(x2, y1, y2 - y1 + 1, color)
    }

    /**
     * invert display
     * @param d true: invert / false: normal, eg: true
     */
    //% blockId="OLED_I2C_INVERT" block="invert display %d"
    //% weight=65 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function invert(d: boolean = true) {
        cmd1((d) ? 0xA7 : 0xA6)
    }

    /**
     * draw / redraw screen
     */
    //% blockId="OLED_I2C_DRAW" block="draw"
    //% weight=64 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function draw() {
        set_pos()
        _frameBuffer[0] = 0x40
        pins.i2cWriteBuffer(_I2CAddr, _frameBuffer)
    }

    /**
     * clear screen
     */
    //% blockId="OLED_I2C_CLEAR" block="clear"
    //% weight=63 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function clear() {
        _frameBuffer.fill(0)
        draw()
    }

    /**
     * turn on screen
     */
    //% blockId="OLED_I2C_ON" block="turn on"
    //% weight=62 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function on() {
        cmd1(0xAF)
    }

    /**
     * turn off screen
     */
    //% blockId="OLED_I2C_OFF" block="turn off"
    //% weight=61 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function off() {
        cmd1(0xAE)
    }

    /**
     * OLED initialize
     * @param addr is i2c addr, eg: 60
     */
    //% blockId="OLED_I2C_init" block="init OLED with addr %addr"
    //% weight=100 blockGap=8
    //% parts=OLED_I2C trackArgs=0
    export function init(addr: number) {
        _I2CAddr = addr;
        cmd1(0xAE)       // SSD1306_DISPLAYOFF
        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        cmd1(0xc8)       // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        cmd1(0xAF)       // SSD1306_DISPLAYON
        clear()
    }
}
