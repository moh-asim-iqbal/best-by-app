import './styles.scss'
import { useState, useEffect } from 'react'
import api from '../api'
import logo from '../components/img/food.png'
export default function ItemsUpdate(props) {
    const [itemName, setItemName] = useState('')
    const [itemExpiry, setItemExpiry] = useState('')
    const [itemQuantity, setItemQuantity] = useState(1)
    


    const handleChangeInputName = async event => {
        const newName = event.target.value
        setItemName (newName)
    }

    const handleChangeInputExpiry = async event => {
        const newExpiry = event.target.validity.valid 
            ? event.target.value 
            : itemExpiry
        setItemExpiry(newExpiry)
        console.log(newExpiry)

    }

    const handleChangeInputQuantity = async event => {
        const newQuantity = event.target.validity.valid
            ? event.target.value 
            : itemQuantity
        
        setItemQuantity(newQuantity)
    }

    useEffect( () => {
        
        const fetchItem = async () => {
            await api.getItemById(props.match.params.id).then(result => {
                setItemName(result.data.data.name)
                setItemExpiry(result.data.data.expiry.slice(0,10))
                setItemQuantity(result.data.data.quantity)
            })
            
            
        }
        fetchItem()
        // eslint-disable-next-line
    },[])
 

    const handleUpdateItem = async () => {
        const payload = { "name":itemName, "expiry":itemExpiry.slice(0,10), "quantity":itemQuantity}
  
        await api.updateItemById(props.match.params.id,payload).then(res => {
            window.alert('Item updated!')
            window.location.href = `/items/list`

        }).then( rej => {
            console.log(rej)
        })
    } 

    const handleCancel = event => {
        event.preventDefault()
        window.location.href= `/items/list`
    }

    const minDate = () => {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; 
        var yyyy = today.getFullYear();
        if(dd<10){
        dd='0'+dd
        } 
        if(mm<10){
        mm='0'+mm
        } 

        today = yyyy+'-'+mm+'-'+dd;
        console.log(today)
        return today
    }

    
    return (
        <div className="base-container">
            <div className="image">
                    <img src={logo} alt="logo"/>
                </div>
            <div className="content">
                <div className="header">Update Item</div>
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Item Name</label>
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="name" 
                            value={itemName}
                            onChange={handleChangeInputName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="expiry">Expiry Date</label>
                        <input 
                            type="date"
                            className= "date-input" 
                            value={itemExpiry}
                            onChange={handleChangeInputExpiry}
                            min={minDate()}
                            name="expiry"
                    />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input 
                            name="quantity"
                            type="number"
                            className= "number-input" 
                            value={itemQuantity}
                            onChange={handleChangeInputQuantity}
                            min="1"
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleUpdateItem}>
                    Update
                </button>&nbsp;&nbsp;&nbsp; 
                <button type="button" className="btn" onClick={handleCancel}>Cancel</button>
            </div>
        </div>

    )
}