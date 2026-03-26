import { useQueryClient } from "@tanstack/react-query";
import useUserModification from "../hooks/useUserModification";
import { useModal } from "../../../global/context/ModalContext";

const UserActions = ({ userId, currentRole }) => {
  const queryClient = useQueryClient();
  const { showAlert, showConfirm } = useModal();
  const {
    promoteUser,
    removeStudent,
    isDeleting,
    isPromoting,
    actionError,
  } = useUserModification(userId);

  const handlePromote = async () => {
    const confirmed = await showConfirm(
      "Change Role",
      `Are you sure you want to change the role of this user?`
    );
    
    if (confirmed) {
      const res = await promoteUser();
      if (res) {
        await showAlert("Success", "User role updated successfully!");
        queryClient.invalidateQueries({ queryKey: ["students"] });
      }
    }
  };

  const handleDelete = async () => {
    const confirmed = await showConfirm(
      "Delete User",
      "Are you sure you want to delete this user? This action cannot be undone."
    );
    
    if (confirmed) {
      const res = await removeStudent();
      if (res) {
        await showAlert("Success", "User deleted successfully!");
        queryClient.invalidateQueries({ queryKey: ["students"] });
      }
    }
  };

  return (
    <div className="actions">
      <button className="edit">Edit</button>
      <button
        className="change"
        onClick={handlePromote}
        disabled={isPromoting || isDeleting}
      >
        {isPromoting ? "Changing..." : "Change Role"}
      </button>
      <button
        className="delete"
        onClick={handleDelete}
        disabled={isDeleting || isPromoting}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
      {actionError && <p className="error-text">Error: {actionError.message}</p>}
    </div>
  );
};

export default UserActions;
