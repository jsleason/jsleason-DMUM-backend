export declare class GoogleSheet {
    private googleAuth;
    private google;
    private sheets;
    private authFactory;
    private authClient;
    private fs;
    private options;
    private headerRow;
    constructor(options: IGoogleSheetOptions);
    /**
     * Change the range in which the API should search for data
     * @param range
     */
    setRange(range: string): void;
    getRows(): Promise<any>;
    appendRows(rows: Array<any>): Promise<void>;
    getHeaderRow(): Promise<any>;
    private writeToGoogle(values);
    private authenticate();
}
