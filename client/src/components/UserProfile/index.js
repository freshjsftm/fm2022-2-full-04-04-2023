import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const { currentUser } = useSelector((state) => state.users);

  return <div>{currentUser.email} delete update</div>;
};

export default UserProfile;
