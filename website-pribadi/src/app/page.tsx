import type { Metadata } from "next";
import Image from "next/image";
import imageProfil from '../../public/images/profil.jpg';

export const metadata: Metadata = {
  title: 'Tentang Saya',
  description: 'Halaman tentang saya',
  keywords: 'tentang saya, biodata, profil',
  openGraph: {
    title: 'Tentang Saya',
    description: 'Halaman tentang saya',
    type: 'website',
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white px-6 py-16">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

        {/* Foto Profil */}
        <div className="relative w-full md:w-1/3 bg-blue-600 p-6 flex items-center justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
            <Image
              src={imageProfil}
              alt="Foto Profil"
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Deskripsi */}
        <div className="w-full md:w-2/3 p-10">
          <h1 className="text-3xl font-bold text-blue-700">Halo! Saya Mahi</h1>
          <p className="mt-4 text-zinc-600 leading-relaxed">
            Saya adalah mahasiswa <strong>Teknik Informatika</strong> di <strong>Politeknik Negeri Malang</strong> dengan ketertarikan tinggi pada pengembangan aplikasi web dan mobile. Saya menikmati proses belajar teknologi baru seperti <strong>Next.js</strong>, <strong>Flutter</strong>, dan <strong>Cloud Computing</strong>.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-zinc-700">
            <div><span className="font-semibold text-blue-600">📍 Asal:</span> Kota Batu</div>
            <div><span className="font-semibold text-blue-600">📧 Email:</span> mahinizar7@gmail.com</div>
            <div><span className="font-semibold text-blue-600">🚀 Fokus:</span> Front-end, Mobile, Cloud</div>
            <div><span className="font-semibold text-blue-600">🎓 Kampus:</span> Politeknik Negeri Malang</div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
              Lihat Proyek Saya
            </button>
            <button className="bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2 rounded-xl transition">
              Hubungi Saya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
