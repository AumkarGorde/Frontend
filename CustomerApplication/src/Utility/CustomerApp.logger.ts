export interface Ilogger {
  Log();
}

export class BaseLogger implements Ilogger {
  Log() {}
}

export class ConsoleLogger extends BaseLogger {
  Log(): void {
    console.log('From console log');
  }
}

export class DataBaseLogger extends BaseLogger {
  Log(): void {
    console.log('From Database log');
  }
}

export class FileLogger extends BaseLogger {
  Log(): void {
    console.log('From File log');
  }
}
