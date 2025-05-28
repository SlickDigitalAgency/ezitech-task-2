import React from 'react';
import { authorData } from '@/constants/author/AuthorSinlgeData';
import AuthorsSingle from '@/components/author/AuthorsSingle';

const AuthorSingle: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main>
        <AuthorsSingle author={authorData} />
      </main>
    </div>
  );
};

export default AuthorSingle;