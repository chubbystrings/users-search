import styled from "styled-components";
import {ClipLoader} from "react-spinners";

const Loader = () => {
  return (
    <SpinnerDiv>
        <ClipLoader color="white" size={80}/>
    </SpinnerDiv>
  )
}

const SpinnerDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default Loader