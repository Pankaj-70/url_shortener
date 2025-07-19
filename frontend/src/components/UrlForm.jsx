import React, {useState} from 'react'
import axios from 'axios';
const UrlForm = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState(null);
    // const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
  const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:3000/api/create", {url: longUrl});
        console.log(response.data);
        setShortUrl(response.data.shortUrl);
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
        <form className="flex flex-col gap-4 mb-4">
        <input
          type="url"
          placeholder="Paste your long URL here..."
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="px-4 py-2 rounded-lg border border-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-base"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className='px-4 py-2 rounded-lg font-semibold text-white bg-indigo-500 hover:bg-indigo-600'
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
    </div>
  )
}

export default UrlForm