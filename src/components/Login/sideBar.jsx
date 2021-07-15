import styles, {keyframes} from 'styled-components'

let animation  =  keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0%)
  }
`
let animationReverse  =  keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0%)
  }
`

const Container = styles.div`
    height: 100%;
    width:  280px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
`

export default  function SiteBar({children, page})  {
    const Site = styles.div`
    min-height:  100vh;
    width:  400px;
    background: rgba(255, 255, 255, 0.87);
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: flex;
    animation: ${page=='registarion' ? animation : animationReverse} 1s forwards;
    @media(max-width:  992px)  {
        width:  300px;
    }

    @media(max-width:  480px)  {
        width:  100%;
    }  
`
    return  (
        <Site>
            <Container>
                {children}
            </Container>
        </Site>
    )
}