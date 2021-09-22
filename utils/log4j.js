const log4js = require('log4js')
const level = {
  trace: log4js.levels.TRACE,
  debug: log4js.levels.DEBUG,
  info: log4js.levels.INFO,
  error: log4js.levels.ERROR
}
log4js.configure({
  appenders: {
    access: {
      type: 'dateFile',
      filename: 'log/access.log',
      pattern: '-yyyy-MM-dd'
    },
    app: {
      type: 'file',
      filename: 'log/app.log',
      maxLogSize: 10485760,
      numBackups: 3
    },
    errorFile: { type: 'file', filename: 'log/errors.log' },
    errors: { type: 'logLevelFilter', level: 'error', appender: 'errorFile' }
  },
  categories: {
    default: { appenders: ['app', 'errors'], level: 'info' },
    http: { appenders: ['access'], level: 'info' }
  }
})

// 日志输出 level为debug
exports.debug = (content) => {
  console.log('log4js', log4js)
  let logger = log4js.getLogger()
  logger.level = level.debug
  logger.debug(content)
}

exports.error = (content) => {
  let logger = log4js.getLogger()
  logger.level = levels.error
  logger.error(content)
}
exports.info = (content) => {
  let logger = log4js.getLogger()
  logger.level = levels.debug
  logger.info(content)
}
