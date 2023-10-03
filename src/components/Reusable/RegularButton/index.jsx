import {Container} from './styles';

function RegularButton(props) {
  return (
    <Container btnwidth={props.btnwidth} btnheight={props.btnheight}>
      {props.title}
    </Container>
  )
}

export default RegularButton;