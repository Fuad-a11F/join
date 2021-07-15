import { useHistory } from 'react-router'
import {BottomSection, Text1, Text2} from '../Login/sideBottom'

export default  function SiteBottomL()  {
    let history = useHistory()
    return  (
        <BottomSection>
            <Text1>By signing up, I agree to the Privacy Policy and Terms of Service</Text1>
            <Text2>Don't you have an account?  <span onClick={() => history.push('registration')} >Sign up</span></Text2>
        </BottomSection>
    )
}