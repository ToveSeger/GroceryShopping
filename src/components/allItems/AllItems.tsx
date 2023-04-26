import { useEffect, useState } from "react"
import {Item} from "../item/Item"
import { Iitem } from "../../interfaces/Iitem"
import styles from './AllItems.module.scss'
import { FilterDropDown } from "../filterDropDown/FilterDropDown"

export const AllItems = (props:any) => {
  const [departmentToFilterBy, setDepartmentToFilterBy]=useState("");
  const [itemsToMap, setItemsToMap]=useState([]);


useEffect(()=>{
  console.log("i use effect")
    setItemsToMap(props.items)
    console.log(itemsToMap)
    console.log(itemsToMap.length)
},[props.items])

const filterHandler=(department:string)=>{
  setDepartmentToFilterBy(department);
  console.log(itemsToMap)
  setItemsToMap(props.items.filter((item:Iitem)=>{
  return item.Department===department
  }));
  console.log(props.items.filter((item:Iitem)=>{
    return item.Department===department
    }))
}



const removeItem =(item:Iitem)=>{
  console.log(item)
  props.removeItem(item);
}

const noItemElement=props.items.length==0 && departmentToFilterBy==""?<p>Inga varor</p>:<p>Inga varor i kategorin {departmentToFilterBy.toLowerCase()} än</p>;


return (
  <div className={styles.allItemsContainer}>
      <h2 className={styles.heading}>Din shoppinglista</h2>
      <FilterDropDown className={styles.filter} filterMethod={filterHandler}/>
        <ul>
          {itemsToMap.length>0?
          itemsToMap.map((item:Iitem, index) =>
          <li key={index}>
              <Item
              key={item.Id}
              item={item}
              removeItem={removeItem}
              />
          </li>
          )
            : noItemElement
          }
        </ul>
      </div>
  )
}
