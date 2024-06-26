import { useQueryClient } from "@tanstack/react-query";
import { IoMdClose } from "react-icons/io";
import { deployBaseUrl } from "../../api/dataFetcher";

function UpdateMenuModal({ closeModal, name, price, description, menuId }) {
  const queryClient = useQueryClient();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
    };
    console.log(menuId);
    try {
      const jwtToken = localStorage.getItem("admin-token");
      const response = await fetch(
        `${deployBaseUrl}/api/v1/menus/update/${menuId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify(obj),
        },
      );
      if (response.ok) {
        queryClient.invalidateQueries({ queryKey: ["menuData"] });
        closeModal();
      }
    } catch (e) {
      console.log(e);
      throw new Error("Error in UpdateMenuModal");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 p-4 z-50 font-inter flex justify-center flex-col items-center">
      <div className="flex flex-col text-stone-600 bg-white rounded-lg p-5">
        <div className="flex justify-between ml-2 border-b border-stone-400 p-2">
          <p className="flex justify-center text-xl font-medium">Update Menu</p>
          <IoMdClose
            className="text-xl hover:cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="p-4 rounded-md text-stone-600">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <input
              type="text"
              defaultValue={name}
              placeholder="Name"
              name="name"
              required
            />
            <input
              type="text"
              defaultValue={price}
              required
              name="price"
              placeholder="Price"
            />
            <textarea
              defaultValue={description}
              placeholder="Description"
              name="description"
            />
            <div className="flex justify-center w-full">
              <button
                className="font-normal w-36 max-w-36 font-inter"
                type="submit"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateMenuModal;
