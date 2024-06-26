export interface UserInfo {
    ID: number;
    NAME: string;
    EMAIL: string;
    PHONE: string;
    SNAME: string;
    LNAME: string;
    INN: string;
    SNILS: string;
    IDCRM: number;
    PASSPORT: string;
    PASSPORTDATE: string;
    PASSPORTORG: string;
    PASSPORTORGCODE: string;
    BALANCE: string;
    CURRENCY: string;
    DEAL: {
        [key: string]: {
            TYPE: string;
            ALLPRICE: number;
            STATUS: string;
            TITLE: string;
            IDCRM: number;
        };
    };
    APARTMENTS: {
        ID: number;
        NAME: string;
        PRICE: number;
        SQUARE: number;
        PHOTO: string;
    }
}

export interface Catalog {
    [key: string]: {
        picture: string;
        cat: string;
        name: string;
        price: string;
    };
}

export interface Deal {
    title: string;
    status: string;
    idcrm: number;
    type: string;
    allprice: number;
    message: {
        [key: string]: {
            id: string;
            text: string;
            owner: string;
            type: string;
            date: string;
            time: string;
        };
    }
}
