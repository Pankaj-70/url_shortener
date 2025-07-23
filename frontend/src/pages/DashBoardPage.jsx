import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getUserUrls } from '../apis/userApis.js';
import UrlForm from '../components/UrlForm.jsx';

const DashBoardPage = () => {
  const { data: urls, isLoading, isError } = useQuery({
    queryKey: ['userUrls'],
    queryFn: getUserUrls,
    refetchInterval: 10000,
  });

  return (
    <div className="max-w-md mx-auto mt-16 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl shadow-lg p-8 text-center">
      <h2 className="text-indigo-600 font-bold text-2xl mb-6">🔗 URL Shortener</h2>
        <UrlForm />
      <div className="mt-8">
        <h3 className="text-indigo-500 font-semibold mb-4">Your Shortened URLs</h3>
        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p className="text-red-500">Error loading URLs.</p>
        ) : urls && urls.length === 0 ? (
          <p className="text-gray-500">No URL s found.</p>
        ) : (
          <ul className="space-y-3">
            {urls?.map((url, idx) => (
              <li key={idx} className="bg-indigo-50 rounded p-2 flex flex-col items-center">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-700 font-bold underline break-all"
                >
                  {url}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DashBoardPage;