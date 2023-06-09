import styles from "./App.module.scss"
import { AllItems } from "./components/allItems/AllItems";
import { NewItemForm } from "./components/newItemForm/NewItemForm";
import { Iitem } from "./interfaces/Iitem";
import { useEffect, useState } from "react";

function App() {
  const [itemList, setItemList]=useState<Iitem[]>([]);
  let firstLoad=false;

  useEffect(() => {
    const items =JSON.parse(localStorage.getItem('items')as any);
    if (items) {
      setItemList(items);
    }
    firstLoad=true;
  }, []);


    useEffect(() => {
      if(!firstLoad){
        localStorage.setItem('items', JSON.stringify(itemList));
      }
    }, [itemList]);

  const itemListHandler=(item:Iitem)=>{
    if (itemList.length>0){
      setItemList((prevItems)=>{
        return[...prevItems, item]
        }
      )
    }
    else {
      console.log("inte mer än noll")

      setItemList([item]);
    }
  }
  const addItem=(item:Iitem)=>{
    console.log("i addItem & adderar " + item.Name)
    itemListHandler(item)
  }


  const removeItem=(itemToRemove:Iitem)=>{
    const itemsToKeep=itemList.filter((item:Iitem)=>{
      return item.Id!=itemToRemove.Id
  })
      setItemList(itemsToKeep)
  }


  return (
    <div className={styles.app}>
     <h1 className={styles.heading}>Shoppinglistan</h1>
     <NewItemForm onAddItem={addItem}/>
     <AllItems removeItem={removeItem} items={itemList}/>
    </div>
  );
}

export default App;
