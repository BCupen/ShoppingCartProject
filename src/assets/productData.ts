import ddf from './productImages/dry-dog-food.png';
import wdf from './productImages/wet-dog-food.png';
import dt from './productImages/dog-treats.png';
import dtb from './productImages/dog-toy-balls.png';
import dcf from './productImages/dry-cat-food.png';
import wcf from './productImages/wet-cat-food.png';
import cl  from './productImages/cat-litter.png';
import ctm from './productImages/cat-toys.png';
import ff from './productImages/fish-food.png';
import ft from './productImages/fish-tank.png';

import _ from "lodash"


export const products = [
    {
        key: '101',
        name: 'Dry Dog Food',
        cost: '350',
        imgSrc: ddf,
        category: 'dog'
    },
    {
        key: '102',
        name: 'Wet Dog Food',
        cost: '500',
        imgSrc: wdf,
        category: 'dog'
    },
    {
        key: '103',
        name: 'Dog Treats',
        cost: '200',
        imgSrc: dt,
        category: 'dog'
    },
    {
        key: '104',
        name: 'Dry Cat Food',
        cost: '300',
        imgSrc: dcf,
        category: 'cat'
    },
    {
        key: '105',
        name: 'Wet Cat Food',
        cost: '400',
        imgSrc: wcf,
        category: 'cat'
    },
    {
        key: '106',
        name: 'Cat Litter',
        cost: '200',
        imgSrc: cl,
        category: 'cat'
    },
    {
        key: '107',
        name: 'Fish Food',
        cost: '100',
        imgSrc: ff,
        category: 'fish'
    },
    {
        key: '108',
        name: 'Fish Tank',
        cost: '1000',
        imgSrc: ft,
        category: 'fish'
    },
]