import phila from './img/sushi/Roll_Philadelphiya.jpg'
import syake from './img/sushi/Roll_Syake.jpg'
import unagi from './img/sushi/Roll_Unagi.jpg'
import tekka from './img/sushi/Roll_Tekka.jpg'
import talat from './img/sushi/Roll_Talat.jpg'
import sushiSyake from './img/sushi/Sushi_Syake_Kunsei.jpg'
import sushiUnagi from './img/sushi/Sushi_Unagi.jpg'
import maguro from './img/sushi/Sushi_Maguro.jpg'
import ebi from './img/sushi/Sushi_Ebi.jpg'
import abokado from './img/sushi/Sushi_abokado.jpg'

export default {
    menu: [
        {
            group: 'Суши',
            items: [
                {
                    name: 'Сякэ',
                    inside: 'с лососем',
                    price: 75,
                    mass: 50,
                    img: sushiSyake,
                    special: 'hit',
                    id: 1
                },
                {
                    name: 'Унаги',
                    inside: 'с копченым угрем',
                    price: 110,
                    mass: 65,
                    img: sushiUnagi,
                    special: '',
                    id: 2
                },
                {
                    name: 'Магуро',
                    inside: 'с тунцом',
                    price: 95,
                    mass: 50,
                    img: maguro,
                    special: '',
                    id: 3
                },
                {
                    name: 'Эби',
                    inside: 'с угрем',
                    price: 85,
                    mass: 55,
                    img: ebi,
                    special: 'hit',
                    id: 4
                },
                {
                    name: 'Абокадо',
                    inside: 'с авокадо',
                    price: 55,
                    mass: 60,
                    img: abokado,
                    special: 'veg',
                    id: 5
                }
            ]
        },
        {
            group: 'Роллы',
            items: [
                {
                    name: 'Филадельфия',
                    inside: 'с лососем',
                    price: 435,
                    mass: 250,
                    img: phila,
                    special: 'hit',
                    id: 6
                },
                {
                    name: 'Сякэ ролл',
                    inside: 'с лососем',
                    price: 210,
                    mass: 190,
                    img: syake,
                    special: '',
                    id: 7
                },
                {
                    name: 'Тэкка ролл',
                    inside: 'с тунцом',
                    price: 245,
                    mass: 190,
                    img: tekka,
                    special: '',
                    id: 8
                },
                {
                    name: 'Унаги ролл',
                    inside: 'с угрем',
                    price: 245,
                    mass: 190,
                    img: unagi,
                    special: 'hit',
                    id: 9
                },
                {
                    name: 'Яки Хамачи',
                    inside: 'с жареным желтохвостиком',
                    price: 55,
                    mass: 230,
                    img: talat,
                    special: '',
                    id: 10
                }
            ]
        }
    ]
}