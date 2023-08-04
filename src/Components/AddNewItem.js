import { useState } from "react";
import { addNewItem } from "../Services(Redux)/FirestoreStoreItem";
import { useDispatch } from "react-redux";

import closeBtn from "../Assets/Icons/close.png";

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
        document.getElementById("newItem").style.display = "none";
    }

    function closeForm() {
        document.getElementById("newItem").style.display = "none";
    }

    function handleChange(event) {
        setItemCategory(event.target.value)
        let border = event.target.value;
        const btnBgColor = document.getElementById("border");
        const headingColor = document.getElementById("header");

        switch (border) {
            case "Beverages":
                btnBgColor.style.backgroundColor = "#38bb86";
                headingColor.style.color = "#38bb86";
                console.log(border);
                break;

            case "Bread/Bakery":
                btnBgColor.style.backgroundColor = "#b56d3e";
                headingColor.style.color = "#b56d3e";
                break;

            case "Canned/Jarred Goods":
                btnBgColor.style.backgroundColor = "#40ccf7";
                headingColor.style.color = "#40ccf7";
                break;

            case "Dairy":
                btnBgColor.style.backgroundColor = "#ffe405";
                headingColor.style.color = "#ffe405";
                break;

            case "Dry/Baking Goods":
                btnBgColor.style.backgroundColor = "#d46a50";
                headingColor.style.color = "#d46a50";
                break;

            case "Frozen Foods":
                btnBgColor.style.backgroundColor = "#8cc3fa";
                headingColor.style.color = "#8cc3fa";
                break;

            case "Meat":
                btnBgColor.style.backgroundColor = "#74041b";
                headingColor.style.color = "#74041b";
                break;

            case "Produced":
                btnBgColor.style.backgroundColor = "#f26a07";
                headingColor.style.color = "#f26a07";
                break;

            case "Cleaning":
                btnBgColor.style.backgroundColor = "#058d3f";
                headingColor.style.color = "#058d3f";
                break;

            case "Paper Goods":
                btnBgColor.style.backgroundColor = "#beb8ea";
                headingColor.style.color = "#beb8ea";
                break;

            case "Personal Care":
                btnBgColor.style.backgroundColor = "#7d920c";
                headingColor.style.color = "#7d920c";
                break;

            case "Other":
                btnBgColor.style.backgroundColor = "#ea9f26";
                headingColor.style.color = "#ea9f26";
                break;
            default:
                btnBgColor.style.backgroundColor = "#000";
                headingColor.style.color = "#000";
        }

    }




    return (
        <div className="add-new-item" >
            <div className="box">
                <img src={closeBtn} alt="closebtn" width={30} onClick={closeForm} />
                <h1 id={"header"}>Add Item</h1>
                <p>Add a new item</p>
                <div className="add-form">
                    <input type="text" placeholder="Item Name" onChange={(event) => setItemName(event.target.value)} />
                    <br />
                    <input type="number" placeholder="Item Quantity" onChange={(event) => setItemQuantity(event.target.value)} />
                    <br />
                    <select onChange={handleChange}>
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
                    <br />
                    <button id={"border"} onClick={addItem}>Save</button>
                </div>
            </div>
        </div>
    )
}