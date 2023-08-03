import logger from 'electron-log'
import {app} from 'electron'
 
logger.transports.file.level = 'debug'
logger.transports.file.maxSize = 1002430 // 10M
logger.transports.file.format = '[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]{scope} {text}'
let date = new Date()
let dateString = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
logger.transports.file.file = app.getPath('userData') + '\\electron_log\\app\\' + dateString + '.log'

export default {
    info (param:string) {
      logger.info(param)
    },                   
    warn (param:string) {
      logger.warn(param)
    },
    error (param:string) {
      logger.error(param)
    },
    debug (param:string) {
      logger.debug(param) 
    },
    verbose (param:string) {
      logger.verbose(param)
    },
    silly (param:string) {
      logger.silly(param)
    }
  }
