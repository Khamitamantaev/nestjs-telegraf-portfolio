import { prop } from '@typegoose/typegoose';
import { TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Base } from '@typegoose/typegoose/lib/defaultClasses';

class ProductCharacteristic {

    @prop()
    name: string;

    @prop()
    value: string
}

export interface ProductModel extends Base {}
export class ProductModel extends TimeStamps {

    @prop()
    image: string;

    @prop()
    title: string;

    @prop()
    price: number;

    @prop()
    oldPrice?: number;

    @prop()
    credit: number;

    @prop()
    description: string; // описание

    @prop()
    advantages: string; // преимущества

    @prop()
    disAdvantages: string; // недостатки

    @prop({
        type: () => [String]
    })
    categories: string[];

    @prop({
        type: () => [String]
    })
    tags: string[];

    @prop({
        type: () => [ProductCharacteristic], _id: false // id для каждого элемента характеристик не нужно
    })
    characteristics: ProductCharacteristic[]
}
