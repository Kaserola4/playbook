const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')
console.log(logger.count)

const customLogger = new logger.constructor('CUSTOM')
customLogger.log('Hola')
customLogger.log('Hola2')
console.log(customLogger.count)

/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/