import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-8 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-2">
          <p className="text-gray-300">
            Copyright © 2025 Kaviya. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-2 text-gray-400">
            Designed and built with <Heart size={16} className="text-red-500 fill-red-500" />
          </p>
        </div>
      </div>
    </footer>
  );
};
