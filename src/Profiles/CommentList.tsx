import React from "react";

interface Comment {
  id: number;
  author: string;
  content: string;
  date: string;
}

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return <p className="text-gray-500">No comments yet.</p>;
  }

  return (
    <div className="space-y-3">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-white shadow p-3 rounded border border-gray-200"
        >
          <p className="text-gray-800">{comment.content}</p>
          <div className="text-sm text-gray-500 mt-1">
            By {comment.author} on {comment.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
