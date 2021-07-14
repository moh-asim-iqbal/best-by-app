import './styles.scss'
import { useState } from 'react'
import api from '../api'
import logo from '../components/img/food.png'
export default function ItemsInsert(props) {
    const [itemName, setItemName] = useState('')
    const [itemExpiry, setItemExpiry] = useState('')
    const [itemQuantity, setItemQuantity] = useState(0)
    


    const handleChangeInputName = async event => {
        const newName = event.target.value
        setItemName (newName)
    }

    const handleChangeInputExpiry = async event => {
        const newExpiry = event.target.validity.valid 
            ? event.target.value 
            : itemExpiry
        setItemExpiry(newExpiry.slice(0,10))

    }

    const handleChangeInputQuantity = async event => {
        const newQuantity = event.target.validity.valid
            ? event.target.value 
            : itemQuantity
        
        setItemQuantity(newQuantity)
    }

    const handleIncludeItem = async () => {
        const payload = { "name":itemName, "expiry":itemExpiry.slice(0,10), "quantity":itemQuantity}

        await api.insertItem(payload).then(res => {
            window.alert('Item added!')
            setItemName('')
            setItemExpiry('')
            setItemQuantity(0)
        }).then( rej => {
            console.log(rej)
        })
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
        
        // <div className="base-container">
            
            
        //     <div className="content">
        //         <div className="title">
        //             <h1>Create Item</h1>
        //         </div>
        //         <div className="form-container">
        //             <div>
        //                 <label className="create-label">Name:</label>
        //                 <input
        //                     className= "text-input" 
        //                     type="text"
        //                     value={itemName}
        //                     onChange={handleChangeInputName}
        //                 />
        //             </div>
                    

        //             <div className="form-group">
        //                 <label className="create-label">Expiry:</label>
        //                 <input 
        //                     type="date"
        //                     className= "date-input" 
        //                     value={itemExpiry}
        //                     onChange={handleChangeInputExpiry}
        //                     min={minDate()}
        //                     placeholder="date"
        //                 />
        //             </div>

        //             <div className="form-group">
        //                 <label className="create-label">Quantity</label>
        //                 <input 
        //                     type="number"
        //                     className= "number-input" 
        //                     value={itemQuantity}
        //                     onChange={handleChangeInputQuantity}
        //                 />
        //             </div>

        //             <div>
        //                 <button onClick={handleIncludeItem}>Add Item</button>
        //                 <button href={'/items/list'}>Cancel</button>
        //             </div>
        //         </div>
        //     </div>
            
        //     <img className="create-image" src={logo} alt="logo"/>
        // </div>

        <div className="base-container">
            <div className="image">
                    <img src={logo} alt="logo"/>
                </div>
            <div className="content">
                <div className="header">Create Item</div>
                
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="itemName">Item Name</label>
                        <input 
                            type="text" 
                            name="itemName" 
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
                        />
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={handleIncludeItem}>
                    Add
                </button>
            </div>
      </div>
        
    )
}