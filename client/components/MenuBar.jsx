import React from 'react'

const MenuBar = () => {
    return (
        <div className='columns'>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/pcparts/'>PC Parts</a>
                </div>
            </div>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/tutorials'>Tutorials</a>
                </div>
            </div>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/tips'>Tips</a>
                </div>
            </div>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/articles'>Articles</a>
                </div>
            </div>          
        </div>
    )
}

export default MenuBar