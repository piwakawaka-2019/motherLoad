import React from 'react'

const MenuBar = () => {
    return (
        <div className='menubar'>
            <div className='columns'>
            <label className="column is-3 label is-medium has-text-centered"> <a href='/pcparts/'>PC Parts</a></label>
            <label className="column is-3 label is-medium has-text-centered"><a href='/tutorials'>Tutorials</a></label>
            <label className="column is-3 label is-medium has-text-centered"><a href='/tips'>Tips</a></label>
            <label className="column is-3 label is-medium has-text-centered"><a href='/articles'>Articles</a></label>          
            </div>
        </div>
    )
}

export default MenuBar