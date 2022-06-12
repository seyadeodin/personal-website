
export interface ProductDTO {
    id:         number;
    attributes: ProductDTOAttributes;
}

export interface ProductDTOAttributes {
    price:          number;
    height:         number;
    width:          number;
    depth:          number;
    createdAt:      Date;
    updatedAt:      Date;
    publishedAt:    Date | null;
    colors:         string;
    locale:         string;
    name:           null | string;
    description:    null | string;
    images?:        Images;
    category?:      Category;
    localizations?: Localizations;
}

export interface Localizations {
    data: ProductDTO[];
}



export interface Category {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: null;
    locale:      string;
}

export interface Images {
    data: Datum[];
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export interface Formats {
    thumbnail: Small;
    small:     Small;
}

export interface Small {
    name:   string;
    hash:   string;
    ext:    string;
    mime:   string;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}