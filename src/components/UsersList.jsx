import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/user/userActions";

function UsersList() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  console.log(state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      UsersList
      {state.isLoading ? (
        <p>Loading...</p>
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        <div>
          {state.data &&
            state.data.map((users) => <li key={users.id}>{users.name}</li>)}
        </div>
      )}
    </div>
  );
}

export default UsersList;
