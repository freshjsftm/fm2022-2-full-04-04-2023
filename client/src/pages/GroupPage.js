import React from "react";
import { useSelector } from "react-redux";
import GroupForm from "../components/GroupForm";

const GroupPage = () => {
  const { groups, error, isFetching } = useSelector((state) => state.groups);
  return (
    <div>
      <GroupForm />
      {groups.map((group) => (
        <img
          key={group.id}
          alt={group.name}
          src={`http://localhost:3000/images/${group.imagePath}`}
        />
      ))}
    </div>
  );
};

export default GroupPage;
