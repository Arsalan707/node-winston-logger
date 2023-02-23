const winston = require('winston');
const { createLogger, format, transports } = winston;
const { combine, timestamp, label, printf } = format;

const myFormat = format.printf(({ message, level, label, timestamp }) => {
  return `[${label}] ${timestamp}  [${level}] ${message}`;
});

const productionLogger = () => {
  return createLogger({
    level: 'warn',
    format: combine(label({ label: 'right meow!' }), timestamp(), myFormat),

    transports: [
      new transports.Console(),
      new transports.File({ filename: 'myError.log' }),
    ],
  });
};

module.exports = productionLogger;
