import { useState, useEffect, useRef } from 'react';
import { Plus, Sparkles, Trash2, ArrowLeft, BookOpen, Hash, Lightbulb, Palette } from 'lucide-react';
import Modal from '../ui/Modal';
import InputField from '../ui/InputField';
import SelectField from '../ui/SelectField';
import Button from '../ui/Button';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/AuthContext';

const CreateBookModal = ({ isOpen, onClose, onBookCreated }) => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [bookTitle, setBookTitle] = useState('');
  const [numChapters, setNumChapters] = useState(5);
  const [aiTopic, setAITopic] = useState('');
  const [aiStyle, setAIStyle] = useState('Informative');
  const [chapters, setChapters] = useState([]);
  const [isGeneratingOutline, setIsGeneratingOutline] = useState(false);
  const [isFinalizingBook, setIsFinalizingBook] = useState(false);
  const chaptersContainerRef = useRef(null);

  const resetModal = () => {
    setStep(1);
    setBookTitle('');
    setNumChapters(5);
    setAITopic('');
    setAIStyle('Informative');
    setChapters([]);
    setIsGeneratingOutline(false);
    setIsFinalizingBook(false);
  };

  const handleGenerateOutline = async () => {};

  const handleChapterChnage = (index, field, value) => {
    const updatedChapters = [...chapters];
    updatedChapters[index][field] = value;
    setChapters(updatedChapters);
  }

  const handleDeleteChapter = (index) => {
    if(chapters.length <= 1) return;
    setChapters(chapters.filter((_, i) => i !== index));
  }

  const handleAddChapter = () => {
    setChapters([...chapters, { title: `Chapter ${chapters.length + 1}`, description: '' }]);
  }

  const handleFinalizeBook = async () => {};

  useEffect(() => {
    if(step === 2 && chaptersContainerRef.current) {
      const scrollableDiv = chaptersContainerRef.current;
      scrollableDiv.scrollTo({
        top: scrollableDiv.scrollHeight,
        behavior: 'smooth'
      })
    }
  },[chapters.length, step])

  return (
    <Modal isOpen={isOpen} onClose={() => {onClose(); resetModal()}} title="Create New eBook">
      {/* <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-violet-50 p-4 rounded-xl flex items-start gap-3 mb-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
            <Book className="w-5 h-5 text-violet-500" />
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900">What's your eBook about?</p>
            <p className="text-xs text-slate-500">Give it a title or describe the general theme. Our AI will help you generate an outline.</p>
          </div>
        </div>

        <InputField
          label="eBook Title / Theme"
          name="title"
          placeholder="e.g. The Future of AI in Medicine"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          autoFocus
        />

        <div className="flex gap-3 pt-2">
          <Button
            type="button"
            variant="secondary"
            className="flex-1"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="primary"
            className="flex-1"
            isLoading={isLoading}
          >
            Generate Outline
          </Button>
        </div>
      </form> */}
      Content Here
    </Modal>
  );
};

export default CreateBookModal;
