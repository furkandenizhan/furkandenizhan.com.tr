export const config = {
  metadata: {
    title: "Furkan Denizhan - Personal Website",
    description:
      'Hello, and welcome to my personal web page. Or, to be honest, welcome to my corner of the digital landfill!'
  },
  webserver: {
    host: process.env.HOST ?? 'http://localhost:3000'
  }
}
