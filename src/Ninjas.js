import React from 'react'
import './Ninjas.css'

const Ninjas = ( {ninjas, deleteNinja} ) => {
  
    // console.log(this.props);
    //const { ninjas } = this.props;
    const ninjasList = ninjas.map(ninja => {
        return(
            <div className="ninja" key={ninja.id}>
            <div>Name: { ninja.name }</div>
            <div>Age: { ninja.age }</div>
            <div>Belt: { ninja.belt }</div>
            <div>Belt: { ninja.department }</div>
            <button onClick={() => {deleteNinja(ninja.id)}}>Delete</button>
          </div>
        )
    })
    return (
        <div className="ninja-list">
        { ninjasList }
        </div>
    )

}

export default Ninjas