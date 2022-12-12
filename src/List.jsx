import React, { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
const List = (props) => {
    const [line, setLine] = useState(false);
    const Cancel = () => {
        setLine(true);
    }
    return (<>
        <div className="todo_style">
            <span className="delete" onClick={Cancel}><DeleteIcon /></span>
            <li style={{ textDecoration: line ? 'line-through' : 'none' }}>{props.name}</li><br />
        </div>
    </>);
};

export default List;