
import React, { useState, useRef } from 'react';

const AIRepairAssistant: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    setAnalyzing(true);
    // TODO: Implement your own AI analysis service
    setResult({
      damageType: "Analysis service not configured",
      repairability: "Medium",
      estimatedService: "Please configure an AI service to enable analysis",
      proAdvice: "Contact support for manual assessment"
    });
    setAnalyzing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white text-center">
          <h1 className="text-3xl font-bold mb-2">Be There AI Repair Assistant</h1>
          <p className="text-indigo-100">Get an instant diagnosis for your furniture damage using advanced visual AI.</p>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image Selection Area */}
            <div className="space-y-6">
              <div 
                className={`relative aspect-square rounded-2xl border-2 border-dashed flex items-center justify-center overflow-hidden transition-colors ${
                  selectedImage ? 'border-blue-500' : 'border-slate-300 bg-slate-50'
                }`}
              >
                {selectedImage ? (
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-slate-500 font-medium">Upload furniture photo</p>
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  className="hidden" 
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="flex-1 py-3 px-6 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {selectedImage ? 'Change Photo' : 'Select Photo'}
                </button>
                <button 
                  onClick={handleAnalyze}
                  disabled={!selectedImage || analyzing}
                  className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
                >
                  {analyzing ? 'Analyzing...' : 'Run Diagnosis'}
                </button>
              </div>
            </div>

            {/* Results Area */}
            <div className="flex flex-col h-full">
              {result ? (
                <div className="bg-blue-50 rounded-2xl p-6 h-full border border-blue-100 animate-in fade-in slide-in-from-right-4 duration-500">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Analysis Complete
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">Detected Damage</span>
                      <p className="text-slate-900 font-medium">{result.damageType}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">Repairability Score</span>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          result.repairability === 'High' ? 'bg-green-100 text-green-700' : 
                          result.repairability === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {result.repairability}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest block mb-1">Recommended Service</span>
                      <p className="text-slate-900 font-medium">{result.estimatedService}</p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-sm">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Expert Advice</span>
                      <p className="text-sm text-slate-600 italic">"{result.proAdvice}"</p>
                    </div>
                  </div>
                  
                  <button className="w-full mt-auto py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors">
                    Request This Service
                  </button>
                </div>
              ) : (
                <div className="bg-slate-50 rounded-2xl border border-slate-200 border-dashed p-10 flex flex-col items-center justify-center text-center h-full">
                  <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-slate-700">Awaiting Input</h3>
                  <p className="text-sm text-slate-500 mt-2">Upload a photo to see detailed repair information.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIRepairAssistant;
