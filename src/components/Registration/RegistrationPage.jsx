import React from 'react'
import SiteBottom from '../Login/sideBottom'
import SiteCenter from '../Login/sideCenter'
import SiteBar from '../Login/sideBar'
import SiteTop from '../Login/sideTop'


function RegistrationPage() {
    return (
        <SiteBar>
            <SiteTop />
            <SiteCenter />
            <SiteBottom/>
        </SiteBar>
    )
}

export default RegistrationPage
