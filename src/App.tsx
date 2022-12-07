import styled from 'styled-components'
import Services from './API/service'

const service = new Services()

const AppWrapper = styled.div`
  background-color: red;
`
function App() {

  const clickHandler = async () => {
    await service.getUsers().then(res => console.log(res))
  }
  return <AppWrapper onClick={clickHandler}>HELLO WORLD</AppWrapper>
}

export default App
