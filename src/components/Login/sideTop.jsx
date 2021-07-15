import styles from 'styled-components'
import  logo  from  '../../images/Rectangle3.svg'

const Text = styles.p`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 33px;
    text-align: center;
    color: #FF8D8D;
    position: relative;
    top: -38px
`
const Span = styles.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 33px;
    text-align: center;
    color: green;
`

export default  function SiteTopr()  {
    return  (
        <>
            <img src={logo} style={{display: 'flex', justifyContent: 'center'}} alt="" />
            <Text>Eli <Span>codes</Span></Text>
        </>
    )
}