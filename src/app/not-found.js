import Link from "next/link";

export default function NotFound() {
    return (
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-gray-600">The page you’re looking for doesn’t exist.</p>

            <Link href="/"
                className="mt-6 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            >
                Go Home
            </Link>
        </div>
    );
}
