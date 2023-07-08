import { useState } from 'react';
import { ContentState, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import { unescape } from 'html-escaper';
import { Interweave } from 'interweave';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './style.css';
import { useEditProduct } from '../../api/hooks';
import { useSelector } from 'react-redux';
import { RootState } from '../../appState/store';
import { HiOutlineCheck } from 'react-icons/hi';

interface Props {
  contentFromAPI: string;
}

const RichTextEditor = ({ contentFromAPI }: Props) => {
  const content = ContentState.createFromText(contentFromAPI);
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(content),
  );
  const [convertedContent, setConvertedContent] = useState('');

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    const rawContentState = convertToRaw(state.getCurrentContent());
    const currentContentAsHTML = draftToHtml(rawContentState);
    const unescapedHTML = unescape(currentContentAsHTML);
    setConvertedContent(unescapedHTML);
  };

  const [isEditing, setIsEditing] = useState(true);
  const isEditingPage = useSelector((state: RootState) => state.app.isEditing);
  const editDescription = useEditProduct();

  const handleEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    const data = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    editDescription.mutate(data);
    handleEditing();
  };

  return (
    <div className="text-sm bg-white lowercase text-left">
      {isEditingPage ? (
        <div className="flex flex-col">
          {isEditing && (
            <Editor
              editorState={editorState}
              onEditorStateChange={handleEditorChange}
              wrapperClassName="border border-[#D1D5DB] rounded-md p-[5px]"
              editorClassName="editor-class text-primary px-2.5 m-0"
              toolbarClassName="toolbar-class"
              toolbar={{
                options: ['inline', 'list', 'textAlign', 'link', 'history'],
                inline: { options: ['bold', 'italic'] },
              }}
            />
          )}
          {!isEditing && (
            <div
              className="text-primary p-2.5 border border-[#D1D5DB] rounded-md overflow-auto cursor-pointer"
              onClick={handleEditing}
            >
              <Interweave content={convertedContent} />
            </div>
          )}
          {isEditing && (
            <div className="py-4 flex justify-end gap-2.5 text-primary">
              <button
                className="hover:text-red-400 rounded-md"
                onClick={handleEditing}
              >
                Cancel
              </button>

              <button
                className="flex items-center gap-1 py-2 px-4 bg-slate-400 text-white hover:text-black hover:bg-slate-200 rounded-md"
                onClick={handleSave}
              >
                <HiOutlineCheck className="w-5 h-5" />
                Save
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="text-primary border-0 overflow-auto leading-6">
          <Interweave content={contentFromAPI} />
        </div>
      )}
    </div>
  );
};

export default RichTextEditor;
