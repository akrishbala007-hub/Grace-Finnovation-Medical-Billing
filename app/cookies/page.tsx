export default function Cookies() {
    return (
        <main className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-800">Cookie Policy</h1>
            <div className="prose prose-lg text-slate-600">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>We use cookies to enhance your experience on our website.</p>
                <h2>What are cookies?</h2>
                <p>Cookies are small text files stored on your device when you visit a website.</p>
                <h2>How we use them</h2>
                <p>We use cookies for analytics and to remember your preferences.</p>
            </div>
        </main>
    );
}
