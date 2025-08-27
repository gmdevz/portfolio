export default function ClipboardLandingPage() {
  return (
    <main className="font-sans">
      {/* Hero Section */}
      <section className="text-center px-6 py-20 bg-gray-50">
        <img
          src="/projects/landing-page/images/logo.svg"
          alt="Clipboard logo"
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold mb-6">
          A history of everything you copy
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition"
          >
            Download for iOS
          </a>
          <a
            href="#"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Download for Mac
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Keep track of your snippets</h2>
        <p className="text-gray-600 mb-12">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices.
        </p>
        <img
          src="/projects/landing-page/images/image-computer.png"
          alt="Computer mockup"
          className="mx-auto mb-12"
        />
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quick Search</h3>
            <p className="text-gray-600">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">iCloud Sync</h3>
            <p className="text-gray-600">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Complete History</h3>
            <p className="text-gray-600">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
