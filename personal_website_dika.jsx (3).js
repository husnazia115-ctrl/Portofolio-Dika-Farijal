// ===============================
// WEBSITE PORTOFOLIO RESMI
// FOTO PROFIL SUDAH DISEDIAKAN
// ===============================
// LANGKAH AGAR FOTO TAMPIL DI WEBSITE:
// 1. Simpan foto yang Anda upload dengan nama: dika-farijal.png
// 2. Masukkan file tersebut ke dalam folder /public pada project React Anda
// 3. Pastikan penulisan nama file sama persis (huruf besar/kecil harus sama)

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-white shadow-md">
        <div className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-8 items-center">

          {/* ===== TEXT PROFIL ===== */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dika Farijal
            </h1>

            <p className="text-lg text-gray-600 mb-6">
              Lulusan SMK Jurusan Agribisnis Tanaman dengan minat pada
              pertanian modern, hortikultura, dan pengembangan usaha agribisnis.
            </p>

            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-blue-700 transition"
              >
                Hubungi Saya
              </a>
              <a
                href="#about"
                className="border border-gray-300 px-6 py-3 rounded-2xl hover:bg-gray-100 transition"
              >
                Tentang Saya
              </a>
            </div>
          </div>

          {/* ===== FOTO PROFIL RESMI ===== */}
          <div className="flex justify-center">
            <img
              src="/dika-farijal.png"  // Ambil foto dari folder public
              alt="Foto Resmi Dika Farijal"
              className="w-64 h-64 object-cover rounded-2xl shadow-xl border-4 border-white"
            />
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Tentang Saya</h2>
        <p className="text-gray-600 leading-relaxed">
          Saya adalah lulusan SMK dengan kompetensi di bidang Agribisnis Tanaman
          Pangan dan Hortikultura. Memiliki pengalaman praktik dalam budidaya
          tanaman, pengolahan hasil pertanian, serta manajemen usaha kecil di
          bidang agribisnis.
        </p>
      </section>

      {/* ================= SKILLS SECTION ================= */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Keahlian</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Budidaya Tanaman",
              "Perawatan & Pemupukan",
              "Pengendalian Hama",
              "Manajemen Usaha Tani",
              "Pengolahan Hasil Pertanian",
              "Leadership",
              "Manajemen Waktu",
              "Public Speaking",
              "Marketing",
              "Kerja Tim & Disiplin",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-6">Kontak</h2>
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <p className="mb-2">Email: dikafarijal6@gmail.com</p>
          <p className="mb-2">WhatsApp: 083150182467</p>
          <p>Lokasi: Purwakarta, Jawa Barat</p>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-white text-center py-6 mt-10">
        <p>
          © {new Date().getFullYear()} Dika Farijal. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
