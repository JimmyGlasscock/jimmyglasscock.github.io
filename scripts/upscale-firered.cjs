/* eslint-disable no-console */
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const inputDir = path.join(__dirname, '..', 'public', 'photos', 'firered')
const outputDir = path.join(inputDir, 'upscaled')

const items = [
  ...[1, 2, 3, 4].map((n) => ({
    name: String(n),
    input: path.join(inputDir, `${n}.png`),
    output: path.join(outputDir, `${n}.png`),
  })),
  {
    name: 'ChronosMeadow',
    input: path.join(inputDir, 'ChronosMeadow.png'),
    output: path.join(outputDir, 'ChronosMeadow.png'),
  },
  {
    name: 'jimmy-sprite',
    input: path.join(inputDir, 'jimmy-sprite.png'),
    output: path.join(outputDir, 'jimmy-sprite.png'),
  },
]

async function main() {
  fs.mkdirSync(outputDir, { recursive: true })

  for (const item of items) {
    if (!fs.existsSync(item.input)) {
      console.log(`Skipping missing: ${path.relative(process.cwd(), item.input)}`)
      continue
    }

    // Target width keeps memory + file size reasonable while making screenshots crisp.
    const targetWidth = 1600

    await sharp(item.input)
      .resize({
        width: targetWidth,
        kernel: sharp.kernel.lanczos3,
        fit: 'inside',
      })
      .sharpen({
        // Gentle sharpening to avoid crunchy artifacts on pixel-art-ish screenshots.
        sigma: 1.0,
        radius: 2,
        flat: 1.0,
      })
      .png({ compressionLevel: 9 })
      .toFile(item.output)

    console.log(`Upscaled: ${path.relative(process.cwd(), item.output)}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

