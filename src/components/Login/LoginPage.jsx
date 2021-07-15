import React from 'react'
import SiteCenterL from '../Registration/SiteCenterL'
import SiteBottomL from '../Registration/SideBottomL'
import SiteBar from '../Login/sideBar'
import SiteTop from '../Login/sideTop'


function LoginPage({setUser}) {
    return (
        <SiteBar>
            <SiteTop />
            <SiteCenterL setUser={setUser} />
            <SiteBottomL />
        </SiteBar>
    )
}

export default LoginPage
