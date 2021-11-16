const say = require('../')
const path = require('path')

// Export spoken audio to a WAV file
say.setEncoding('gbk')
const destFile = 'tmp-test.wav'
const text = `您<好">"吗`
say.export(text, undefined, 1, path.join(__dirname, destFile), (err) => {
  if (err) {
    return console.error(err)
  }

  console.log(`Text has been saved to ${destFile}.`)
})
