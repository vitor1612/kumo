import React from "react"
import { Wrapper } from "./styles"

function Button({ as, children }) {
    return (
        <Wrapper as={as}>{children}</Wrapper>
    )
}

export default Button;