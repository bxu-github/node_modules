// Type definitions for ag-grid v5.3.0
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ceolter/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
import { CsvExportParams } from "./csvCreator";
import { MasterSlaveService } from "./masterSlaveService";
import { ColDef, IAggFunc } from "./entities/colDef";
import { RowNode } from "./entities/rowNode";
import { Column } from "./entities/column";
import { IRowModel } from "./interfaces/iRowModel";
import { RangeSelection, AddRangeSelectionParams } from "./interfaces/iRangeController";
import { GridCell } from "./entities/gridCell";
import { IViewportDatasource } from "./interfaces/iViewportDatasource";
export declare class GridApi {
    private csvCreator;
    private gridCore;
    private rowRenderer;
    private headerRenderer;
    private filterManager;
    private columnController;
    private selectionController;
    private gridOptionsWrapper;
    private gridPanel;
    private valueService;
    private masterSlaveService;
    private eventService;
    private floatingRowModel;
    private context;
    private rowModel;
    private sortController;
    private paginationController;
    private focusedCellController;
    private rangeController;
    private clipboardService;
    private aggFuncService;
    private menuFactory;
    private cellRendererFactory;
    private cellEditorFactory;
    private inMemoryRowModel;
    private virtualPageRowModel;
    private init();
    /** Used internally by grid. Not intended to be used by the client. Interface may change between releases. */
    __getMasterSlaveService(): MasterSlaveService;
    getFirstRenderedRow(): number;
    getLastRenderedRow(): number;
    getDataAsCsv(params?: CsvExportParams): string;
    exportDataAsCsv(params?: CsvExportParams): void;
    setDatasource(datasource: any): void;
    setViewportDatasource(viewportDatasource: IViewportDatasource): void;
    setRowData(rowData: any[]): void;
    setFloatingTopRowData(rows: any[]): void;
    setFloatingBottomRowData(rows: any[]): void;
    setColumnDefs(colDefs: ColDef[]): void;
    refreshRows(rowNodes: RowNode[]): void;
    refreshCells(rowNodes: RowNode[], colIds: string[], animate?: boolean): void;
    rowDataChanged(rows: any): void;
    refreshView(): void;
    setFunctionsReadOnly(readOnly: boolean): void;
    softRefreshView(): void;
    refreshGroupRows(): void;
    refreshHeader(): void;
    isAnyFilterPresent(): boolean;
    isAdvancedFilterPresent(): boolean;
    isQuickFilterPresent(): boolean;
    getModel(): IRowModel;
    onGroupExpandedOrCollapsed(refreshFromIndex?: any): void;
    refreshInMemoryRowModel(): any;
    expandAll(): void;
    collapseAll(): void;
    addVirtualRowListener(eventName: string, rowIndex: number, callback: Function): void;
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    setQuickFilter(newFilter: any): void;
    selectIndex(index: any, tryMulti: any, suppressEvents: any): void;
    deselectIndex(index: number, suppressEvents?: boolean): void;
    selectNode(node: RowNode, tryMulti?: boolean, suppressEvents?: boolean): void;
    deselectNode(node: RowNode, suppressEvents?: boolean): void;
    selectAll(): void;
    deselectAll(): void;
    recomputeAggregates(): void;
    sizeColumnsToFit(): void;
    showLoadingOverlay(): void;
    showNoRowsOverlay(): void;
    hideOverlay(): void;
    isNodeSelected(node: any): any;
    getSelectedNodesById(): {
        [nodeId: number]: RowNode;
    };
    getSelectedNodes(): RowNode[];
    getSelectedRows(): any[];
    getBestCostNodeSelection(): any;
    getRenderedNodes(): any[];
    ensureColIndexVisible(index: any): void;
    ensureColumnVisible(key: string | Column | ColDef): void;
    ensureIndexVisible(index: any): void;
    ensureNodeVisible(comparator: any): void;
    forEachLeafNode(callback: (rowNode: RowNode) => void): void;
    forEachNode(callback: (rowNode: RowNode) => void): void;
    forEachNodeAfterFilter(callback: (rowNode: RowNode) => void): void;
    forEachNodeAfterFilterAndSort(callback: (rowNode: RowNode) => void): void;
    getFilterApiForColDef(colDef: any): any;
    getFilterApi(key: string | Column | ColDef): any;
    destroyFilter(key: string | Column | ColDef): void;
    getColumnDef(key: string | Column | ColDef): ColDef;
    onFilterChanged(): void;
    setSortModel(sortModel: any): void;
    getSortModel(): {
        colId: string;
        sort: string;
    }[];
    setFilterModel(model: any): void;
    getFilterModel(): any;
    getFocusedCell(): GridCell;
    setFocusedCell(rowIndex: number, colKey: Column | ColDef | string, floating?: string): void;
    setHeaderHeight(headerHeight: number): void;
    showToolPanel(show: any): void;
    isToolPanelShowing(): boolean;
    doLayout(): void;
    getValue(colKey: string | ColDef | Column, rowNode: RowNode): any;
    addEventListener(eventType: string, listener: Function): void;
    addGlobalListener(listener: Function): void;
    removeEventListener(eventType: string, listener: Function): void;
    removeGlobalListener(listener: Function): void;
    dispatchEvent(eventType: string, event?: any): void;
    destroy(): void;
    resetQuickFilter(): void;
    getRangeSelections(): RangeSelection[];
    addRangeSelection(rangeSelection: AddRangeSelectionParams): void;
    clearRangeSelection(): void;
    copySelectedRowsToClipboard(): void;
    copySelectedRangeToClipboard(): void;
    copySelectedRangeDown(): void;
    showColumnMenuAfterButtonClick(colKey: string | Column | ColDef, buttonElement: HTMLElement): void;
    showColumnMenuAfterMouseClick(colKey: string | Column | ColDef, mouseEvent: MouseEvent): void;
    stopEditing(cancel?: boolean): void;
    addAggFunc(key: string, aggFunc: IAggFunc): void;
    addAggFuncs(aggFuncs: {
        [key: string]: IAggFunc;
    }): void;
    clearAggFuncs(): void;
    insertItemsAtIndex(index: number, items: any[]): void;
    removeItems(rowNodes: RowNode[]): void;
    addItems(items: any[]): void;
    refreshVirtualPageCache(): void;
    purgeVirtualPageCache(): void;
    getVirtualRowCount(): number;
    isMaxRowFound(): boolean;
    setVirtualRowCount(rowCount: number, maxRowFound?: boolean): void;
    getVirtualPageState(): any;
}
