import React, { useState } from "react";
import "./Edithighlight_style.css";
function EditHighlight(props) {
  const HighlightFormat = {
    id: props.user[0]?.id,
    checked:props.user[0]?.checked,
    UserName: props.user[0]?.UserName,
    ClusterName: props.user[0]?.ClusterName,
    IdeaDescription: props.user[0]?.IdeaDescription,
  };
  const [form, setform] = useState(HighlightFormat);

  function handleChange(e) {
    setform({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <div class="EditHighlight">
      <div class="EditHighlight_Title"> Edit Highlight.....</div>
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
      <div>
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
  );
}
export default EditHighlight;
