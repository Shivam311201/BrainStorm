import React, { useState } from "react";
import "./EditIdea_style.css";
function EditIdea(props) {
  const IdeaFormat = {
    id: props.user[0]?.id,
    checked:props.user[0]?.checked,
    UserName: props.user[0]?.UserName,
    ClusterName: props.user[0]?.ClusterName,
    IdeaDescription: props.user[0]?.IdeaDescription,
  };
  const [form, setform] = useState(IdeaFormat);

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  return (<div style={{display:"flex",justifyContent:"space-around"}}>
    <div class="EditIdea">
      <div class="EditIdea_Title"> Edit the Idea.....</div>
      <div>
        <input
          className="minor_input1"
          onChange={handleChange}
          name="UserName"
          value={form.UserName}
          placeholder="Your Name*"
        />
      </div>
      <div>
        <textarea
          className="major_input1"
          onChange={handleChange}
          name="IdeaDescription"
          value={form.IdeaDescription}
          placeholder="Idea description*"
        />
      </div>
      <div style={{display:"flex",flexDirection:"row-reverse"}}>
        <button
          className="Save_Button"
          onClick={() => {
            props.updateIdea(form);
          }}
        >
          Save
        </button>
      </div>
    </div>
  </div>);
}
export default EditIdea;
