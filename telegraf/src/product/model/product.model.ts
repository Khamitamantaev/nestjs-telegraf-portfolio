export class ProductModel {
    image: string;
    title: string;
    price: number;
    oldPrice: number;
    credit: number;
    calculatedRating: number; // вычисленный рейтинг
    description: string; // описание
    advantages: string; // преимущества
    disAdvantages: string; // недостатки
    categories: string[];
    tags: string[];
    characteristics: {
        [key: string]: string
    }
}
