import { useEffect, useState } from "react";
import { fetchItems, deleteAnItem } from "../Services(Redux)/FirestoreGetItems";
import { useDispatch, useSelector } from "react-redux";
import { updateAnItem } from "../Services(Redux)/FirestoreGetItems";
import closeBtn from "../Assets/Icons/close.png";

//import images
import allI from "../Assets/Icons/all.png";
import bev from "../Assets/Icons/Beverages.png";
import breadB from "../Assets/Icons/Bakery.png";
import cannedP from "../Assets/Icons/Canned.png";
import dairyP from "../Assets/Icons/Dairy.png";
import dry_baking from "../Assets/Icons/dry.png";
import frozenF from "../Assets/Icons/Frozen.png";
import meat from "../Assets/Icons/Meat2.png";
import produecedP from "../Assets/Icons/fruits.png";
import cleaningP from "../Assets/Icons/Cleaners.png";
import paperG from "../Assets/Icons/paper.png";
import personal_care from "../Assets/Icons/personal.png"; 
import otherG from "../Assets/Icons/Other.png";

import editItem from "../Assets/Icons/edit.png";
import deleteItm from "../Assets/Icons/delete.png";
import addItm from "../Assets/Icons/queue.png";
import AddNewItem from "./AddNewItem";

export default function VIewItems() {

    const categories = [
        {
            name: "All",
            img: allI,
            description: "Coffee/tea, juice, soda."
        },
        {
            name: "Beverages",
            img: bev,
            description: "Coffee/tea, juice, soda."
        },
        {
            name: "Bread/Bakery",
            img: breadB,
            description: "Sandwich loaves, dinner rolls, tortillas, bagels"
        },
        {
            name: "Canned/Jarred Goods",
            img: cannedP,
            description: "Vegetables, spaghetti sauce, ketchup"
        },
        {
            name: "Dairy",
            img: dairyP,
            description: "Cheeses, eggs, milk, yogurt, butter"
        },
        {
            name: "Dry/Baking Goods",
            img: dry_baking,
            description: "Cereals, flour, sugar, pasta, mixes"
        },
        {
            name: "Frozen Foods",
            img: frozenF,
            description: "Waffles, frozen vegetables, individual meals, ice cream"
        },
        {
            name: "Meat",
            img: meat,
            description: "Chicken meat, poultry, beef, pork, lamp"
        },
        {
            name: "Produced",
            img: produecedP, 
            description: "Fruits, vegetables"
        },
        {
            name: "Cleaning",
            img: cleaningP,
            description: "All - purpose, laundry detergent, dishwashing liquid/detergent"
        },
        {
            name: "Paper Goods",
            img: paperG,
            description: "Paper towels, toilet paper, aluminum foil, sandwich bags"
        },
        {
            name: "Personal Care",
            img: personal_care,
            description: "shampoo, soap, hand soap, shaving cream"
        },
        {
            name: "Other",
            img: otherG,
            description: "baby items, pet items, batteries, greeting cards"
        },

    ]

    const dispatch = useDispatch();
    const { items } = useSelector((state) => state.items) 
    const [displayItems, setDisplayItems] = useState([]);

    const [beveragesC, setbeveragesC] = useState([]);
    const [breadC, setBreadC] = useState([]);
    const [cannedC, setCannedC] = useState([]);
    const [dairyC, setDairyC] = useState([]);
    const [dryC, setDryC] = useState([]);
    const [frozenC, setFrozenC] = useState([]);
    const [meatC, setMeatC] = useState([]);
    const [produecedC, setProduecedC] = useState([]);
    const [cleaningC, setCleaningC] = useState([]);
    const [paperGC, setPaperGC] = useState([]);
    const [personalC, setPersonalC] = useState([]);
    const [otherC, setOtherC] = useState([]);
    const [updateItem, setUpdateItem] = useState({
        id: "", 
        itemName: "",
        itemQuantity: "",
        itemCategory: ""
    });

    useEffect(() => {
        dispatch(fetchItems())
        console.log(items);

        let myItems = [];

        myItems = items.reduce((acc, obj) => {
            const splitCategory = obj.itemCategory.split(/\s|\//)
            const cate = splitCategory[0];
            if (!acc[cate]) {
                acc[cate] = [obj];
            } else {
                acc[cate].push(obj);
            }
            return acc;
        }, {});
        // console.log(myItems);
        setbeveragesC(myItems.Beverages)
        setBreadC(myItems.Bread)
        setCannedC(myItems.Canned)
        setDairyC(myItems.Dairy)
        setDryC(myItems.Dry)
        setFrozenC(myItems.Frozen)
        setMeatC(myItems.Meat)
        setProduecedC(myItems.Produced)
        setCleaningC(myItems.Cleaning)
        setPaperGC(myItems.Paper)
        setPersonalC(myItems.Personal)
        setOtherC(myItems.Other)

        setDisplayItems(items)

    }, [dispatch]) 

    function deleteItem(event, item) {
        dispatch(deleteAnItem(item.id))
        console.log(item)
    }

    function update(event, item) {
        document.getElementById("updateItem").style.display = "block";
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
        dispatch(updateAnItem(updateItem));
    }

    const [title, setTitle] = useState("");
    const [displayCatgory, setDisplayCatgory] = useState([]);

    function handleCategories(event, type) {
        event.preventDefault();
        let all = document.getElementById("all");
        let cty = document.getElementById("category");
        switch (type) {
            case "Beverages":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Beverages");
                setDisplayCatgory(beveragesC);
                break;

            case "Bread/Bakery":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Bread/Bakery");
                setDisplayCatgory(breadC);
                break;

            case "Canned/Jarred Goods":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Canned/Jarred Goods");
                setDisplayCatgory(cannedC);
                break;

            case "Dairy":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Dairy");
                setDisplayCatgory(dairyC);
                break;

            case "Dry/Baking Goods":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Dry/Baking Goods");
                setDisplayCatgory(dryC);
                break;

            case "Frozen Foods":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Frozen Foods");
                setDisplayCatgory(frozenC);
                break;

            case "Meat":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Meat");
                setDisplayCatgory(meatC);
                break;

            case "Produced":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Produced");
                setDisplayCatgory(produecedC);
                break;

            case "Cleaning":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Cleaning");
                setDisplayCatgory(cleaningC);
                break;

            case "Paper Goods":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Paper Goods");
                setDisplayCatgory(paperGC);
                break;

            case "Personal Care":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Personal Care");
                setDisplayCatgory(personalC);
                break;

            case "Other":
                all.style.display = "none";
                cty.style.display = "block";
                setTitle("Other");
                setDisplayCatgory(otherC);
                break;
            default:
                all.style.display = "block";
                cty.style.display = "none";
        }
    }

    function handleImg(image) {
        let rtnImg = ""
        switch (image) {
            case "Beverages":
                rtnImg = bev;
                break;

            case "Bread/Bakery":
                rtnImg = breadB;
                break;

            case "Canned/Jarred Goods":
                rtnImg = cannedP;
                break;

            case "Dairy":
                rtnImg = dairyP;
                break;

            case "Dry/Baking Goods":
                rtnImg = dry_baking;
                break;

            case "Frozen Foods":
                rtnImg = frozenF;
                break;

            case "Meat":
                rtnImg = meat;
                break;

            case "Produced":
                rtnImg = produecedP;
                break;

            case "Cleaning":
                rtnImg = cleaningP;
                break;

            case "Paper Goods":
                rtnImg = paperG;
                break;

            case "Personal Care":
                rtnImg = personal_care;
                break;

            case "Other":
                rtnImg = otherG;
                break;
            default:
                rtnImg = allI;
        }

        return rtnImg;

    }



    function handleColor(type) {
        let color = "";
        switch (type) {
            case "Beverages":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(170,235,185,1) 100%)";
                break;

            case "Bread/Bakery":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(248,160,103,1) 100%)";
                break;

            case "Canned/Jarred Goods":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(134,223,250,1) 100%)";
                break;

            case "Dairy":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(255,245,161,1) 100%)";
                break;

            case "Dry/Baking Goods":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(233,169,153,1) 100%)";
                break;

            case "Frozen Foods":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(164,198,231,1) 100%)";
                break;

            case "Meat":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(255,101,121,1) 100%)";
                break;

            case "Produced":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(255,164,98,1) 100%)";
                break;

            case "Cleaning":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(108,255,216,1) 100%)";
                break;

            case "Paper Goods":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(222,219,238,1) 100%)";
                break;

            case "Personal Care":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(207,223,122,1) 100%)";
                break;

            case "Other":
                color = "linear-gradient(164deg, rgba(255,255,255,1) 0%, rgba(255,191,88,1) 100%)";
                break;
            default:
                color = "#fff";
        }

        return color;

    }


    function handleHeadingColor(type) {
        let color = "";
        switch (type) {
            case "Beverages":
                color = "#38bb86";

                break;

            case "Bread/Bakery":
                color = "#b56d3e";
                break;

            case "Canned/Jarred Goods":
                color = "#40ccf7";
                break;

            case "Dairy":
                color = "#ffe405";
                break;

            case "Dry/Baking Goods":
                color = "#d46a50";
                break;

            case "Frozen Foods":
                color = "#8cc3fa";
                break;

            case "Meat":
                color = "#74041b";
                break;

            case "Produced":
                color = "#f26a07";
                break;

            case "Cleaning":
                color = "#058d3f";
                break;

            case "Paper Goods":
                color = "#beb8ea";
                break;

            case "Personal Care":
                color = "#7d920c";
                break;

            case "Other":
                color = "#ea9f26";
                break;
            default:
                color = "#000";
        }

        return color;

    }


    function addBtn() {
        document.getElementById("newItem").style.display = "block";
    }

    function closeForm() {
        document.getElementById("updateItem").style.display = "none";
    }


    return (
        <div className="items">
            <div id={"newItem"}>
                <AddNewItem />
            </div>
            <div className="sideNav">
                <div className="sideNav_btn">
                    <h1 className="cat">Categories</h1>
                    <h1 className="cat2">Ca</h1>
                    <br />
                    {categories.map((cat, index) => (

                        <button key={index} style={{ background: handleColor(cat.name) }} onClick={(event) => handleCategories(event, cat.name)} >
                            <ul>
                                <li><img src={cat.img} alt="category" width={30} /></li>
                                <li className="text">{cat.name}</li>
                            </ul>

                        </button>

                    ))}
                </div>
            </div >

            <header>
                <div className="bg"></div>
                <div className="hText">
                    <h1>My Shopping List</h1>
                </div>
            </header>
            <button className="addBtn" onClick={addBtn}>
                <ul>
                    <li><img src={addItm} alt="category" width={30} /></li>
                    <li className="text">Add Item</li>
                </ul>
            </button>

            <div className="all-items" id={"all"}>
                <h1>Items</h1>
                <p>List of all the items.</p>
                <br /><br />
                <div className="row">
                    {displayItems.map((item, index) => (
                        <div className="column" key={index}>
                            <div className="card" style={{ background: handleColor(item.itemCategory) }}>
                                <img className="itemImg" src={handleImg(item.itemCategory)} alt="item" width={50} />
                                <div className="card-content">
                                    <p>
                                        <span style={{ color: handleHeadingColor(item.itemCategory) }}>Item:</span> {item.itemName}
                                        <br />
                                        <span style={{ color: handleHeadingColor(item.itemCategory) }}>Category:</span> {item.itemCategory}
                                        <br />
                                        <span style={{ color: handleHeadingColor(item.itemCategory) }}>Quantity:</span> {item.itemQuantity}
                                    </p>

                                </div>
                                <div className="card-btns">

                                    <br />
                                    <button onClick={(event) => update(event, item)}><img src={editItem} alt="edit" width={30} /></button>
                                    <button onClick={(event) => deleteItem(event, item)}><img src={deleteItm} alt="edit" width={30} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div id={"category"}>
                <br />
                <h1>{title}</h1>
                <p>{`List of ${title} items.`}</p>
                <br /><br />
                {displayCatgory !== undefined ? <div className="row">
                    {displayCatgory.map((item, index) => (
                        <div className="column" key={index}>
                            <div className="card" style={{ background: handleColor(item.itemCategory) }}>
                                <img className="itemImg" src={handleImg(item.itemCategory)} alt="item" width={50} />
                                <div className="card-content">
                                    <p>
                                        <span style={{ color: handleHeadingColor(item.itemCategory) }}>Item:</span> {item.itemName}
                                        <br />
                                        <span style={{ color: handleHeadingColor(item.itemCategory) }}>Category:</span> {item.itemCategory}
                                        <br />
                                        <span style={{ color: handleHeadingColor(item.itemCategory) }}>Quantity:</span> {item.itemQuantity}
                                    </p>

                                </div>
                                <div className="card-btns">

                                    <br />
                                    <button onClick={(event) => update(event, item)}><img src={editItem} alt="edit" width={30} /></button>
                                    <button onClick={(event) => deleteItem(event, item)}><img src={deleteItm} alt="edit" width={30} /></button>
                                </div>
                            </div>
                        </div>
                    ))}</div> : null}
            </div>

            <div id={"updateItem"}>
                <div className="add-new-item">
                    <div className="box">
                    <img src={closeBtn} alt="closebtn" width={30} onClick={closeForm} />
                        <h2 style={{ color: handleHeadingColor(updateItem.itemCategory) }}>Update Item</h2>
                        <div className="add-form">
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
                            <br />
                            <button style={{ backgroundColor: handleHeadingColor(updateItem.itemCategory) }} onClick={updateTheItem}>Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}