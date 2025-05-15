import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useSearchParams } from "react-router-dom";
import { addtopastes, updateToPaste } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allpastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    console.log("inside use effect");
    if (pasteId) {
      const paste = allpastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updateToPaste(paste));
    } else {
      //create
      dispatch(addtopastes(paste));
    }
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <>
      <div className="flex flex-row gap-7">
        <input
          className="p-2 rounded-2xl"
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste} className="p2 rounded-2xl">
          {pasteId ? "Update Paste" : "Create My Paste "}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          className="w-100 rounded-2xl mt-4 min-w-[500px] p-4 text-black"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </>
  );
};

export default Home;
