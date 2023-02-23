const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const myFormat = format.printf(({ message, level, label, timestamp }) => {
  return `${timestamp} [${label}] [${level}] ${message}`;
});

const youtubeLogger = () => {
  return createLogger({
    level: 'info',
    format: combine(
      format.colorize(),
      label({ label: 'right meow!' }),
      timestamp({ format: 'HH:mm:ss' }),
      myFormat
    ),

    transports: [new transports.Console()], //transports is distructured from winston
  });
};

module.exports = youtubeLogger;
