import React from "react"
import { Img } from "./styles"

function Avatar({url, size}) {
    return (
        <Img src={url} size={size} />
    )
}

export default Avatar;
