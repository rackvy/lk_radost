export interface UserInfo {
    ID: number;
    DEAL: {
        [key: string]: {
            TYPE: string;
            ALLPRICE: number;
            STATUS: string;
            TITLE: string;
            // Добавьте другие поля, если они присутствуют
        };
    };
    // Добавьте другие поля, если они присутствуют
}

export interface Catalog {
    [key: string]: {
        picture: string;
        cat: string;
        name: string;
        price: string;
        // Добавьте другие поля, если они присутствуют
    };

    // Добавьте другие поля, если они присутствуют
}

