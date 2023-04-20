import styles from "./App.module.scss"
import { AllItems } from "./components/allItems/AllItems";
import { NewItemForm } from "./components/newItemForm/NewItemForm";
import { Iitem } from "./interfaces/Iitem";
import { groceryList } from '../src/data/groceryList';
import { useState } from "react";

function App() {
  const [itemList, setItemList]=useState<Iitem[]>([{Id:0, Name: "", Department: ""}]);
  const addItem=(item:Iitem)=>{
    setItemList((prevItems)=>{
      return[...prevItems, item]
    }
    );
  }

  const removeItem=(itemToRemove:Iitem)=>{
    const itemsToKeep=itemList.filter((item:Iitem)=>{
      return item.Id!=itemToRemove.Id
  })
  setItemList(itemsToKeep)
  console.log(itemsToKeep)
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
