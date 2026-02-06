export default function Terms() {
    return (
        <main className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-slate-800">Terms of Service</h1>
            <div className="prose prose-lg text-slate-600">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>Welcome to Grace Finnovation. By accessing our website and services, you agree to comply with these terms.</p>
                <h2>1. Services</h2>
                <p>We provide revenue cycle management and medical billing services as described on our website.</p>
                <h2>2. Use of Site</h2>
                <p>You agree to use this site only for lawful purposes related to business inquiries.</p>
                <h2>3. Intellectual Property</h2>
                <p>All content on this site is the property of Grace Finnovation.</p>
            </div>
        </main>
    );
}
