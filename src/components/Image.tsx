import { useState } from 'react';
import EdiText from 'react-editext';
import { HiOutlinePencil } from 'react-icons/hi';
import { useEditProduct } from '../api/hooks';

interface Props {
  imgUrl: string;
  isEditing: boolean;
}

const Image = ({ imgUrl, isEditing }: Props) => {
  const [newImgUrl, setNewImgUrl] = useState(imgUrl);
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const editImageUrl = useEditProduct();

  const handleEditImage = (newImgUrl: string) => {
    editImageUrl.mutate(newImgUrl);
    setNewImgUrl(newImgUrl);
    toggleForm();
  };

  return (
    <>
      {isEditing ? (
        <>
          <span className="absolute right-0">
            {isOpen ? (
              <EdiText
                type="text"
                value={newImgUrl}
                onSave={handleEditImage}
                onCancel={toggleForm}
                editOnViewClick={true}
                hideIcons={true}
                editing={true}
                editButtonClassName="border-0"
                saveButtonContent="&#10003;"
                saveButtonClassName="py-1 px-2 bg-slate-200 hover:text-white hover:bg-slate-400 mx-1"
                cancelButtonContent="&#120;"
                cancelButtonClassName="py-1 px-3 bg-red-200 hover:text-white hover:bg-red-400"
                inputProps={{
                  className: 'inputClass px-3 py-1.5',
                }}
              />
            ) : (
              <div
                className="p-2.5 border border-[#e5e7eb] border-t-0 border-r-0 rounded-bl-md cursor-pointer hover:bg-slate-200"
                onClick={toggleForm}
              >
                <HiOutlinePencil className="w-4 h-4 text-[#6B7280]" />
              </div>
            )}
          </span>
          <img
            src={newImgUrl}
            alt="product picture"
            loading="lazy"
            width="300"
            height="300"
          />
        </>
      ) : (
        <img
          src={newImgUrl}
          alt="product picture"
          loading="lazy"
          width="300"
          height="300"
        />
      )}
    </>
  );
};

export default Image;
