import React, {useState} from "react"

function SearchItem() {
    const [item, setItem] = useState("")
    setItem("Hello World")
    return (
        <div>
           {item}
        </div>
    )
}

export default SearchItem
