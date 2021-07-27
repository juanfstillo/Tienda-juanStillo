import React,{useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import ItemList from './ItemList'


function ItemDetailContainer() {
    const [itemList, setItemList] = useState([])    
    useEffect(() => {
        const items=
            [{
                "id": 1,
                "name": "Kirschbaum",
                "img": 'https://img.tennis-warehouse.com/cache/100/PL2130BK-1.jpg',
                "characteristic": "Pro Line 2",
                "price":1400
              }, {
                "id": 2,
                "name": "Kirschbaum",
                "img": 'https://img.tennis-warehouse.com/cache/100/KFLASH-BK-1.jpg',
                "characteristic": "Max Power",
                "price":1600
              }, {
                "id": 3,
                "name": "Kirschbaum",
                "img": 'https://img.tennis-warehouse.com/cache/100/PLE2125BLU-1.jpg',
                "characteristic": "Super Smash Orange",
                "price":1100
              }, {
                "id": 4,
                "name": "Zons",
                "img": 'https://img.tennis-warehouse.com/cache/100/ISOCC16-1.jpg',
                "characteristic": "Polymo Tour",
                "price":900
              }, {
                "id": 5,
                "name": "Zons",
                "img": 'https://img.tennis-warehouse.com/cache/100/ISOCC16-1.jpg',
                "characteristic": "Polymo Xplosion",
                "price":900
              }, {
                "id": 6,
                "name": "Luxilon",
                "img": 'https://img.tennis-warehouse.com/cache/100/APRGS16-1.jpg',
                "characteristic": "Alu Power",
                "price":1900
              }, {
                "id": 7,
                "name": "Luxilon",
                "img": 'https://img.tennis-warehouse.com/cache/100/APRGS16-1.jpg',
                "characteristic": "Original",
                "price":1900
              }, {
                "id": 8,
                "name": "Yonex",
                "img": 'https://img.tennis-warehouse.com/cache/100/YPTR16L-1.jpg',
                "characteristic": " Poly Tour",
                "price":1000
              }, {
                "id": 9,
                "name": "Yonex",
                "img": 'https://img.tennis-warehouse.com/cache/100/YPTS16BK-1.jpg',
                "characteristic": " Poly Tour Drive",
                "price":1100
              }, {
                "id": 10,
                "name": "Head",
                "img": 'https://img.tennis-warehouse.com/cache/100/VMLT17-BK-1.jpg',
                "characteristic": "Master",
                "price":700
              }] 
    
        const task = new Promise((resuelto, rechazado)=>{
            //console.log('promesa')
            let status=200
            if(status===200){
    
                setTimeout(()=>{
                    resuelto(items.filter(item => item.id === 1))
                },2000)
            }else{
                rechazado('rechazado')
            }
    
    
        })
        const getPromiseTask=()=>{
            return task
        }
        getPromiseTask()
    .then((resp)=> setItemList(resp))    
    .catch(err=> { console.log('El error es',err)})    
    
        
    },[])

    console.log(itemList)
    return (
        <div >
        <h1>Soy Item Detail Container</h1>
            <ul>
            <ItemList itemList={itemList} />
          </ul>

        </div>
    )
}

export default ItemDetailContainer
