export enum TopLevelCategory {
    Cources,
    Services,
    Books,
    Products
}

export class TopPageModel {
    _id: string;
    firstCategory: TopLevelCategory;
    secondCategory: string;
    title: string;
    category: string // страница должна иметь категорию, по которой будут подтягиваться продукты
    hh?: {
        count: number; // всего вакансии
        juniorSalary: number; 
        middleSalary: number;
        seniorSalary: number;
    }
    advantages: {
        title: string;
        description: string;
    }[];
    seoText: string;
    tagsTitle: string; // переменный заголовок, будет меняться в зависимости от продукта
    tags: string[]
}
