import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {IMenu, IDish} from './model';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const menu = [
      {
        id: 1,
        name: 'Breakfast (06:00 - 11:45)',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/breakfast.jpg'
      },
      {
        id: 2,
        name: 'Hot meals',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/133-min.jpg'
      },
      {
        id: 3,
        name: ' Side dishes',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/135-min.jpg'
      },
      {
        id: 4,
        name: 'Snacks',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/113.jpg'
      },
      {
        id: 5,
        name: 'Salads',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/01/maxresdefault.jpg'
      },
      {
        id: 6,
        name: 'Soups',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/134-min.jpg'
      }
      ,
      {
        id: 7,
        name: 'Barbecue and grill',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/02/137-min.jpg'
  }
      ,
      {
        id: 8,
        name: 'Desserts',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/11/shokoladnoe-nastroenie-min.jpg'
      }
      ,
      {
        id: 9,
        name: 'Drinks',
        image_url_menu: 'https://ala.basilic.kz/wp-content/uploads/2019/07/Arbuznyj-fresh-min.jpg'
      }
      ];
    const dishes = [
      { id: 81,
      menu: 9,
      name: 'Apple',
      price: 1200,
      image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Apple-0x430.png',
      description: '280ml.'
  },

      {
        id: 82,
        menu: 9,
        name: 'PAGO Cherry',
        price: 1200,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Cherry-0x430.jpg',
        description: '200ml'
      }
      ,
      {
        id: 83,
        menu: 9,
        name: 'PAGO Orange',
        price: 1200,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Orange-0x430.png',
        description: '200ml'
      }
      ,
      {
        id: 84,
        menu: 9,
        name: 'PAGO Tomato',
        price: 1200,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/PAGO_Tomato-0x430.png',
        description: '200ml'
      }
      ,
      {
        id: 85,
        menu: 9,
        name: 'Tassay б/г',
        price: 350,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/TAL/Drinks/Tassay_bez-0x430.jpg',
        description: '500ml'
      }
      ,
      {
        id: 86,
        menu: 9,
        name: 'Borjomi',
        price: 800,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/borjomi-330ml-0x430.jpg',
        description: '330ml'
      }
      ,
      {
        id: 87,
        menu: 9,
        name: 'Tassay Excellent * still',
        price: 1400,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/tassayexellent0,75-0x430.jpg',
        description: '750ml'
      }
      ,
      {
        id: 88,
        menu: 9,
        name: 'Reserve Negroni',
        price: 2500,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/ReserveNegroni2-0x430.jpg',
        description: 'Gin, Martini Rubino, Campari Bitter. 140ml.'
      }
      ,
      {
        id: 89,
        menu: 9,
        name: 'Whiskey Sour 2.0',
        price: 2500,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/WhiskeySour6-0x430.jpg',
        description: 'Whiskey, Apple Acid, Sugar. 140ml'
      }
      ,
      {
        id: 90,
        menu: 9,
        name: 'Pina Colada 2.0',
        price: 2500,
        image_url: 'https://delivery.pgr.kz/image/cache/catalog/Bar/Bottlecoctails/PinaCalada6-0x430.jpg',
        description: 'Rum, Pineapple, Coconut. 140ml'
      }

    ];
    return {dishes, menu};
  }

// ,
x
//   genId(menu: IMenu[]): number {
//     return menu.length > 0 ? Math.max(...menu.map( menuitem => menuitem.id)) + 1 : 1;
//   }
  constructor() { }
}
