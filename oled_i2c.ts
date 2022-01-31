//% weight=20 color="#00bbFF" icon="\uf108"  block="OLED_I2C"
namespace OLED_I2C {

    let _I2CAddr = 0
    let _frameBuffer : Buffer
    let _buf2: Buffer
    let _buf3: Buffer
    let _buf4: Buffer

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
        _I2CAddr = addr
        _frameBuffer = pins.createBuffer(1025) // first byte seems to be command, then 1024 bytes data
        _buf2 = pins.createBuffer(2)
        _buf3 = pins.createBuffer(3)
        _buf4 = pins.createBuffer(4)

        cmd1(0xAE)         // SSD1306_DISPLAYOFF
        cmd1(0xA4)         // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0)   // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F)   // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00)   // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)      // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14)   // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00)   // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1)   // SSD1306_SEGREMAP
        cmd1(0xc8)         // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12)   // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF)   // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1)   // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40)   // SSD1306_SETVCOMDETECT
        cmd1(0xA6)         // SSD1306_NORMALDISPLAY
        cmd1(0xAF)         // SSD1306_DISPLAYON

        clear()
    }

    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0
        _buf3[1] = d1
        _buf3[2] = d2
        pins.i2cWriteBuffer(_I2CAddr, _buf3)
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0
        _buf4[1] = d1
        _buf4[2] = d2
        _buf4[3] = d3
        pins.i2cWriteBuffer(_I2CAddr, _buf4)
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        let c = col
        cmd1(0x00 | (c % 16)) // lower start column address
        cmd1(0x10 | (c >> 4)) // upper start column address    
    }

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
}
