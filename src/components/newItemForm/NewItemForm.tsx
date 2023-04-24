import { useState } from 'react'
import departments from '../../data/departments.json'
import { Iitem } from '../../interfaces/Iitem';
import styles from './NewItemForm.module.scss'
import { Button } from '../UI/Button';
import { Modal } from '../UI/Modal';
import ReactDom from "react-dom";


export const NewItemForm = (props:any) => {
    const [itemName, setItemName]=useState("");
    const [itemDepartment, setItemDepartment]=useState("");
    const [itemAmount, setItemAmount]=useState("");
    const [isValidName, setIsValidName]=useState(true);

    const addToGroceryList=(e:any)=>{
      e.preventDefault();
      const reqDataFilled=nullCheck();
      if(reqDataFilled){
        const itemToAdd:Iitem={
            Id:Math.floor(Math.random() * 100),
            Name:itemName,
            Amount: itemAmount!=""?Number(itemAmount):1,
            Department:itemDepartment!=""?itemDepartment:"Avd. saknas"
        }
        props.onAddItem(itemToAdd);
        setItemName("");
        setItemDepartment("");
        setItemAmount("");
      }
  }

  const nullCheck=()=>{
    const nameIsFilled= itemName.length>0;
  setIsValidName(nameIsFilled);
  return nameIsFilled;
  }

  const toggleModalVisibility=()=>{
    setIsValidName(true);
  }

  return (
    <form className={styles.form} onSubmit={addToGroceryList}>
      <div className={styles.formItemContainer}>
        <div className={styles.formItem}>
          <label htmlFor="Name">Namn</label>
          <input id="Name" className={isValidName?"":styles.invalidInput} value={itemName} onChange={e=>setItemName(e.target.value.trim())}/>
        </div>
          {!isValidName&&
            // <p className={styles.errorMessage}>Ange ett namn</p>
            <Modal Title="Ogiltigt värde" Message="Du måste fylla i ett namn" onDismiss={toggleModalVisibility}/>
          }
        <div className={styles.formItem}>
          <label htmlFor="Amount">Antal</label>
          <input id="Amount" type="number" value={itemAmount} onChange={e=>setItemAmount(e.target.value)}/>
        </div>
        <div  className={styles.formItem}>
          <label htmlFor="Department">Avdelning</label>
            <select id="Department" onChange={e=>setItemDepartment(e.target.value)} value={itemDepartment}>
              {departments.Departments.map((dep, index)=>
                  <option key={index} value={dep}>{dep}</option>
              )
            }
          </select>
        </div>
        <Button>Lägg till</Button>
      </div>
    </form>
  )
}
