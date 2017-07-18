declare function initDataTable2(idTable: string): void;
declare function initDataTableWithSort2(idTable: string, sort: Array<any>): void;
declare function destroyDataTable2(idTable: string): void;
declare function loadFromDOMDataTable2(idTable: string): void;
declare function clearDataTable2(idTable: string): void;
declare function deleteSelectedRow2(idTable: string): void;
declare function deleteRowById2(idTable: string, idRow: string): void;
declare function changeById2(idTable: string, idRow: string, columnIndex: number, value: any): void;
declare function loadDataTable2(idTable: string, dataSource: Array<any>, columnHeaders: Array<Object>): void;


export { initDataTable2 };
export { initDataTableWithSort2 };
export { loadDataTable2 };
export { destroyDataTable2 };
export { clearDataTable2 };
export { loadFromDOMDataTable2 };
export { deleteSelectedRow2 };
export { deleteRowById2 };
export { changeById2 };
