import React from "react"
import tutankhamun from "./tutankhamun.jpg"

function Image(props) {
    return(
        <div className="img-div">
          <img src={tutankhamun} className="image" alt="tutankhamun" />
          <p className="img-caption"><h3>Tutankhamun</h3></p>
        </div>
    )
}

export default Image