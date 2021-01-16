export class Place {

    /*constructor(public id: string,
                public title: string,
                public description: string,
                public imageUrl: string,
                public price: number) {
    }*/




    constructor(private _id: string,
                private _title: string,
                private _description: string,
                private _imageUrl: string,
                private _price: number) {
    }


    get id(): string {
        return this._id;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    get price(): number {
        return this._price;
    }
}
