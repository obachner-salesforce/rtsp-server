const Stream = require('node-rtsp-stream-jsmpeg')

const options = {
  name: 'streamName',
  url: 'rtp://127.0.0.1:9988',
  wsPort: 3333
}

const stream = new Stream(options)
stream.start()

