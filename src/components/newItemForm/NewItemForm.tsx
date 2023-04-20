import { useState } from 'react'
import departments from '../../data/departments.json'
import { Iitem } from '../../interfaces/Iitem';
import styles from './NewItemForm.module.scss'


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

  return (
    <form className={styles.form} onSubmit={addToGroceryList}>
      <div className={styles.formItemContainer}>
        <div className={styles.formItem}>
          <label>Namn</label>
          <input className={isValidName?"":styles.invalidInput} value={itemName} onChange={e=>setItemName(e.target.value.trim())}/>
        </div>
          {!isValidName&&
            <p className={styles.errorMessage}>Ange ett namn</p>
          }
        <div className={styles.formItem}>
          <label>Antal</label>
          <input type="number" value={itemAmount} onChange={e=>setItemAmount(e.target.value)}/>
        </div>
        <div  className={styles.formItem}>
          <label>Avdelning</label>
            <select onChange={e=>setItemDepartment(e.target.value)} value={itemDepartment}>
              {departments.Departments.map(dep=>
                  <option value={dep}>{dep}</option>
              )
            }
          </select>
        </div>
        <button className={styles.submitButton} type='submit'>Lägg till</button>
      </div>
        {/* <button onClick={()=>addToGroceryList()}>Lägg till</button> */}
    </form>
  )
}
