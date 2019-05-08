import React from 'react'

const MenuBar = () => {
    return (
        <div className='menubar'>
            <div className='columns'>
            <label className="column is-3 label is-medium has-text-centered"> <a href='#'>PC Parts</a></label>
            <label className="column is-3 label is-medium has-text-centered"><a href='#'>Tutorials</a></label>
            <label className="column is-3 label is-medium has-text-centered"><a href='#'>Tips</a></label>
            <label className="column is-3 label is-medium has-text-centered"><a href='#'>Articles</a></label>          
            </div>
        </div>
    )
}

export default MenuBar