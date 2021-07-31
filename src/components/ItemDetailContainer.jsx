import React,{useEffect, useState} from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom';



function ItemDetailContainer() {
    const [itemList, setItemList] = useState([])  
    const {itemId}= useParams()  
    console.log(itemId);
    useEffect(() => {
        const items=
        [{
          "id": 1,
          "name": "Kirschbaum",
          "img": 'https://img.tennis-warehouse.com/cache/100/PL2130BK-1.jpg',
          "characteristic": "Pro Line 2",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":1400
        }, {
          "id": 2,
          "name": "Kirschbaum",
          "img": 'https://img.tennis-warehouse.com/cache/100/KFLASH-BK-1.jpg',
          "characteristic": "Max Power",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":1600
        }, {
          "id": 3,
          "name": "Kirschbaum",
          "img": 'https://img.tennis-warehouse.com/cache/100/PLE2125BLU-1.jpg',
          "characteristic": "Super Smash Orange",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":1100
        }, {
          "id": 4,
          "name": "Zons",
          "img": 'https://img.tennis-warehouse.com/cache/100/ISOCC16-1.jpg',
          "characteristic": "Polymo Tour",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":900
        }, {
          "id": 5,
          "name": "Zons",
          "img": 'https://img.tennis-warehouse.com/cache/100/ISOCC16-1.jpg',
          "characteristic": "Polymo Xplosion",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":900
        }, {
          "id": 6,
          "name": "Luxilon",
          "img": 'https://img.tennis-warehouse.com/cache/100/APRGS16-1.jpg',
          "characteristic": "Alu Power",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":1900
        }, {
          "id": 7,
          "name": "Luxilon",
          "img": 'https://img.tennis-warehouse.com/cache/100/APRGS16-1.jpg',
          "characteristic": "Original",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":1900
        }, {
          "id": 8,
          "name": "Yonex",
          "img": 'https://img.tennis-warehouse.com/cache/100/YPTR16L-1.jpg',
          "characteristic": " Poly Tour",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":1000
        }, {
          "id": 9,
          "name": "Yonex",
          "img": 'https://img.tennis-warehouse.com/cache/100/YPTS16BK-1.jpg',
          "characteristic": " Poly Tour Drive",
          "description":"A thin and ultra spin friendly version of one of the most iconic strings of the modern tennis era. This one offers unmatched feel for a firm monofilament. ",
          "category":"string",
          "price":1100
        }, {
          "id": 10,
          "name": "Head",
          "img": 'https://img.tennis-warehouse.com/cache/100/VMLT17-BK-1.jpg',
          "characteristic": "Master",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":2700
        },
        {
          "id": 11,
          "name": "Babolat",
          "img": 'https://img.tennis-warehouse.com/cache/56/USPARA-thumb.jpg',
          "characteristic": "Pure Drive",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":1450
        }, {
          "id": 12,
          "name": "Babolat",
          "img": 'https://img.tennis-warehouse.com/cache/56/BPAR-thumb.jpg',
          "characteristic": "Pure Control",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":1650
        }, {
          "id": 13,
          "name": "Babolat",
          "img": 'https://img.tennis-warehouse.com/cache/56/BPAR-thumb.jpg',
          "characteristic": "Pure Drive+",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":1400
        }, {
          "id": 14,
          "name": "Babolat",
          "img": 'https://img.tennis-warehouse.com/cache/56/BPAR-thumb.jpg',
          "characteristic": "Pure Control +",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":11900
        }, {
          "id": 15,
          "name": "Babolat",
          "img": 'https://img.tennis-warehouse.com/cache/56/BPAR-thumb.jpg',
          "characteristic": "Pure Aero",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":11900
        }, {
          "id": 16,
          "name": "Babolat",
          "img": 'https://img.tennis-warehouse.com/cache/56/BPAR-thumb.jpg',
          "characteristic": "Pure Storm",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":1910
        }, {
          "id": 17,
          "name": "Babolat",
          "img": 'https://img.tennis-warehouse.com/cache/56/BPAR-thumb.jpg',
          "characteristic": "Strike",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":11900
        }, {
          "id": 18,
          "name": "Yonex",
          "img": 'https://img.tennis-warehouse.com/cache/56/YEZ98T-thumb.jpg',
          "characteristic": "RDS 001",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":11000
        }, {
          "id": 19,
          "name": "Yonex",
          "img": 'https://img.tennis-warehouse.com/cache/56/YE98NO-thumb.jpg',
          "characteristic": "v-Core 100",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":10100
        }, {
          "id": 20,
          "name": "Head",
          "img": 'https://img.tennis-warehouse.com/cache/56/HGRATR-thumb.jpg',
          "characteristic": "Master",
          "description":"Endorsed by Rafael Nadal, this special cosmetic version of the Pure Aero will give you the tools to hit a heavy spin-loaded ball. Ideal for intermediate and advanced players. Headsize: 100in² String Pattern: 16x19. Standard Length.",
          "category":"racket",
          "price":1700
        }] 
    
        const task = new Promise((resuelto, rechazado)=>{
            //console.log('promesa')
            let status=200
            if(status===200){
    
                setTimeout(()=>{
                  resuelto(items)
                },2000)
            }else{
                rechazado('rechazado')
            }
    
    
        })
        const getPromiseTask=()=>{
            return task
        }
        if(itemId===undefined){
          getPromiseTask()
          .then((resp)=> setItemList(resp))    
        }else{
          getPromiseTask()
          .then((resp)=> setItemList(resp.filter(it=>it.id===Number(itemId))))   
        }        

    },[itemId])
    return (

      <div >

      <h1> Detalle del Producto</h1>

          <ul>

          <ItemDetail itemList={itemList} />
        </ul>



      </div>
    )
}

export default ItemDetailContainer
