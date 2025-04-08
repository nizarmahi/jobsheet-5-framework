import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Esai",
    description: "Esai is a simple, fast, and secure way to write and share essays with others.",
    keywords: "Esai, essay, writing, sharing",
    openGraph: {
        title: "Esai",
        description: "Esai is a simple, fast, and secure way to write and share essays with others."
    }
};

type Article = {
    title: string;
    description: string;
    date: string;
    slug: string;
};

const articles: Article[] = [
    {
        title: "Kenapa Menulis Itu Penting?",
        description: "Menulis dapat membantu kita menuangkan ide dan berpikir secara jernih.",
        date: "2025-04-01",
        slug: "kenapa-menulis-itu-penting"
    },
    {
        title: "Mengenal Essay Argumentatif",
        description: "Essay ini bertujuan meyakinkan pembaca dengan argumen yang logis.",
        date: "2025-03-28",
        slug: "mengenal-essay-argumentatif"
    },
    {
        title: "Menulis dengan Gaya Pribadi",
        description: "Gaya menulis yang khas membuat tulisanmu lebih menarik.",
        date: "2025-03-15",
        slug: "menulis-dengan-gaya-pribadi"
    }
];

export default function Essays() {
    return (
        <div className="mt-16 px-8">
            <h1 className="font-bold text-4xl text-zinc-800 mb-8">Essays</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article, index) => (
                    <div
                        key={index}
                        className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                    >
                        <h2 className="text-xl font-semibold text-zinc-800">{article.title}</h2>
                        <p className="mt-2 text-sm text-zinc-600">{article.description}</p>
                        <p className="mt-4 text-xs text-zinc-400">{new Date(article.date).toDateString()}</p>
                        <Link
                            // href={`/essays/${article.slug}`}
                            href="#"
                            className="inline-block mt-4 text-sm text-teal-600 hover:underline font-medium"
                        >
                            Baca Selengkapnya →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
