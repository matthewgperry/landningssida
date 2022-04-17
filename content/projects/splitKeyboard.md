+++
title = "Designing a Split Ergonomic Keyboard"
template = "page.html"
+++

## Designing a 34-Key Split Ergonomic Keyboard

![Final product of the keyboard build](IMG_0327.JPG)

If you know common keyboard sizes, this one is about a 30%.

### Design Goals

Many of my future career prospects involve typing.
However, the design of the common keyboard has not changed since the typewriter.
Common keyboards have many problems; the most used keys are not on the easiest to press keys, the firmware can not be changed, and unused keys still take up space on the board.
Taking time to think about my keyboard use cases and adjust towards better habits can save me from disorders such as repetitive strain injury and carpal tunnel.

Spending time learning a more complex layout in the present is better for the future.
The farther the hand has to move to press a key, the slower the speed and the more stress on the hand.
This means that pressing multiple keys that are easy to type is better than one difficult key.

I wanted a keyboard that had these features:

- Column stagger
- 3 keys max per finger
- Diode-less
- Reversible PCB
- Low-cost
- Custom firmware support
- Wired

### Board Layout

Like all great engineering projects, my design started on paper.

Due to not having paint, I had to trace my fingers.
I simply place done my hand in a comfort position and drew dots below each finger.
I then traced a keycap to define spacing between each key.

My final design has 34 keys, 17 keys per side.
Two thumb keys on each side allow me to easily remember which key my thumb is on, as the other key function is just the other one.

I used [Ergogen](https://ergogen.cache.works/) to layout each key based on my paper sketch.
This program was used as KiCad does not shine in laying non-components.

Pro Micros are among the most used keyboard microcontrollers and for good reason.
They are widely available (important in a chip shortage) and cheap.
The Arduino ecosystem also already has very powerful firmware for keyboards.
Due to the Pro Micro having 18 I/O pins I could assign each key to a pin, not needing a matrix or diodes.
Diodes are boring, unnecessary, and an added cost.

I also assigned each key to an Arduino Pro Micro pin and added a TRRS cable to connect both halves.
Exporting into KiCad I moved the TRRS ports and the Pro Micros to the edges of the board.

![Screenshot of the three-d view of the final printed circuit board](quaggaPcb.jpg)

To reduce the manufacturing costs, the board is reversible, meaning the Pro Micro and TRRS ports are flipped on each side.
To finish the design I routed the traces and added a silkscreen.

#### Manufacturing

I got my boards made by JLCPCB.
I got a nice black coating and a white silkscreen.

### Construction

After the PCB, I ordered these keyboard parts:

- Kailh Choc V1 Black switches
- [MBK Keycaps](https://mkultra.click/mbk-choc-keycaps)
- Pro Micros
- TRRS Ports/Cable

![Back of the printed circuit board](IMG_0329.JPG)

After this point my process is similar to any mechanical keyboard hobbyist.

I soldered the switches to the board and added the keycaps.
The construction was the simplest step.

### Key Layout

![Keyboard layout shows each layer and the functions each key holds](layout.jpg)

After debating on programming custom firmware, I decided that I could not beat the power of [QMK](https://qmk.fm/).
While I am a fan of QMK's firmware, the project's idea to include users' boards and layouts in the repository did not sit well with me.
Cloning a git repository should not take minutes in my opinion.
Nevertheless, I configured the firmware and created a keyboard layout.

My layout uses these layers:

- An alpha layer (Colemak-DH)
- A symbol layer
- A number layer
- A game layer

The idea of layers is a necessity in these lower key boards.
Pretty much everyone has used layers; the shift key is the best example.

The most important upgrade to a layout is the alpha layer.
QWERTY is a relic of the past.
I currently use Colemak-DH.
The most satisfying part is typing common bigrams with almost no movement.

I average 80-90 wpm on QWERTY and currently average 40-50 wpm using the split.
However, using vim has been the biggest challenge.

I plan to design more strange keyboards in the future, including new methods to switch between layers.

![Single half of the final product](IMG_0328.JPG)
