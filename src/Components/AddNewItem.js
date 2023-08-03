import { useState } from "react";
import { addNewItem } from "../Services(Redux)/FirestoreStoreItem";
import { useDispatch } from "react-redux";

export default function AddNewItem() {
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState("");
    const [itemQuantity, setItemQuantity] = useState(0);
    const [itemCategory, setItemCategory] = useState("");

    function addItem() {
        console.log(`Item Name: ${itemName}, Item Quantity: ${itemQuantity}, Item Category: ${itemCategory}`);
        const item = {
            itemName: itemName,
            itemQuantity: itemQuantity,
            itemCategory: itemCategory
        }

        dispatch(addNewItem(item))
    }

    return (
        <div className="add-new-item" >
            <div className="box">
                <h1>Add Item</h1>
                <p>Add a new item</p>
                <input type="text" placeholder="Item Name" onChange={(event) => setItemName(event.target.value)} />
                <br />
                <input type="number" placeholder="Item Quantity" onChange={(event) => setItemQuantity(event.target.value)} />
                <br />
                <select onChange={(event) => setItemCategory(event.target.value)}>
                    <option hidden={true} >
                        Select Category
                    </option>
                    <option value={"Beverages"}>Beverages</option>
                    <option value={"Bread/Bakery"}>Bread/Bakery</option>
                    <option value={"Canned/Jarred Goods"}>Canned/Jarred Goods</option>
                    <option value={"Dairy"}>Dairy</option>
                    <option value={"Dry/Baking Goods"}>Dry/Baking Goods</option>
                    <option value={"Frozen Foods"}>Frozen Foods</option>
                    <option value={"Meat"}>Meat</option>
                    <option value={"Produced"}>Produced</option>
                    <option value={"Cleaning"}>Cleaning</option>
                    <option value={"Paper Goods"}>Paper Goods</option>
                    <option value={"Personal Care"}>Personal Care</option>
                    <option value={"Other"}>Other</option>
                </select>
                <br /><br />
                <button onClick={addItem}>Save</button>
            </div>
        </div>
    )
}