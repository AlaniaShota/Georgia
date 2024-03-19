import { useReverseStore } from "../../../Store/store";

export const FinalForm = () => {
  const { user } = useReverseStore();

  return (
    <div>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Last Name: {user.selectedHotel}</p>
      <p>{user.price}</p>
      
    </div>
  );
};
