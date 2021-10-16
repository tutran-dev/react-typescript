import React from 'react'
import "../css/List.css"
import {IState as IProps} from "../App";

// interface IProps {
//     people: {
//         name:string,
//         age: number,
//         bio: string
//       }[]
// }


const List = ({people}:IProps) => {

    const renderList = ():JSX.Element[]=> {
        const list = people.map(person => ( 
            <div className="list-item-container">
                {person.name} - {person.age} - {person.bio}
            </div>
        ));
        return list;
    }
    return (
        <div className="list-container">
            <h1>List</h1>
           {renderList()}
        </div>
    )
}

export default List
