import React, { useState } from 'react';
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);
  const paste = allPastes.find((p) => p._id === id);
  console.log("Final Paste: ", paste);

  // Handle missing paste
  if (!paste) {
    return <div>Paste not found</div>;
  }

  // If you want to allow editing (not disabled), you can add local state:
  const [title, setTitle] = useState(paste.title);
  const [content, setContent] = useState(paste.content);

  return (
    <>
      <div>ViewPaste</div>
      <div className="flex flex-row gap-7">
        <input
          className="p-2 rounded-2xl"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          // remove disabled if you want editing
          disabled
        />
      </div>
      <div className="mt-8">
        <textarea
          className="w-100 rounded-2xl mt-4 min-w-[500px] p-4 text-black"
          value={content}
          placeholder="Enter content here"
          onChange={(e) => setContent(e.target.value)}
          rows={20}
          disabled // remove if editing allowed
        />
      </div>
    </>
  );
};

export default ViewPaste;
