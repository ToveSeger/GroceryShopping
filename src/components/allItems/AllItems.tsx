import { useEffect, useState } from "react"
import { groceryList } from "../../data/groceryList"
import {Item} from "../item/Item"
import { Iitem } from "../../interfaces/Iitem"
import styles from './AllItems.module.scss'
import { FilterDropDown } from "../filterDropDown/FilterDropDown"

export const AllItems = (props:any) => {
  const [departmentToFilterBy, setDepartmentToFilterBy]=useState("");
  props.items.forEach((item:Iitem) => {
    if(item.Name.length==0)props.items.pop(item)
});

const filterHandler=(department:string)=>{
  console.log(props.items)
  setDepartmentToFilterBy(department)
  console.log(departmentToFilterBy)
}

const removeItem =(item:Iitem)=>{
  console.log(item)
  props.removeItem(item);
}
const filteredItems=props.items.filter((item:Iitem)=>{
    return item.Department===departmentToFilterBy
})

return (
    <div className={styles.allItemsContainer}>
      <h2 className={styles.heading}>Din shoppinglista</h2>
      <FilterDropDown className={styles.filter} filterMethod={filterHandler}/>
        <ul>
            {departmentToFilterBy==""&&
              props.items.map((item:Iitem) =>
                <li>
                    <Item
                    key={item.Id}
                    item={item}
                    removeItem={removeItem}
                    />
                </li>
              )
            }
        {departmentToFilterBy!=""&&
            filteredItems.map((item:Iitem) =>
              <li>
                  <Item
                  key={item.Id}
                  item={item}
                  />
              </li>
            )
        }
        </ul>
    </div>

  )
}
