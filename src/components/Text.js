import React from "react"
import Info from "./Info"
import ListItem from "./listItem/ListItem"

function Text(props) {

    const text = Info.map(li => <ListItem key={li.id} li={li} />)

    return(
        <div className="text">
          <ul className="timeline">
            {text}
          </ul>
          <p className="footer"><strong>You can read more about this incredible part of our history at</strong> <a href="https://tutankhamun-london.com/" className="tribute-link" target="_blank">Tutankhamun-London</a>.</p>
        </div>
    )
}

export default Text