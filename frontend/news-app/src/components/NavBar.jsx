import React from 'react'

const NavBar = () => {

    const pageBar = {
        value: ["Home", "Latest News", "Features", "account"]
    }

    return (
        <div>
            <div>
                <h4>Flashy news</h4>
                {
                    pageBar.map((item) => {
                        return item.value
                    })
                }
            </div>



        </div>
    )
}

export default NavBar