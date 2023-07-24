import { ProductTypes } from '@/types';
import { Images } from '.';

export const PRODUCTS: ProductTypes.Type[] = [
  {
    id: '1',
    category: 'earrings',
    name: 'Lira Earrings',
    price: 20,
    images: [
      Images.LIRA_EARRINGS,
      Images.KAEDE_HAIR_PIN,
      Images.OLLIE_EARRINGS,
    ],
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam placerat mi at nisl interdum, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies.',
  },
  {
    id: '2',
    category: 'earrings',
    name: 'Ollie Earrings',
    price: 30,
    images: [Images.OLLIE_EARRINGS],
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam placerat mi at nisl interdum, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies.',
  },
  {
    id: '3',
    category: 'necklace',
    name: 'Plaine Necklace',
    price: 30,
    images: [Images.PLAINE_NECKLACE],
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam placerat mi at nisl interdum, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies.',
  },
  {
    id: '4',
    category: 'hair-pin',
    name: 'Yuki Hair Pin',
    price: 29,
    images: [Images.YUKI_HAIR_PIN],
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam placerat mi at nisl interdum, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies.',
  },
  {
    id: '5',
    category: 'hair-pin',
    name: 'Kaede Hair Pin',
    price: 30,
    images: [Images.KAEDE_HAIR_PIN],
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam placerat mi at nisl interdum, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies.',
  },
  {
    id: '6',
    category: 'hair-pin',
    name: 'Hair Pin Set of 3',
    price: 20,
    images: [Images.HAIR_PIN_SET_OF_3],
    overview:
      'Lorem ipsum dolor sit amet, consectetur adipisce elit. Aliquam placerat mi at nisl interdum, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies, ut eleifend nisl ultricies. Nulla facilisi. Donec euismod, nisl eget aliquam ultricies, nisl nisl ultricies.',
  },
];
