import { useState } from "react";
import closeTag from "../../assets/icons/tagClose.svg";
import { Container } from "./styles";

function TagInput() {
  const [tags, setTags] = useState(["apple", "kiwi"]);

  const removeTags = indexToRemove => {
    setTags(tags.filter((_, index) => index !== indexToRemove)); 
  }

  const addTags = event => {
    if(event.target.value !== ""){
        setTags([...tags, event.target.value]);
        event.target.value = "";
    }
  };
  console.log(tags);
  return (
    <Container>
      <div className="tagsInput">
        <ul className="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span>{tag}</span>
              <img src={closeTag} alt="close icon" onClick={() => removeTags(index)} style={{cursor: "pointer"}}/>
            </li>
          ))}
        </ul>
        <input type="text" placeholder="Add tags" onKeyUp={e => e.key === "Enter" ? addTags(e) : null} />
      </div>
    </Container>
  );
}

export default TagInput;
