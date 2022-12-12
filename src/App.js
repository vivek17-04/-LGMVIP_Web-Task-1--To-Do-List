import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from "./List";

const App = () => {
    const date = new Date();
    const [item, setItem] = useState("");
    const [newItem, setNewItem]= useState([])
    const Change = (event) => {
        setItem(event.target.value)
    }

    const AddItem = () =>{
        setNewItem((oldData) =>{
            return [...oldData, item];
        })
        setItem("")
    }

    return (<>
        <div className="main_div">
            <div className="center_div">
                <h1>ToDo List</h1>

                <br />
                <input type="text"
                    placeholder="Add an item"
                    onChange={Change}
                    value={item}
                />

                <Button className="newBtn" onClick={AddItem}>
                    <AddIcon className="add"/>
                </Button>
                <br />
                <ol>
                    {newItem.map((Val, index) =>{
                        return <List 
                            name = {Val}
                            key = {index}
                        />
                    })}
                    
                </ol>
            </div>
            <footer>
                <p>Coyright &copy; {date.getFullYear()} Vivek kumar</p>
            </footer>
        </div>
    </>);
};

export default App;