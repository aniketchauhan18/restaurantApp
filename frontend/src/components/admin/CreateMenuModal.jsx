import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { deployBaseUrl } from "../../api/dataFetcher";

function CreateMenuModal({ closeModal }) {
  const queryClient = useQueryClient();
  const { restaurantId } = useParams();
  console.log(restaurantId);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      name: formData.get("name"),
      price: formData.get("price"),
      description: formData.get("description"),
    };
    try {
      const jwtToken = localStorage.getItem("admin-token");
      const response = await fetch(
        `${deployBaseUrl}/api/v1/menus/register/${restaurantId}`,
        {
          method: "POST",
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
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 p-4 z-50 font-inter flex justify-center flex-col items-center">
      <div className="flex flex-col text-stone-600 bg-white rounded-lg p-5">
        <div className="flex justify-between ml-2 border-b border-stone-400 p-2">
          <p className="flex justify-center text-xl font-medium">Add Menu</p>
          <IoMdClose
            className="text-xl hover:cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="p-4 rounded-md text-stone-600">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <input type="text" placeholder="Name" name="name" required />
            <input type="text" required name="price" placeholder="Price" />
            <textarea placeholder="Description" name="description" />
            <div className="flex justify-center w-full">
              <button
                className="font-medium w-36 max-w-36 font-inter"
                type="submit"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateMenuModal;
