import styles from 'styled-components'
import { useHistory } from 'react-router'

export const BottomSection = styles.div`
    margin-top: -45px
`
export const Text1 = styles.p`
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #808080;
`

export const Text2 = styles.p`
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #808080;
    span {
        color: red;
        &:hover  {
            cursor: pointer;
            text-decoration: underline
        }
    }
`
export default  function SiteBottom({login, setPage})  {
    let history = useHistory()
    return  (
        <BottomSection>
            <Text1>By signing up, I agree to the Privacy Policy and Terms of Service</Text1>
            <Text2>Already have an account?  <span onClick={() => history.push('/login')}>Sign In</span></Text2>
        </BottomSection>
    )
}