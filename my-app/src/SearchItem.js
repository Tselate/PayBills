import React, {useState} from "react"

function SearchItem() {
    const [item, setItem] = useState("")
    setItem("Hello Worl")
    return (
        <div>
           {item}
        </div>
    )
}

export default SearchItem
