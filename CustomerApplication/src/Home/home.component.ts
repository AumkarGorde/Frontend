import { Component } from '@angular/core';
import { BaseLogger } from 'src/Utility/CustomerApp.logger';

@Component({
  templateUrl: './home.view.html',
})
export class HomeComponent {
  title = 'Home Page';
  /**
   *Logging done by centralized DI.
   */
  _logger: BaseLogger = null;
  constructor(logger: BaseLogger) {
    this._logger = logger;
    this._logger.Log();
  }
}
