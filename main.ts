OLED_I2C.init(60)
for (let Index = 0; Index <= 32; Index++) {
    OLED_I2C.pixel(32 + Index, Index, 1)
}
OLED_I2C.showString(
5,
2,
"Hello!",
1
)
OLED_I2C.draw()
