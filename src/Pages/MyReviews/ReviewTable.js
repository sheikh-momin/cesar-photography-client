import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

import toast, { Toaster } from 'react-hot-toast';
import EditReviews from "./EditReviews";

const notify = () => toast('Delete Successfully');


const ReviewTable = ({ review, handleDelete }) => {
  const { user } = useContext(AuthContext);
  const { _id, email, message,title } = review;
  const [reviewDetail, setReviewDetail] = useState([])







  return (
    <tr>
      <th>
        <label >
          <div onClick={() => handleDelete(_id)}>
            <button
              
              onClick={notify}
              className="btn btn-circle btn-outline"
            >
              X
            </button>
          </div>
          
        </label>
        <Toaster></Toaster>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={user?.photoURL}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.displayName}</div>
            <div className="text-sm opacity-50">{user?.email}</div>
            
          </div>
        </div>
      </td>
      <td>
        <div className="text-sm opacity-50">{title}</div>
      </td>
      <td>
        <h2>{message}</h2>

      </td>

      <th>
        {/* The button to open modal */}
        <label htmlFor="my-modal-5" className="btn">Edit</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal-5" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box w-11/12 max-w-5xl">
            <input type="text" placeholder="Type here" defaultValue={message} className="input w-full max-w-xs" />
            <input type="text" placeholder="Type here" defaultValue={email} className="input w-full max-w-xs" />
            <div className="modal-action">
              <label htmlFor="my-modal-5" className="btn">Update</label>
            </div>
          </div>
        </div>
      </th>
    </tr>
  );
};

export default ReviewTable;