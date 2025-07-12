import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "./MenuBar";
const JobDescriptionEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: "<p>Write your job description</p>",
  });
  return (
    <div className="w-full border rounded-md">
      <MenuBar editor={editor} />
      <EditorContent
        className="min-h-[300px] border-0 focus:outline-none focus:border-0"
        editor={editor}
      />
    </div>
  );
};

export default JobDescriptionEditor;
