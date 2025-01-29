export type ProductType = {
    id: number,
    title: string,
    description: string,
    favorites: boolean,
    process:number,
    productImage: string,
}

export const product: Array<ProductType> = [
    {
        id: 1,
        title: 'Математика',
        description: 'Description 1',
        favorites: false,
        process: 0,
        productImage: './src/DataBase/images/imageBD1.png',
    },
    {
        id: 2,
        title: 'Русский язык',
        description: 'Description 2',
        favorites: false,
        process: 20,
        productImage: './src/DataBase/images/imageBD2.jpg',
    },
    {
        id: 3,
        title: 'Информатика',
        description: 'Description 3',
        favorites: false,
        process: 10,
        productImage: './src/DataBase/images/imageBD3.jpg',
    },
    {
        id: 4,
        title: 'Биология',
        description: 'Description 4',
        favorites: false,
        process: 30,
        productImage: './src/DataBase/images/imageBD4.png',
    },
    {
        id: 5,
        title: 'Обществознание',
        description: 'Description 5',
        favorites: false,
        process: 40,
        productImage: './src/DataBase/images/imageBD5.jpg',
    },
    {
        id: 6,
        title: 'География',
        description: 'Description 6',
        favorites: false,
        process: 50,
        productImage: './src/DataBase/images/imageBD6.jpg',
    },
    {
        id: 7,
        title: 'Физика',
        description: 'Description 7',
        favorites: false,
        process: 90,
        productImage: './src/DataBase/images/imageBD7.jpg',
    },
    
];
