import {Wrapper} from './styles';
import searchIcon from '../../assets/icons/search.svg';

function AdminSearch() {
  return (
    <Wrapper>
        <Wrapper.Input placeholder="Search"/>
        <img src={searchIcon} alt='search icon'/>
    </Wrapper>
  )
}

export default AdminSearch;