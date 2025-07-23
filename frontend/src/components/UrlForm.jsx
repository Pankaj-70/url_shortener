import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import createShortUrl from '../apis/createShortUrl';

const UrlForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [customSlug, setCustomSlug] = useState('');
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  // Get authentication state from Redux
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Only pass customSlug if authenticated
    const slug = isAuthenticated ? customSlug : null;
    const shortUrl = await createShortUrl(longUrl, slug);
    setShortUrl(shortUrl);
  };

  const handleCopy = async () => {
    if (shortUrl) {
      await navigator.clipboard.writeText(shortUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div>
      <form className="flex flex-col gap-4 mb-4" onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
          required
        />
        {/* Custom URL input, only enabled if authenticated */}
        <input
          type="text"
          placeholder="Custom URL (optional)"
          value={customSlug}
          onChange={(e) => setCustomSlug(e.target.value)}
          className={`px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base ${!isAuthenticated ? 'bg-gray-100 cursor-not-allowed' : ''}`}
          disabled={!isAuthenticated}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-600"
        >
          Shorten URL
        </button>
      </form>
      {shortUrl && (
        <div className="mt-4 bg-indigo-50 rounded-lg p-4 shadow flex flex-col items-center">
          <p className="text-indigo-500 font-medium mb-1">Short URL:</p>
          <div className="flex items-center gap-2">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-700 font-bold underline break-all"
            >
              {shortUrl}
            </a>
            <button
              onClick={handleCopy}
              className="ml-2 px-2 py-1 rounded bg-indigo-400 text-white hover:bg-indigo-600 transition text-sm"
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}
      {!isAuthenticated && (
        <div className="text-xs text-gray-500 mt-2">
          Login to use custom URLs.
        </div>
      )}
    </div>
  );
};

export default UrlForm;