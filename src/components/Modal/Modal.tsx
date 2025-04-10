import React, { ReactNode, useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
}

/**
 * Modal component with basic accessibility and transition.
 * Uses Tailwind CSS for styling.
 */
export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // Close modal on ESC key press
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="bg-white rounded-2xl shadow-lg max-w-lg w-full mx-4 p-6 relative"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {title && (
          <h2 id="modal-title" className="text-xl font-semibold mb-4">
            {title}
          </h2>
        )}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          ✕
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};
