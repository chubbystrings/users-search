import styled from "styled-components";
import {FcInfo} from "react-icons/fc";

const Alert = () => {

  return (
    <Flex>
        <FcInfo />
        <p>please type something</p>
    </Flex>
  )
}

const Flex = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

export default Alert