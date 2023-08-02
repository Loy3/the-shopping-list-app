import { useEffect, useState } from "react";
import { fetchItems, deleteAnItem } from "../Services(Redux)/FirestoreGetItems";
import { useDispatch, useSelector } from "react-redux";
import { itemUpdate } from "../Services(Redux)/FirestoreItemUpdate";

export default function VIewItems() {

    const dispatch = useDispatch();
    const { loading, error, items } = useSelector((state) => state.items)
    // const documentData = useSelector((state) => state.update.documentData);
    // const documentId = useSelector((state) => state.update.id);
    const [updateItem, setUpdateItem] = useState({
        id: "",
        itemName: "",
        itemQuantity: "",
        itemCategory: ""
    });
    useEffect(() => {
        dispatch(fetchItems())
        console.log(items);
    }, [dispatch])

    function deleteItem(event, item) {
        dispatch(deleteAnItem(item.id))
        console.log(item)
    }

    function update(event, item) {
        console.log(item)
        setUpdateItem({
            id: item.id,
            itemName: item.itemName,
            itemQuantity: item.itemQuantity,
            itemCategory: item.itemCategory
        })
    }

    const handleChange = (e) =>
        setUpdateItem(prevState => ({ ...prevState, [e.target.name]: e.target.value }),
        )

    function updateTheItem() {
        // dispatch(itemUpdate(updateItem))
        // console.log(updateItem);
        const data = {
            itemName: updateItem.itemName,
            itemQuantity: updateItem.itemQuantity,
            itemCategory: updateItem.itemCategory
        }
        dispatch(itemUpdate(updateItem));
    }

    return (
        <>
            <h1>Items</h1>
            {items.map((item, index) => (
                <div key={index}>
                    <ul>
                        <li>{item.itemName}
                            <br />
                            <button onClick={(event) => update(event, item)}>update</button>
                            <button onClick={(event) => deleteItem(event, item)}>delete</button>
                        </li>

                    </ul>
                    <br />
                </div>
            ))}

            <div id={"updateItem"}>
                <h2>Update Item</h2>
                <input type="text" name="itemName" placeholder={`Item Name: ${updateItem.itemName}`} onChange={handleChange} />
                <br />
                <input type="number" name="itemQuantity" placeholder={`Item Quantity: ${updateItem.itemQuantity}`} onChange={handleChange} />
                <br />
                <select name="itemCategory" onChange={handleChange}>
                    <option hidden={true} >
                        Current Category: {updateItem.itemCategory}
                    </option>
                    <option value={"Beverages"}>Beverages</option>
                    <option value={"Bread/Bakery"}>Bread/Bakery</option>
                    <option value={"Canned/Jarred Goods"}>Canned/Jarred Goods</option>
                    <option value={"Dairy"}>Dairy</option>
                    <option value={"Dry/Baking Goods"}>Dry/Baking Goods</option>
                    <option value={"Frozen Foods"}>Frozen Foods</option>
                    <option value={"Meat"}>Meat</option>
                    <option value={"Produce"}>Produce</option>
                    <option value={"Cleaning"}>Cleaning</option>
                    <option value={"Paper Goods"}>Paper Goods</option>
                    <option value={"Personal Care"}>Personal Care</option>
                    <option value={"Other"}>Other</option>
                </select>
                <br /><br />
                <button onClick={updateTheItem}>Update</button>
            </div>
        </>
    )

}