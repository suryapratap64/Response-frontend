"use client";
import { useState } from 'react';
import axios from 'axios';

interface EmotionResponse {
  emotion: string;
  confidence: number;
  emoji: string;
}

export default function EmotionForm() {
  const [text, setText] = useState('');
  const [result, setResult] = useState<EmotionResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await axios.post('http://127.0.0.1:8000/analyze', { text });
      setResult(res.data);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center w-full min-h-screen bg-gradient-to-br from-yellow-200 via-white to-pink-400 p-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-6 text-center drop-shadow-lg">
          Emotion Reflector
        </h1>
     
      <div className="relative w-full max-w-md rounded-3xl bg-white/70 backdrop-blur-xl shadow-2xl p-6 border border-white/40 transition-transform duration-500 hover:-translate-y-1 hover:shadow-3xl">
        {/* Fancy floating gradient border */}
       
        <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-60 blur-sm"></div>
        
        <form onSubmit={handleSubmit} className="relative flex flex-col space-y-4 z-10">
          <textarea
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write your reflection..."
            required
            className="w-full text-gray-800 p-3 border border-gray-300 rounded-lg bg-white/80 backdrop-blur focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none transition-shadow hover:shadow-md"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-md shadow-md transform transition-all duration-300 hover:scale-105 hover:shadow-xl disabled:opacity-50"
          >
            {loading ? 'Analyzing...' : 'Submit'}
          </button>
        </form>

        {result && (
          <div className="mt-4 p-4 rounded-xl bg-white/80 backdrop-blur border border-gray-200 shadow-inner transition-transform duration-300 hover:scale-[1.02]">
            <p className="text-gray-700"><strong>Emotion:</strong> {result.emotion}</p>
            <p className="text-gray-700"><strong>Confidence:</strong> {(result.confidence * 100).toFixed(0)}%</p>
            <p className="text-gray-700 text-xl"><strong>Emoji:</strong> {result.emoji}</p>
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
}
