import styles from 'styled-components'
import  bg  from  '../images/bg.png'

const Wrap = styles.div`
    min-height:  100vh;
    width:  100%;
    background: url(${bg}) no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow-x:hidden;  
`


export default  function Wrapper({children})  {
    return  (
        <Wrap>
            {children}
        </Wrap>
    )
}