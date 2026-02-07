// import { useState } from 'react';
// import toast from 'react-hot-toast';
// import { Book } from 'lucide-react';
// import Modal from '../ui/Modal';
// import InputField from '../ui/InputField';
// import Button from '../ui/Button';
// import axiosInstance from '../../utils/axiosInstance';
// import { API_PATHS } from '../../utils/apiPaths';

// const CreateBookModal = ({ isOpen, onClose, onSuccess }) => {
//   const [title, setTitle] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!title.trim()) {
//       return toast.error('Please enter a title or theme for your eBook');
//     }

//     setIsLoading(true);
//     try {
//       const response = await axiosInstance.post(API_PATHS.BOOKS.CREATE_BOOK, {
//         title: title.trim(),
//       });
      
//       toast.success('eBook created successfully!');
//       onSuccess(response.data.book._id);
//       setTitle('');
//     } catch (error) {
//       console.error('Error creating book:', error);
//       toast.error(error.response?.data?.message || 'Failed to create eBook. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <Modal isOpen={isOpen} onClose={onClose} title="Create New eBook">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         <div className="bg-violet-50 p-4 rounded-xl flex items-start gap-3 mb-2">
//           <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
//             <Book className="w-5 h-5 text-violet-500" />
//           </div>
//           <div>
//             <p className="text-sm font-medium text-slate-900">What's your eBook about?</p>
//             <p className="text-xs text-slate-500">Give it a title or describe the general theme. Our AI will help you generate an outline.</p>
//           </div>
//         </div>

//         <InputField
//           label="eBook Title / Theme"
//           name="title"
//           placeholder="e.g. The Future of AI in Medicine"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           autoFocus
//         />

//         <div className="flex gap-3 pt-2">
//           <Button
//             type="button"
//             variant="secondary"
//             className="flex-1"
//             onClick={onClose}
//             disabled={isLoading}
//           >
//             Cancel
//           </Button>
//           <Button
//             type="submit"
//             variant="primary"
//             className="flex-1"
//             isLoading={isLoading}
//           >
//             Generate Outline
//           </Button>
//         </div>
//       </form>
//     </Modal>
//   );
// };

// export default CreateBookModal;
