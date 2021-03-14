export interface Collection {
    name: string; // name of the collection, such as plantdetails
    key: string; // name of the property as a unique identifier of the data
}

export interface AssetDetails {
    assetType: string,
    userName: string,
    date: string,
    shift: string,
    assetId: number,
}

export interface AssetInfo {
    lat: number;
    lng: number;
    label?: string;
    assetName?: string;
    assetType?: string;
    oem?: string;
    url?: string;
    visible?: boolean;
    aId?: number;
}
