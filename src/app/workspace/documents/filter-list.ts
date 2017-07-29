import {ListComponent} from './list';
import {ServiceProviderFilter} from './service-provider-filter';
import {Router} from '@angular/router';
import {Factory} from './factory';
import {ServiceProviderListGroup} from './service-provider-list-group';
import {FactoryGroup} from './factory-group';
import {IGroupEntity} from './i-group-entity';
import {IEntity} from './i-entity';
import * as lib from '../../../init/lib';

export class FilterListComponent extends ListComponent {

  /**Список фильтров*/
  entityGroups: IGroupEntity[] = [];

  /**При первом открытии экспандим первый аккордион*/
  firstAccordionExpanded: boolean = false;

  /**Загрузка данных выполнена - можно грузить grid*/
  loadDocsComplete: IGroupEntity = null;

  /**Загрузка таблицы выполнена*/
  loadTableComplete: boolean = false;

  /**Конструктор
   * @param  {ServiceProviderFilter} service - Сервис сущности.
   * @param  {Router} router - Роутер.
   * @param  {Factory} factory - Фабрика основной сущности.
   * @factoryGroup  {ServiceProviderListGroup} serviceGroup - Сервис групп.
   * @factoryGroup  {FactoryGroup} factoryGroup - Фабрика групповой сущности.
   *
   * */
  constructor(public service: ServiceProviderFilter,
              public router: Router,
              public factory: Factory,
              public serviceGroup: ServiceProviderListGroup,
              public factoryGroup: FactoryGroup
  ) {
    super(service, router, factory);
  }

  /**Получить имя таблицы*/
  getTableName(groupEntity: IGroupEntity): string {
    return 'com_' + this.componentName + '_table_' + groupEntity[groupEntity.keyName];
  }

  /**Загрузить данные*/
  loadData(): void {

    if (this.debug) {
      console.log('FilterListComponent -> loadData -> ');
    }

    // Сбрасываем флаги для перерисовки грида
    this.loadComplete = false;
    this.firstViewChecked = true;

    for (let groupEntity of this.entityGroups) {
      // TODO Переход на новый грид
      // manager.destroyDataTable2(this.getTableName(groupEntity));
    }

    this.serviceGroup.getEntityGroupList(this.factoryGroup).subscribe(
      (entityGroups: any) => {
        this.entityGroups = entityGroups;

        // Отмечаем что данные получены.
        this.loadComplete = true;
        this.genAfterLoadData();

        if (this.debug) {
          console.log('FilterListComponent -> loadData -> complite');
        }

      },
      (error: any) => {
        this.positions = [];
        console.log('Ошибка получения списка');
        console.log(error);
      }
    );
  }

  /**Полчить ид панели*/
  getPanelId(num: number): string {
    return this.componentName + 'collapse_' + num;
  }

  /**Событие отрисовки вьюхи (dom дерево построено)*/
  ngAfterViewChecked(): void {

    // Экспанд первого фильтра
    if (this.loadComplete && !this.firstAccordionExpanded) {

      if (this.debug) {
        console.log('FilterListComponent -> ngAfterViewChecked -> this.firstAccordionExpanded = ' + this.firstAccordionExpanded);
      }

      this.firstAccordionExpanded = true;

      if (this.entityGroups.length > 0) {
        let panelId = this.getPanelId(0);
        if (!lib.isExpanded(panelId)) {
          this.expandCollapsePanel(0);
        }
      }
    }

    // Выполняем инициализацию грида только один раз
    if (this.loadComplete) {
      if (this.firstViewChecked) {
        this.firstViewChecked = false;

        /*
         $('#accordion').on('shown.bs.collapse', e => {
         let index = +e.target.id.replace("collapse","");
         this.orderList.toArray()[index].loadData();
         });

         $('#accordion').on('hidden.bs.collapse', e => {
         let index = +e.target.id.replace("collapse","");
         this.orderList.toArray()[index].clearData();
         });
         */
      }
    }

    if (this.loadDocsComplete != null && !this.loadTableComplete) {
      this.loadTableComplete = true;
      this.loadGrid(this.getTableName(this.loadDocsComplete));
    }

  }

  /**Инициализация грида*/
  loadGrid(tableName: string): void {
    if (this.debug) {
      console.log('FilterListComponent -> loadGrid -> this.tableName = ' + tableName);
    }
    // TODO Переход на новый грид
    //manager.initDataTable2(tableName);
  }

  /**Свернуть - развернуть панель*/
  expandCollapsePanel(numPanel: number): void {

    let panelId = this.getPanelId(numPanel);

    if (lib.isExpanded(panelId)) {
      // Свернуть панель
      lib.collapsePanel(panelId);
    } else {

      if (this.debug) {
        console.log('FilterListComponent -> expandCollapsePanel -> expand numPanel = ' + numPanel);
      }

      // Загрузить данные, после загрузки данных только раскрыть панель
      let groupEntity: IGroupEntity = this.entityGroups[numPanel];
      this.service.getEntityList(
        groupEntity[groupEntity.keyName], this.factory)
        .map((data: any) => {
          return data;
        })
        .subscribe((entityItems: any) => {
          groupEntity['data'] = entityItems;

          lib.expandPanel(this.getPanelId(numPanel));

          this.loadDocsComplete = groupEntity;
          this.loadTableComplete = false;

          if (this.debug) {
            console.log('expandCollapsePanel -> expand complite numPanel = ' + numPanel + '; getPanelId = ' + this.getPanelId(numPanel));
            console.log(groupEntity);
          }

        });
    }
  }

  /**Развернуть панель*/
  expandPanel(numPanel: number): void {
    let panelId = this.getPanelId(numPanel);
    lib.expandPanel(panelId);
  }

  /**Удалить запись*/
  delete(entity: IEntity) {
    super.delete(entity, (id: number) => {
      for (let groupEntity of this.entityGroups) {
        // TODO Переход на новый грид
        // manager.deleteRowById2(this.getTableName(groupEntity), this.getRowId(entity));
      }
    });
  }
}
