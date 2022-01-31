namespace OLED_I2C {

    // https://sourceforge.net/projects/tft-font-factory/
    // Export as
    //  - customized array
    //  - byte grouping by row
    //  - byte order top/left pixel MSB
    //  - bit order MSB first

    export let numericFont_32x40: Buffer
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
}