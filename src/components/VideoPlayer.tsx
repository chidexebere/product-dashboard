import { useSelector } from 'react-redux';
import { RootState } from '../appState/store';
import YouTube from 'react-youtube';
import EdiText from 'react-editext';
import { useEditProduct } from '../api/hooks';

interface Props {
  videoURL: string;
}
const VideoPlayer = ({ videoURL }: Props) => {
  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);

  const editVideoURL = useEditProduct();

  const handleEdit = (editedVideoURL: string) => {
    editVideoURL.mutate({ video: editedVideoURL });
  };

  const videoID = videoURL.split('v=')[1];

  return (
    <>
      {isEditingPage ? (
        <EdiText
          type="text"
          value="Add a youtube or vimeo link"
          onSave={handleEdit}
          editOnViewClick={true}
          hideIcons={true}
          editButtonClassName="border-0"
          viewContainerClassName="inputClass h-9 px-3 cursor-pointer flex items-center gap-x-1.5 text-[#6B7280]"
          saveButtonContent="&#10003;"
          saveButtonClassName="py-1 px-2 bg-slate-200 hover:text-white hover:bg-slate-400 mx-1"
          cancelButtonContent="&#120;"
          cancelButtonClassName="py-1 px-3 bg-red-200 hover:text-white hover:bg-red-400"
          inputProps={{
            className: 'inputClass px-3 py-1 border-0',
            placeholder: 'Add a youtube or vimeo link',
          }}
        />
      ) : (
        <div className="flex justify-center items-center self-stretch">
          <YouTube
            className="w-full lg:w-3/5"
            iframeClassName="w-full"
            videoId={videoID}
          />
        </div>
      )}
    </>
  );
};

export default VideoPlayer;
