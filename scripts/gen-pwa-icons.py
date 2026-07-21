"""Generate iOS-glass PWA app icons into /public.

Draws a rounded squircle with a diagonal gradient, a soft specular sheen,
and a minimal glass-grid glyph. Outputs the icon sizes a PWA needs.
"""
from PIL import Image, ImageDraw, ImageFilter

OUT = "public"


def lerp(a, b, t):
    return tuple(round(a[i] + (b[i] - a[i]) * t) for i in range(3))


def gradient(size, c0, c1):
    img = Image.new("RGB", (size, size))
    px = img.load()
    for y in range(size):
        for x in range(size):
            t = (x + y) / (2 * size)
            px[x, y] = lerp(c0, c1, t)
    return img


def rounded_mask(size, radius):
    m = Image.new("L", (size, size), 0)
    d = ImageDraw.Draw(m)
    d.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=255)
    return m


def make_icon(size, maskable=False):
    # maskable icons need safe padding (content within inner ~80%)
    scale = 4
    S = size * scale
    canvas = Image.new("RGBA", (S, S), (0, 0, 0, 0))

    inset = int(S * 0.10) if maskable else 0
    tile = S - inset * 2
    radius = int(tile * 0.235)  # iOS squircle-ish

    grad = gradient(tile, (167, 139, 250), (91, 33, 194))  # violet -> deep purple
    mask = rounded_mask(tile, radius)

    tile_img = Image.new("RGBA", (tile, tile), (0, 0, 0, 0))
    tile_img.paste(grad, (0, 0), mask)

    d = ImageDraw.Draw(tile_img)

    # specular sheen (top-left highlight)
    sheen = Image.new("RGBA", (tile, tile), (0, 0, 0, 0))
    sd = ImageDraw.Draw(sheen)
    sd.ellipse([-tile * 0.25, -tile * 0.55, tile * 0.9, tile * 0.5],
               fill=(255, 255, 255, 70))
    sheen = sheen.filter(ImageFilter.GaussianBlur(tile * 0.05))
    tile_img = Image.alpha_composite(tile_img, Image.composite(
        sheen, Image.new("RGBA", (tile, tile), (0, 0, 0, 0)), mask))

    d = ImageDraw.Draw(tile_img)
    # glass-grid glyph: four rounded squares
    cell = tile * 0.24
    gap = tile * 0.08
    start = (tile - (cell * 2 + gap)) / 2
    for r in range(2):
        for c in range(2):
            x0 = start + c * (cell + gap)
            y0 = start + r * (cell + gap)
            d.rounded_rectangle([x0, y0, x0 + cell, y0 + cell],
                                radius=cell * 0.32,
                                fill=(255, 255, 255, 235))

    canvas.paste(tile_img, (inset, inset), tile_img)
    return canvas.resize((size, size), Image.LANCZOS)


def main():
    make_icon(192).save(f"{OUT}/icon-192.png")
    make_icon(512).save(f"{OUT}/icon-512.png")
    make_icon(512, maskable=True).save(f"{OUT}/icon-maskable-512.png")
    make_icon(180).save(f"{OUT}/apple-touch-icon.png")
    make_icon(32).save(f"{OUT}/favicon-32.png")
    print("wrote PWA icons to", OUT)


if __name__ == "__main__":
    main()
