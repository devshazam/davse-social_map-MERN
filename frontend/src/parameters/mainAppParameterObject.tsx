const globalParamsObject = {
    config: {
        adsNumber: 5, // предельное кол-во объявлений каждого пользователя по каждой категории
    },
    main: {
        adsCategory: [
            "Скидки",
            "Благотворительность",
            "Мероприятия",
            "Объявления",
        ],
        districtsNames: [
            "Ворошиловский",
            "Дзержинский",
            "Кировский",
            "Красноармейский",
            "Краснооктябрьский",
            "Советский",
            "Тракторозаводский",
            "Центральный",
        ],
        namesOfMongoMOdel: {
            adCategory: "Категория:",
            name: "Название:",
            description: "Описание:",
            cost: "Цена:",
            discount: "Скидка:",
            discountCategory: "Категория:",
            avitoCategory: "Категория",
            startDate: "Дата начала:",
            endDate: "Дата конца:",
            district: "Район:",
            address: "Адрес:",
        },
        checkAdCategory: [
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description'], ['cost', 'discount', 'discountCategory']],
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description']],
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description'], ['cost', 'startDate', 'endDate']],
            [['img'], ['address', 'latitude', 'longitude'], ['district', 'name', 'description'], ['cost', 'avitoCategory', 'uniquePart']],

        ]
    

    }, 
    discounts: {
        discountsCategory: [
            "Красота и здоровье",
            "Все для животных",
            "Одежда и обувь",
            "Товары для детей",
            "Автомобиль",
            "Электроника",
            "Дом и дача",
            "Хобби и отдых",
            "Продукты",
            "Фитнес и спорт",
            "Другое",
        ], 
        discountSize: [
            '5', '10', '15', '20', '25', '30', '35', '40', '45', '50'
        ]

    }, 
    charity: {

    },
    avito: {
        avitoCategory: [
            "Посуточная аренда",
            "Длительная аренда",
            "Продажа жилья",
            "Продажа автомобилей",
            "Личные вещи",
            "Электроника",
            "Работа",
            "Услуги",
            "Игрушки",
            "Спортивные товары",
            "3D печать",
            "Запчасти",
        ], 
        avitoParametrs: [
            // недвижимость
            ['Метраж:', ['Санузел:', ['Раздельный', 'Совмещенный']], 'Этаж:', 'Кол-во комнат:', 'Интернет и ТВ:', 'Залог:', 'Техника:', 'Мебель:', 'Площадь кухни:', 'Ремонт:'],
            // недвижимость
            ['Метраж:', ['Санузел:', ['Раздельный', 'Совмещенный']], 'Этаж:', 'Кол-во комнат:', 'Интернет и ТВ:', 'Залог:', 'Техника:', 'Мебель:', 'Площадь кухни:', 'Ремонт:'],
            // недвижимость
            ['Метраж:', ['Санузел:', ['Раздельный', 'Совмещенный']], 'Этаж:', 'Кол-во комнат:', 'Интернет и ТВ:', 'Залог:', 'Техника:', 'Мебель:', 'Площадь кухни:', 'Ремонт:'],
            // автомобиль
            ['Год выпуска:', 'Пробег:', 'Мощность двигателя:', 'Цвет:', ['Тип коробки передач:', ['Механическая', 'Автоматическая', 'Робот']], 'Объем двигателя:', 'VIN:', 'Кол-во владельцев:'],
            // личные вещи
            ['Размер:', 'Состояние:', 'Бренд:', 'Цвет:'],
            // Электроника
            ['Состояние:', 'Бренд:', 'Цвет:'],
            // Работа
            ['Опыт работы:', 'График:', ['Сфера деятельности:', ['Бухгалтерия', 'Медицина', 'Охрана', 'Производство', 'Транспорт, такси', 'Красота и фитнес', 'Страхование', 'Доставка']]],
            // услуги
            [['Сфера деятельности:', ['Перевозки', 'Ремонт и строительство', 'Красота', 'Клининг', 'Ремонт техники', 'Деловые услуги', 'Обучение', 'Медицина']], 'Опыт работы:', 'Специальность:', 'Предоплата:'],
            // игрушки
            ['Состояние:', 'Пол ребенка:'],
            // "Спортивные товары",
            ['Состояние:', 'Вид спорта:'],
            //3D печать
            ['Состояние:'],
            //Запчасти
            ['Состояние:', 'Бренд:', 'Вид запчасти:'],

]

    }, 
    events: {

    }

};

export default globalParamsObject;

