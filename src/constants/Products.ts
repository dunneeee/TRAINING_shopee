import { ProductTypes } from '@/types';
import { Images } from '.';

export const SORT_LIST: ProductTypes.ShortType[] = [
  {
    category: 'earrings',
    id: '1',
    image: Images.LIRA_EARRINGS,
    name: 'Lira Earrings',
    price: 20,
  },
  {
    category: 'earrings',
    id: '2',
    image: Images.OLLIE_EARRINGS,
    name: 'Ollie Earrings',
    price: 30,
  },
  {
    category: 'necklace',
    id: '3',
    image: Images.PLAINE_NECKLACE,
    name: 'Plaine Necklace',
    price: 30,
  },
  {
    category: 'hair-pin',
    id: '4',
    image: Images.YUKI_HAIR_PIN,
    name: 'Yuki Hair Pin',
    price: 29,
  },
  {
    category: 'hair-pin',
    id: '5',
    image: Images.KAEDE_HAIR_PIN,
    name: 'Kaede Hair Pin',
    price: 30,
  },
  {
    category: 'hair-pin',
    id: '6',
    image: Images.HAIR_PIN_SET_OF_3,
    name: 'Hair Pin Set of 3',
    price: 20,
  },
];
