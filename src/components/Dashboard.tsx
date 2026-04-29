import { useState } from 'react';
import { Loader2, Youtube, Sparkles, Twitter } from 'lucide-react';

export default function Dashboard() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [threads, setThreads] = useState<string[][]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    
    setIsLoading(true);
    
    try {
      // In a real app, this sends a webhook to Scramjet.
      // We simulate the heavy compute delay here.
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      
      const data = await response.json();
      setThreads(data.threads);
    } catch (error) {
      console.error(error);
      alert("Failed to connect to Scramjet engine.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Turn Videos into Viral Threads</h1>
        <p className="text-gray-400 text-lg">Paste a YouTube URL below. Scramjet will scrape the transcript and use AI to extract 5 high-converting Twitter hooks.</p>
      </div>

      <form onSubmit={handleGenerate} className="max-w-3xl mx-auto relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
        <div className="relative flex items-center bg-[#0A0A0A] border border-white/10 rounded-xl overflow-hidden p-2">
          <div className="pl-4 pr-3 text-gray-400">
            <Youtube className="w-5 h-5" />
          </div>
          <input 
            type="url" 
            placeholder="https://youtube.com/watch?v=..." 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none px-2 py-3"
            required
          />
          <button 
            type="submit" 
            disabled={isLoading}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
            {isLoading ? 'Generating...' : 'Generate'}
          </button>
        </div>
      </form>

      {/* Results Grid */}
      {threads.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8 border-t border-white/5">
          {threads.map((thread, idx) => (
            <div key={idx} className="bg-[#111] border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-2 text-blue-400 mb-4 pb-4 border-b border-white/5">
                <Twitter className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide">THREAD OPTION {idx + 1}</span>
              </div>
              <div className="space-y-4">
                {thread.map((tweet, tIdx) => (
                  <p key={tIdx} className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">
                    {tweet}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
