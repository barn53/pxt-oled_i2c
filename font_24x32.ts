namespace OLED_I2C {

    // https://sourceforge.net/projects/tft-font-factory/
    // Export as
    //  - customized array
    //  - byte grouping by row
    //  - byte order top/left pixel MSB
    //  - bit order MSB first

    export let numericFont_24x32: Buffer
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
}