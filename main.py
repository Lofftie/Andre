L = 0

def on_gesture_shake():
    global L
    L = randint(0, 5 + 1)
    if L == 1:
        basic.show_leds("""
            . . . . .
                        . . . . .
                        . . # . .
                        . . . . .
                        . . . . .
        """)
    elif L == 2:
        basic.show_leds("""
            . . . . .
                        . . . # .
                        . . . . .
                        . # . . .
                        . . . . .
        """)
    elif L == 3:
        basic.show_leds("""
            . . . . .
                        . . . # .
                        . . # . .
                        . # . . .
                        . . . . .
        """)
    elif L == 4:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . . . .
                        . # . # .
                        . . . . .
        """)
    elif L == 5:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . . # . .
                        . # . # .
                        . . . . .
        """)
    elif L == 6:
        basic.show_leds("""
            . . . . .
                        . # . # .
                        . # . # .
                        . # . # .
                        . . . . .
        """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
