import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title: string;
  category?: string;
  client?: string;
  description?: string;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  image,
  title,
  category,
  client,
  description,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="portfolio-image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-4xl w-[92vw] md:w-full max-h-[85vh] md:max-h-none bg-zinc-950/95 border border-white/[0.12] rounded-2xl overflow-y-auto md:overflow-visible shadow-2xl flex flex-col md:flex-row items-stretch"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="btn-close-modal"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/70 border border-white/20 text-zinc-300 hover:text-white hover:bg-black flex items-center justify-center transition-all cursor-pointer shadow-lg"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Media Frame */}
            <div className="w-full md:w-3/5 bg-black/70 flex items-center justify-center p-3 sm:p-4 border-b md:border-b-0 md:border-r border-white/10 shrink-0">
              <img
                src={image}
                alt={title}
                className="max-h-[40vh] sm:max-h-[50vh] md:max-h-[70vh] w-auto object-contain rounded-lg shadow-xl"
              />
            </div>

            {/* Metadata Details */}
            <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-zinc-950/95">
              <div>
                {category && (
                  <span className="text-label font-jakarta font-medium text-blue-400 block mb-2">
                    {category}
                  </span>
                )}
                <h3 className="font-syne font-bold text-heading-sm text-white tracking-tight mb-2">
                  {title}
                </h3>
                {client && (
                  <p className="text-label font-jakarta text-zinc-400 mb-4">
                    Client: <span className="text-zinc-200">{client}</span>
                  </p>
                )}
                {description && (
                  <p className="text-body-sm text-zinc-300 leading-relaxed font-jakarta mt-3">
                    {description}
                  </p>
                )}
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
                <span className="text-label font-jakarta text-zinc-500">
                  Mohamed Imtiaz Portfolio
                </span>
                <button
                  onClick={onClose}
                  className="px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-label font-jakarta font-medium text-white transition-colors cursor-pointer"
                >
                  Close [ESC]
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
