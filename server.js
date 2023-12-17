const Stream = require('node-rtsp-stream-jsmpeg')

const options = {
  name: 'streamName',
  url: 'rtsp://rtspstream:b7eb5fd20c01fd0d2dac045713f4b26f@zephyr.rtsp.stream/movie',
  wsPort: 3333
}

const stream = new Stream(options)
stream.start()

