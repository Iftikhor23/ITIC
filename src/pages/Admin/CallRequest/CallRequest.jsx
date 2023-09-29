import { useCallReqContext } from "../../../context/CallReqContext"

function CallRequest() {

  const [{calldata},dispatch] = useCallReqContext()
  
  return (
    <div>CallRequest</div>
  )
}

export default CallRequest