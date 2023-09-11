import React from 'react'
import ProfileImage from '../../assets/images/boy2.png'

const Header = () => {
    return (
        <div className="navbar border-b-2">
            <div className="flex-1">
                <a className="normal-case text-2xl">Knowledge Cafe</a>
            </div>
            <div className="flex-none">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-20 rounded-full">
                        <img src={ProfileImage} />
                    </div>
                </label>
            </div>
        </div>
    )
}

export default Header