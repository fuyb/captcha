const { randomBytes } = require('crypto')
const colors = require('./colors')
const lt = require('./font')

const NDOTS = 100
const LETTERS = 'abcdafahijklmnopqrstuvwxyz'


const SW = [0, 4, 8, 12, 16, 20, 23, 27, 31, 35, 39, 43, 47, 50, 54, 58, 61, 65, 68, 71, 75, 78, 81, 84, 87, 90, 93, 96, 98, 101, 103, 105, 108, 110, 112, 114, 115, 117, 119, 120, 121, 122, 123, 124, 125, 126, 126, 127, 127, 127, 127, 127, 127, 127, 126, 126, 125, 124, 123, 122, 121, 120, 119, 117, 115, 114, 112, 110, 108, 105, 103, 101, 98, 96, 93, 90, 87, 84, 81, 78, 75, 71, 68, 65, 61, 58, 54, 50, 47, 43, 39, 35, 31, 27, 23, 20, 16, 12, 8, 4, 0, -4, -8, -12, -16, -20, -23, -27, -31, -35, -39, -43, -47, -50, -54, -58, -61, -65, -68, -71, -75, -78, -81, -84, -87, -90, -93, -96, -98, -101, -103, -105, -108, -110, -112, -114, -115, -117, -119, -120, -121, -122, -123, -124, -125, -126, -126, -127, -127, -127, -127, -127, -127, -127, -126, -126, -125, -124, -123, -122, -121, -120, -119, -117, -115, -114, -112, -110, -108, -105, -103, -101, -98, -96, -93, -90, -87, -84, -81, -78, -75, -71, -68, -65, -61, -58, -54, -50, -47, -43, -39, -35, -31, -27, -23, -20, -16, -12, -8, -4]

function random (size) {
  return new Promise((resolve, reject) => {
    randomBytes(size, (err, buf) => {
      err ? reject(err) : resolve(buf)
    })
  })
}

function letter (n, pos, im, swr, s1, s2) {
  let t = lt[n]
  let mpos = pos
  let sk1 = s1 + pos
  let sk2 = s2 + pos
  let row = 0

  for (let j = 0, k = t.length; j < k; ++j) {
    let p = t[j]
    if (p === -101) continue

    if (p < 0) {
      if (p === -100) {
      }
      continue
    }

    if (sk1 >= 200) sk1 %= 200
    let skew = SW[sk1] / 16
    sk1 += (swr[pos + i - r] & 0x1) + 1

    if (sk2 >= 200) sk2 %= 200
    let skewh = SW[sk2] / 70
    sk2 += (swr[row] & 0x1)
  }

  return mpos
}

async function captcha () {
  const rb = await random(5 + 200 + 100 + 1 + 1)
  const l = Buffer.alloc(5)
  const swr = Buffer.alloc(200)
  const dr = Buffer.alloc(100)
  let s1
  let s2

  rb.copy(l, 0, 0, 5)
  rb.copy(swr, 0, 5, 5 + 200)
  rb.copy(dr, 0, 5 + 200, 5 + 200+ 100)
  s1 = rb.readUInt8(5 + 200 + 100)
  s2 = rb.readUInt8(5 + 200 + 100 + 1)

  let p = 30
  console.log(rb)
  console.log(l)
  console.log(swr)
  console.log(dr)
  console.log(s1)
  console.log(s2)
}

function makegif () {
}

function generate () {
  const result = {}

  captcha()
  makegif()

  return result
}

module.exports = generate

generate()
