'use client';
import { useState } from 'react';
import axios from 'axios';
export default function ClientCases() {
  const [title, setTitle] = useState('');
  const [answers, setAnswers] = useState({ area: '', location: '', budget: '', details: '' });
  const [summary, setSummary] = useState('');
  const gen = async () => {
    const res = await axios.post('/api/gpt', { title, answers });
    setSummary(res.data.summary);
  };
  return (
    <div className="space-y-4">
      <h3>New Case</h3>
      <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} className="w-full" />
      <input placeholder="Area" value={answers.area} onChange={e=>setAnswers({...answers, area:e.target.value})} className="w-full" />
      <textarea placeholder="Details" value={answers.details} onChange={e=>setAnswers({...answers, details:e.target.value})} className="w-full" />
      <div className="flex gap-3">
        <button onClick={gen} className="bg-secondary px-4 py-2 rounded-2xl">GPT Summary</button>
      </div>
      {summary && <pre className="whitespace-pre-wrap border p-3 rounded-xl">{summary}</pre>}
    </div>
  );
}
