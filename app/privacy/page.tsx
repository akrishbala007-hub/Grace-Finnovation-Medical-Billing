export default function Privacy() {
    return (
        <main className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-800">Privacy Policy</h1>
            <div className="prose prose-lg text-slate-600">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>Your privacy is important to us. This policy explains how we handle your information.</p>
                <h2>Data Collection</h2>
                <p>We collect information you provide directly via our contact forms (Name, Email, Phone).</p>
                <h2>Use of Information</h2>
                <p>We use this information solely to respond to your inquiries and provide our services.</p>
                <h2>Data Protection</h2>
                <p>We implement security measures to maintain the safety of your personal information.</p>
            </div>
        </main>
    );
}
