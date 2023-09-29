import { useState } from 'react';
import closeTag from '../../assets/icons/tagClose.svg';

function TagInput() {
    const[tags, setTags] = useState([]);
    const addTags = () => {

    }
  return (
    <div>
        <div className='tags-input'>
            <ul>
                <li>
                    <span>Tags</span>
                    <img src={closeTag} alt="close icon" />
                </li>
                <li>
                    <span>Tags</span>
                    <img src={closeTag} alt="close icon" />
                </li>
            </ul>
            <input type="text" placeholder='Add tags' onKeyUp={addTags}/>
        </div>
    </div>
  )
}

export default TagInput