import { useState } from 'react';

export default function VisionDemo() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const apiEndpoint = 'https://smallpan-unimart-product-classifier.hf.space/predict';

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setError(null);
            setResult(null);
            
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const analyzeImage = async () => {
        if (!selectedFile) return;

        setIsLoading(true);
        setError(null);
        setResult(null);

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to connect to the API');
            }

            const data = await response.json();
            
            // Map the API response to our result format
            setResult({
                category: data.prediction || 'Unknown',
                confidence: Math.round((data.confidence || 0.9) * 100)
            });
        } catch (err) {
            setError('Failed to analyze the image. Please make sure the API server is running and try again.');
            console.error('API Error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="vision-demo" className="py-20" style={{ backgroundColor: 'var(--color-peppercorn)', color: 'var(--color-feta)' }}>
            <div className="max-w-7xl mx-auto px-6 w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4" style={{ backgroundColor: 'rgba(246, 134, 52, 0.2)', color: 'var(--color-lpu-orange)' }}>
                        🤖 Custom AI Integration
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Meet <span style={{ color: 'var(--color-lpu-orange)' }}>UniMart Vision</span>
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8" style={{ color: '#AAAAAA' }}>
                        I trained and deployed a custom product classification model that automatically categorizes 
                        products when sellers upload them. No more manual tagging — just upload and go.
                    </p>
                    
                    {/* Integration Explanation */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#1E1E1E', borderColor: '#4A4A4A' }}>
                            <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-lpu-orange)' }}>How It Works in UniMart</h3>
                            <div className="grid md:grid-cols-3 gap-6 text-left">
                                <div>
                                    <div className="text-3xl mb-3">📸</div>
                                    <h4 className="font-semibold mb-2">1. Seller Uploads</h4>
                                    <p className="text-sm" style={{ color: '#AAAAAA' }}>
                                        When creating a listing, sellers upload product images through the UniMart app
                                    </p>
                                </div>
                                <div>
                                    <div className="text-3xl mb-3">🧠</div>
                                    <h4 className="font-semibold mb-2">2. AI Analyzes</h4>
                                    <p className="text-sm" style={{ color: '#AAAAAA' }}>
                                        My trained model processes the image and predicts the product category instantly
                                    </p>
                                </div>
                                <div>
                                    <div className="text-3xl mb-3">✨</div>
                                    <h4 className="font-semibold mb-2">3. Auto-Categorize</h4>
                                    <p className="text-sm" style={{ color: '#AAAAAA' }}>
                                        The category is automatically applied, making browsing and search effortless
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-lg max-w-2xl mx-auto" style={{ color: '#CCCCCC' }}>
                        <strong>Try it yourself below:</strong> Upload any product image to see the classification in action.
                    </p>
                </div>

                {/* Demo Interface */}
                <div className="max-w-5xl mx-auto">
                    <div className="rounded-2xl p-8 shadow-2xl border" style={{ backgroundColor: '#3A3A3A', borderColor: '#4A4A4A' }}>
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Upload Section */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Upload Product Image</h3>
                                <div className="border-2 border-dashed rounded-xl p-8 text-center transition-colors cursor-pointer" style={{ borderColor: '#555', backgroundColor: 'rgba(0,0,0,0.3)' }}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleImageUpload}
                                        className="hidden"
                                        id="image-upload"
                                    />
                                    <label htmlFor="image-upload" className="cursor-pointer block">
                                        {selectedImage ? (
                                            <img src={selectedImage} alt="Preview" className="max-h-64 mx-auto rounded-lg" />
                                        ) : (
                                            <div className="py-12">
                                                <svg className="w-16 h-16 mx-auto mb-4" style={{ color: '#888' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                <p style={{ color: '#AAAAAA' }}>Click to upload or drag and drop</p>
                                                <p className="text-sm mt-2" style={{ color: '#888' }}>PNG, JPG up to 10MB</p>
                                            </div>
                                        )}
                                    </label>
                                </div>
                                
                                {selectedImage && (
                                    <button
                                        onClick={analyzeImage}
                                        disabled={isLoading}
                                        className="w-full mt-4 px-6 py-3 rounded-lg font-semibold transition-all"
                                        style={{ 
                                            backgroundColor: isLoading ? '#555' : 'var(--color-lpu-orange)', 
                                            color: 'var(--color-feta)',
                                            cursor: isLoading ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        {isLoading ? 'Analyzing...' : 'Analyze Image'}
                                    </button>
                                )}
                            </div>

                            {/* Results Section */}
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Classification Results</h3>
                                {error ? (
                                    <div className="rounded-xl p-6 border text-center" style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', borderColor: 'rgba(239, 68, 68, 0.3)' }}>
                                        <svg className="w-12 h-12 mx-auto mb-3" style={{ color: '#ef4444' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p style={{ color: '#f87171' }}>{error}</p>
                                    </div>
                                ) : result ? (
                                    <div className="space-y-4">
                                        <div className="rounded-xl p-6 border" style={{ backgroundColor: '#1E1E1E', borderColor: '#4A4A4A' }}>
                                            <div className="flex justify-between items-center mb-2">
                                                <span style={{ color: '#AAAAAA' }}>Detected Category</span>
                                                <span className="font-semibold" style={{ color: 'var(--color-lpu-orange)' }}>{result.confidence}% confident</span>
                                            </div>
                                            <div className="text-3xl font-bold" style={{ color: 'var(--color-lpu-orange)' }}>{result.category}</div>
                                        </div>

                                        <div className="border rounded-xl p-4" style={{ backgroundColor: 'rgba(246, 134, 52, 0.1)', borderColor: 'rgba(246, 134, 52, 0.3)' }}>
                                            <p className="text-sm" style={{ color: 'var(--color-lpu-orange)' }}>
                                                ✨ This category will be automatically applied when you list this product!
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="rounded-xl p-12 border text-center" style={{ backgroundColor: '#1E1E1E', borderColor: '#4A4A4A' }}>
                                        <svg className="w-16 h-16 mx-auto mb-4" style={{ color: '#555' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                        </svg>
                                        <p style={{ color: '#888' }}>Upload an image to see AI classification in action</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="rounded-xl p-6 border" style={{ backgroundColor: '#3A3A3A', borderColor: '#4A4A4A' }}>
                            <div className="text-3xl mb-3">🎯</div>
                            <h4 className="font-semibold mb-2">Custom Trained Model</h4>
                            <p className="text-sm" style={{ color: '#AAAAAA' }}>Built and trained specifically for campus products like books, electronics, bikes, and more</p>
                        </div>
                        <div className="rounded-xl p-6 border" style={{ backgroundColor: '#3A3A3A', borderColor: '#4A4A4A' }}>
                            <div className="text-3xl mb-3">☁️</div>
                            <h4 className="font-semibold mb-2">Deployed & Production Ready</h4>
                            <p className="text-sm" style={{ color: '#AAAAAA' }}>Hosted on HuggingFace Spaces with a REST API for seamless integration</p>
                        </div>
                        <div className="rounded-xl p-6 border" style={{ backgroundColor: '#3A3A3A', borderColor: '#4A4A4A' }}>
                            <div className="text-3xl mb-3">⚡</div>
                            <h4 className="font-semibold mb-2">Real-Time Integration</h4>
                            <p className="text-sm" style={{ color: '#AAAAAA' }}>Plugs directly into the product upload flow — no manual work required</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}