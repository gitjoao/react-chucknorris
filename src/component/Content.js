import React from 'react'

function Content({frase}) {

    return <div className="render">
        <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="chucknorris"></img>
        <span className="texto">{frase}</span>
    </div>

}

export default Content;