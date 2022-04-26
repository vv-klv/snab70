<template>
    <v-textarea
        class="search"
        v-model="searchQuery"
        label="Поиск инструмента"
        variant="contained"
        prepend-inner-icon="mdi-magnify"
        color="#2b5e83"
        rows="1"
        autofocus
        no-resize
        clearable
    />
    <div class="card-list">
        <h2 class="nothing-founded" v-show="searchedItems.length === 0">
            Не найдено!
        </h2>
        <RentCard v-for="(item, i) in searchedItems" :items="item"/>
    </div>
</template>

<script>
import RentCard from '@/components/RentCard';

export default {
    name: "RentList",
    components: {RentCard},
    computed: {
        searchedItems() {
            return this.rentItems.filter(item =>
                item.title.toLowerCase()
                    .includes(this.searchQuery.toLowerCase()
                    )
            )
        }
    },
    data() {
        return {
            searchQuery: '',
            rentItems: [
                {
                    id: 1,
                    title: 'Виброплиты 80-90 кг',
                    descr: [
                        {
                            spec: 'Тип двигателя',
                            value: 'бензиновый, 4-тактный'
                        },
                        {
                            spec: 'Глубина уплотнения, мм',
                            value: '200-300'
                        },
                        {
                            spec: 'Габариты плиты, мм',
                            value: '450х500'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '90'
                        },
                        {
                            spec: 'Емкость топливного бака, л',
                            value: '3,6'
                        },
                        {
                            spec: 'Расход топлива, л/ч',
                            value: '1'
                        },
                    ],
                    extra: `Коврик для укладки тротуарной плитки или система
                            орошения для уплотнения асфальта`,
                    price: 1000,
                    imgsrc: require('../assets/Champion PC9045F.jpg')
                },
                {
                    id: 2,
                    title: 'Бензобур ADA GroundDrill-7',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '2 400'
                        },
                        {
                            spec: 'Мощность, л.с.',
                            value: '3,26'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'бензиновый, 2-тактный'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '9,5'
                        },
                    ],
                    extra: `Имеющиеся шнеки: d 80 мм, 100 мм, 150 мм, 200 мм,
                    250 мм (глубина 80 см, с удлинителями от 120 до 180см)`,
                    price: 700,
                    imgsrc: require('../assets/ADA GroundDrill-7.jpg')
                },
                {
                    id: 3,
                    title: 'Отбойный молоток-бетонолом',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '1 700'
                        },
                        {
                            spec: 'Сила удара, Дж',
                            value: '45'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'электрический'
                        },
                        {
                            spec: 'Тип патрона',
                            value: 'шестигранный 30 мм'
                        },
                        {
                            spec: 'Число ударов, уд/мин',
                            value: '1300'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '14,1'
                        },
                    ],
                    extra: `Имеющиеся насадки: пика, долото`,
                    price: 1000,
                    imgsrc: require('../assets/Кратон DHE-1700.jpg')
                },
                {
                    id: 4,
                    title: 'Штроборез Фиолент Б2-30',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '1 600'
                        },
                        {
                            spec: 'Max глубина реза, мм',
                            value: '30'
                        },
                        {
                            spec: 'Ширина паза, мм',
                            value: '8-30'
                        },
                        {
                            spec: 'Диаметр диска, мм',
                            value: '125'
                        },
                        {
                            spec: 'Количество рабочих дисков, шт',
                            value: '2'
                        },
                        {
                            spec: 'Комплект новых дисков',
                            value: '600 руб.'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/Фиолент Б2-30.jpg')
                },
                {
                    id: 5,
                    title: 'Перфоратор Bosch GBH 240',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '790'
                        },
                        {
                            spec: 'Сила удара, Дж',
                            value: '2,7'
                        },
                        {
                            spec: 'Тип патрона ',
                            value: 'SDS-Plus'
                        },
                        {
                            spec: 'Число ударов, уд/мин',
                            value: '4200'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '2,8'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/Bosch GBH 240.jpg')
                },
                {
                    id: 6,
                    title: 'Строительный пылесос BOSCH GAS 20 L',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '1 200'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'электрический'
                        },
                        {
                            spec: 'Объем бака, л ',
                            value: '15'
                        },
                        {
                            spec: 'Максимальная производительность, л/с',
                            value: '62'
                        },
                        {
                            spec: 'Длина всасывающего шланга, м',
                            value: '3'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '8'
                        },
                    ],
                    price: 500,
                    imgsrc: require('../assets/Bosch GAS 20 L.jpg')
                },
                {
                    id: 7,
                    title: 'Фрезер Bosch POF 1400',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '1 400'
                        },
                        {
                            spec: 'Рабочий ход фрезы, мм',
                            value: '55'
                        },
                        {
                            spec: 'Обороты, об/мин',
                            value: '11000 - 28000'
                        },
                        {
                            spec: 'Диаметр фрез, мм',
                            value: '8'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '3,2'
                        },
                    ],
                    extra: `Точная регулировка глубины`,
                    price: 500,
                    imgsrc: require('../assets/Bosch POF 1400.jpg')
                },
                {
                    id: 8,
                    title: 'Торцовочная пила ЗУБР ЗПТ-210-1600 ПЛ',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '1 600'
                        },
                        {
                            spec: 'Диаметр диска, мм',
                            value: '210'
                        },
                        {
                            spec: 'Max глубина пропила под углом 90°, мм',
                            value: '70'
                        },
                        {
                            spec: 'Max ширина пропила под углом 90°, мм',
                            value: '220'
                        },
                        {
                            spec: 'Max глубина пропила под углом 45°, мм',
                            value: '35'
                        },
                        {
                            spec: 'Max ширина пропила под углом 45°, мм',
                            value: '160'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/ЗУБР ЗПТ-210-1600 ПЛ.jpg')
                },
                {
                    id: 9,
                    title: 'Пила циркулярная Фиолент ПД7-75',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '2 300'
                        },
                        {
                            spec: 'Диаметр диска, мм',
                            value: '210'
                        },
                        {
                            spec: 'Посадочный диаметр диска, мм',
                            value: '30'
                        },
                        {
                            spec: 'Max глубина пропила под углом 90°',
                            value: '75'
                        },
                        {
                            spec: 'Max глубина пропила под углом 45°',
                            value: '48'
                        },
                        {
                            spec: 'Число оборотов, об/мин',
                            value: '4800'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '6,5'
                        },
                    ],
                    price: 300,
                    imgsrc: require('../assets/Фиолент ПД7-75.jpg')
                },
                {
                    id: 10,
                    title: 'Электрическая цепная пила Makita UC4041A',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '1 800'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'электрический'
                        },
                        {
                            spec: 'Длина шины, см',
                            value: '40'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '4,7'
                        },
                    ],
                    extra: `Пильная цепь (расходный материал) приобретается отдельно`,
                    price: 400,
                    imgsrc: require('../assets/Makita UC4041A.jpg')
                },
                {
                    id: 11,
                    title: 'Инверторный сварочный аппарат Парма АС-201И',
                    descr: [
                        {
                            spec: 'Мах мощность, Вт',
                            value: '5 300'
                        },
                        {
                            spec: 'Мах ток, А',
                            value: '200'
                        },
                        {
                            spec: 'Min ток, А',
                            value: '10'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '5'
                        },
                    ],
                    extra: `Сетевая вилка в наличии`,
                    price: 300,
                    imgsrc: require('../assets/Парма АС-201И.jpg')
                },
                {
                    id: 12,
                    title: 'Электрический плиткорез PATRIOT TC 600',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '600'
                        },
                        {
                            spec: 'Диаметр диска, мм',
                            value: '180'
                        },
                        {
                            spec: 'Max глубина пропила под углом 90°, мм',
                            value: '34'
                        },
                        {
                            spec: 'Max глубина пропила под углом 45°, мм',
                            value: '27'
                        },
                        {
                            spec: 'Размер рабочего стола, мм',
                            value: '330х360'
                        },
                        {
                            spec: 'Материал обработки',
                            value: 'керамика/камень'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '7,6'
                        },
                    ],
                    price: 1000,
                    imgsrc: require('../assets/Patriot TC600.jpg')
                },
                {
                    id: 13,
                    title: 'Бензиновая мотокоса Интерскол МБ-43/26',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '750'
                        },
                        {
                            spec: 'Мощность, л.с.',
                            value: '1,0'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'бензиновый, 2-тактный'
                        },
                        {
                            spec: 'Толщина лески, мм',
                            value: '2'
                        },
                        {
                            spec: 'Ширина скашивания, см',
                            value: '43'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '5'
                        },
                    ],
                    price: 300,
                    imgsrc: require('../assets/Интерскол МБ-43-26.jpg')
                },
                {
                    id: 14,
                    title: 'Бетономешалка Калибр БСЭ-140',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '600'
                        },
                        {
                            spec: 'Объем барабана, л',
                            value: '140'
                        },
                        {
                            spec: 'Объем готового раствора, л',
                            value: '75'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'электрический'
                        },
                        {
                            spec: 'Скорость вращения, об/мин',
                            value: '26'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '57'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/Калибр БСЭ-140.jpg')
                },
                {
                    id: 15,
                    title: 'Компрессор поршневой PIT P55026',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '2 200'
                        },
                        {
                            spec: 'Давление, атм.',
                            value: '8'
                        },
                        {
                            spec: 'Производительность, л/мин',
                            value: '100'
                        },
                        {
                            spec: 'Объем ресивера, л',
                            value: '50'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '37'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/PIT P55026.jpg')
                },
                {
                    id: 16,
                    title: 'Бензиновая цепная пила Stihl 036',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '3 600'
                        },
                        {
                            spec: 'Объем цилиндра, куб. см.',
                            value: '61,5'
                        },
                        {
                            spec: 'Длина шины, см',
                            value: '40'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '5,7'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/Stihl 036.jpg')
                },
                {
                    id: 17,
                    title: 'Бензиновый генератор Patriot SRGE 950',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '650'
                        },
                        {
                            spec: 'Выходные характеристики',
                            value: '220 В, 16 А, 50 Гц'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'бензиновый, 2-тактный'
                        },
                        {
                            spec: 'Объем двигателя, см3',
                            value: '63'
                        },
                        {
                            spec: 'Расход топлива, л/ч',
                            value: '0,7'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '17'
                        },
                    ],
                    extra: `Ручной старт`,
                    price: 300,
                    imgsrc: require('../assets/Patriot SRGE 950.jpg')
                },
                {
                    id: 18,
                    title: 'Тепловая пушка Kerona 30000',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '29 500'
                        },
                        {
                            spec: 'Площадь обогрева, кв. м',
                            value: '230'
                        },
                        {
                            spec: 'Производительность, м3/ч',
                            value: '765'
                        },
                        {
                            spec: 'Емкость бака, л',
                            value: '38'
                        },
                        {
                            spec: 'Время работы, ч',
                            value: '12'
                        },
                        {
                            spec: 'Расход топлива, л/ч',
                            value: 'до 3,2'
                        },
                        {
                            spec: 'Топливо',
                            value: 'дизельное топливо'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '25'
                        },
                    ],
                    price: 500,
                    imgsrc: require('../assets/Kerona 30000.jpg')

                },
                {
                    id: 19,
                    title: 'Тепловая пушка Ballu BHDP-20',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '20 000'
                        },
                        {
                            spec: 'Площадь обогрева, кв. м',
                            value: '200'
                        },
                        {
                            spec: 'Производительность, м3/ч',
                            value: '550'
                        },
                        {
                            spec: 'Емкость бака, л',
                            value: '12'
                        },
                        {
                            spec: 'Время работы, ч',
                            value: '6'
                        },
                        {
                            spec: 'Расход топлива, л/ч',
                            value: '1,6'
                        },
                        {
                            spec: 'Топливо',
                            value: 'дизельное топливо'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '10,5'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/Ballu BHDP-20.jpg')

                },
                {
                    id: 20,
                    title: 'Бензиновый генератор Кратон GG-6,0ME',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '6 500'
                        },
                        {
                            spec: 'Выходные характеристики',
                            value: '220 В, 16 А, 50 Гц'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'бензиновый, 2-тактный'
                        },
                        {
                            spec: 'Объем двигателя, см3',
                            value: '420'
                        },
                        {
                            spec: 'Расход топлива, л/ч',
                            value: '2,9'
                        },
                        {
                            spec: 'Топливо',
                            value: 'дизельное топливо'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '88'
                        },
                    ],
                    extra: `Электронный старт, ручной старт`,
                    price: 800,
                    imgsrc: require('../assets/Кратон GG-6,0ME.jpg')
                },
                {
                    id: 20,
                    title: 'Шлифмашика эксцентриковая Bosch GEX 125-1 AE',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '250'
                        },
                        {
                            spec: 'Напряжение, В',
                            value: '220'
                        },
                        {
                            spec: 'Диаметр диска, мм',
                            value: '125'
                        },
                        {
                            spec: 'Амплитуда колебаний, мм',
                            value: '2,5'
                        },
                        {
                            spec: 'Число оборотов, об/мин',
                            value: 'от 7500'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '1,3'
                        },
                    ],
                    extra: `Возможность подключения к пылесосу, регулировка
                            количества оборотов`,
                    price: 300,
                    imgsrc: require('../assets/Bosch GEX 125-1 AE.jpg')
                },
                {
                    id: 21,
                    title: 'Плазморез Aurora Airhold 42',
                    descr: [
                        {
                            spec: 'Мощность, кВA',
                            value: '5 300'
                        },
                        {
                            spec: 'Выходной ток, А',
                            value: '15-40'
                        },
                        {
                            spec: 'Давление воздуха, атм.',
                            value: '4-5'
                        },
                        {
                            spec: 'Напряжение, В',
                            value: '220'
                        },
                        {
                            spec: 'Расход воздуха, л/мин',
                            value: '170'
                        },
                        {
                            spec: 'Режущая способность, сталь, мм',
                            value: '9'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '9'
                        },
                    ],
                    price: 700,
                    imgsrc: require('../assets/Aurora Airhold 42.jpg')
                },
                {
                    id: 22,
                    title: 'Болгарка Bosch GWS 22-230H',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '2 000'
                        },
                        {
                            spec: 'Диаметр диска, мм',
                            value: '230'
                        },
                        {
                            spec: 'Скорость вращения, об/мин',
                            value: '6 500'
                        },
                        {
                            spec: 'Напряжение, В',
                            value: '220'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '5,2'
                        },
                    ],
                    price: 400,
                    imgsrc: require('../assets/Bosch GWS 22-230H.jpg')
                },
                {
                    id: 23,
                    title: 'Молоток отбойный Makita HM1100C',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '900'
                        },
                        {
                            spec: 'Число ударов, уд/мин',
                            value: '1 300-2 650'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '5,9'
                        },
                    ],
                    price: 700,
                    imgsrc: require('../assets/Makita HM1100C.jpg')
                },
                {
                    id: 24,
                    title: 'Болгарка AC DC T0044',
                    descr: [
                        {
                            spec: 'Диаметр диска, мм',
                            value: '125'
                        },
                        {
                            spec: 'Скорость вращения, об/мин',
                            value: '8 000'
                        },
                        {
                            spec: 'Тип двигателя',
                            value: 'бесщеточный'
                        },
                        {
                            spec: 'Напряжение аккумулятора, В',
                            value: '18'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '2,3'
                        },
                    ],
                    price: 800,
                    imgsrc: require('../assets/AC DC T0044.jpg')
                },
                {
                    id: 25,
                    title: 'Компрессор Кратон 300/50',
                    descr: [
                        {
                            spec: 'Давление, атм',
                            value: '10'
                        },
                        {
                            spec: 'Объем ресивера, л',
                            value: '50'
                        },
                        {
                            spec: 'Производительность, л/мин',
                            value: '300'
                        },
                        {
                            spec: 'Напряжение, В',
                            value: '220'
                        },
                        {
                            spec: 'Расход топлива, л/ч',
                            value: '2,9'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '70'
                        },
                    ],
                    extra: `Ременной привод`,
                    price: 600,
                    imgsrc: require('../assets/Кратон 300-50.jpg')
                },
                {
                    id: 26,
                    title: 'Рубанок ТУ-4883',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '1 100'
                        },
                        {
                            spec: 'Ширина строгания, мм',
                            value: '100'
                        },
                        {
                            spec: 'Мах глубина строгания, мм',
                            value: '3'
                        },
                        {
                            spec: 'Обороты, об/мин',
                            value: '9 000'
                        },
                        {
                            spec: 'Напряжение, В',
                            value: '220'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '4'
                        },
                    ],
                    price: 500,
                    imgsrc: require('../assets/ТУ-4883.jpg')
                },
                {
                    id: 27,
                    title: 'Тепловая пушка Kerona 50000',
                    descr: [
                        {
                            spec: 'Мощность, Вт',
                            value: '41 000'
                        },
                        {
                            spec: 'Площадь обогрева, м2',
                            value: '335'
                        },
                        {
                            spec: 'Производительность, м3/ч ',
                            value: '935'
                        },
                        {
                            spec: 'Емкость бака, л',
                            value: '49'
                        },
                        {
                            spec: 'Время работы, ч',
                            value: '12'
                        },
                        {
                            spec: 'Расход топлива, л/ч',
                            value: 'до 4,2'
                        },
                        {
                            spec: 'Топливо',
                            value: 'дизельное топливо'
                        },
                        {
                            spec: 'Вес, кг',
                            value: '28'
                        },
                    ],
                    price: 800,
                    imgsrc: require('../assets/Kerona 50000.jpg')
                },
                // {
                //     id: 28,
                //     title: 'Бензиновый генератор Кратон 6,5 кВт',
                //     descr: [
                //         {
                //             spec: 'Мощность, Вт',
                //             value: '6 500'
                //         },
                //         {
                //             spec: 'Выходные характеристики',
                //             value: '220 В, 16 А, 50 Гц'
                //         },
                //         {
                //             spec: 'Тип двигателя',
                //             value: 'бензиновый, 2-тактный'
                //         },
                //         {
                //             spec: 'Объем двигателя, см3',
                //             value: '420'
                //         },
                //         {
                //             spec: 'Расход топлива, л/ч',
                //             value: '2,9'
                //         },
                //         {
                //             spec: 'Топливо',
                //             value: 'дизельное топливо'
                //         },
                //         {
                //             spec: 'Вес, кг',
                //             value: '88'
                //         },
                //     ],
                //     extra: `Электронный старт, ручной старт`,
                //     price: 800,
                //     imgsrc: require('../assets/Кратон DHE-1700.jpg')
                // },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../css/_variables";

.search {
    margin: $gap-md auto;
    width: 100%;
}

.nothing-founded {
    font-size: calc($text-md * 2);
    margin: $gap-md auto;
    color: $color-secondary;
}

.card-list {
    display: flex;
    flex-direction: column;
    margin: $gap-md auto;
    gap: $gap-md;
}
</style>