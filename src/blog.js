import React from "react";

const DataBlog = ({item}) =>{
    return (
        <div>
            <h1>{item.Header}</h1>
            <p>{item.Body}</p>
        </div>
    )
}

export default DataBlog;