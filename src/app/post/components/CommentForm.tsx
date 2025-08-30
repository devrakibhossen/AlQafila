import { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import TextareaAutosize from "react-textarea-autosize";

interface CommentFormProps {
  onSubmit: (text: string) => void;
  initialValue?: string;
  placeholder?: string;
}

const CommentForm = ({
  onSubmit,
  initialValue = "",
  placeholder = "Write something...",
}: CommentFormProps) => {
  const [comment, setComment] = useState(initialValue);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(comment);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-end gap-2">
        <TextareaAutosize
          placeholder={placeholder}
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
          minRows={1}
          maxRows={5}
          className="flex-1 rounded-lg border  
                 focus:outline-none focus:ring-2 focus:ring-blue-600 
                 px-3 py-2 text-sm resize-none bg-transparent"
        />
        <button
          type="submit"
          className="flex items-center justify-center w-11 h-9 rounded-lg 
                 bg-green-accent text-white hover:bg-green-600 transition-colors"
        >
          <BsSendFill className="text-lg" />
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
