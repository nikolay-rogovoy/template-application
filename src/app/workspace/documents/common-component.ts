
import { AfterViewChecked, Output, EventEmitter, Input } from '@angular/core';
import { CommonLib } from './common-lib';

/**Компонент*/
export class CommonComponent implements AfterViewChecked {

  /**Загрузка данных выполнена - можно грузить grid*/
  loadComplete = false;

  /**Отладка :)*/
  debug: boolean = true;

  /**Отслеживаем только первую инициализацию вью*/
  firstViewChecked: boolean = true;

  /**Отмена выбора (для модального режима)*/
  @Output()
  onCancel = new EventEmitter<void>();

  /**После загрузки данных*/
  @Output()
  onAfterLoadData = new EventEmitter<void>();

  /**Компонет вложен в другой компонент
   * 0 - Роутинг, главный компонент
   * 1 - Для выбора из справочника
   * 2 - Как вложенный элемент
   *
   * Для формы сущности
   * 0 - Сохранить сделать роутинг назад, сгенерить событие модификации
   * 1 -
   * 2 - Сгенерить событие модификации
   * */
  @Input()
  childMode: number = 0;

  /**Имя компонента*/
  componentName: string;

  /**Активная форма*/
  activeForm: number = 1;

  /**Формат даты и времени для текущего пользователя*/
  static getDateTimeFormat(): string {
    return CommonLib.getDateTimeFormat();
  }

  /**Формат даты для текущего пользователя*/
  static getDateFormat(): string {
    return CommonLib.getDateFormat();
  }

  /**Формат даты и времени для контролов*/
  static getDateTimeFormatUniversal(): string {
    return CommonLib.getDateTimeFormatUniversal();
  }

  /**Формат даты для контролов*/
  static getDateFormatUniversal(): string {
    return CommonLib.getDateFormatUniversal();
  }

  constructor() {
    this.componentName = 'comp_' + Math.round(Math.random() * 10000);
  }

  /**Активировать список сущности родительской*/
  setActiveForm(activeForm: number) {
    this.activeForm = activeForm;
  }

  /**Сделать главным окно*/
  setActiveMasterView(): void {
    if (this.debug) {
      console.log('CommonComponent -> setActiveMasterView -> componentName = ' + this.componentName);
    }
    this.activeForm = 1;
  }

  /**Генерим отмену*/
  genCancel(): void {
    this.onCancel.emit();
  }

  /**Сообщаем заинтересованым что компонент загрузил данные*/
  genAfterLoadData() {
    this.onAfterLoadData.emit();
  }

  /**Событие отрисовки вьюхи (dom дерево построено)*/
  ngAfterViewChecked(): void {
    // Данные загружены
    if (this.loadComplete) {
      // Выполняем инициализацию грида только один раз
      if (this.firstViewChecked) {
        this.firstViewChecked = false;
      }
    }
  }

  /**Получить маску для сущности*/
  getEntityMask(rawValue: any) {
    return ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  }
}
