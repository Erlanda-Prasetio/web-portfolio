import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export function HomePage() {
  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Erlanda Galant Prasetio</h1>
        <p className="text-xl text-gray-600 font-medium">TEKNIK INFORMATIKA | FULL STACK DEVELOPER</p>
      </div>

      <div className="prose prose-lg text-gray-700 leading-relaxed">
        <p className="mb-6">
          Saya Erlanda, mahasiswa Teknik Informatika yang fokus pada full stack development. Pengalaman saya mencakup web design, pengembangan aplikasi web, dan implementasi AI chatbot.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Keahlian Teknis</h3>
        <p className="mb-6">
          Saya mengerjakan proyek dari sisi frontend sampai backend. Untuk frontend, saya menangani UI/UX design dan implementasinya. Di backend, saya membangun sistem yang dapat menangani load dan requirements yang kompleks. Yang menarik bagi saya adalah mengintegrasikan AI, khususnya dalam mengembangkan chatbot yang dapat memahami context dan memberikan respons yang relevan.
        </p>

        <p className="mb-6">
          Saya selalu mengikuti perkembangan teknologi terbaru, tapi lebih mengutamakan pemilihan tools dan framework yang tepat untuk setiap project. Kualitas kode dan performa aplikasi adalah prioritas utama dalam setiap development process.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mb-4">Setup Kerja</h3>
        <p className="mb-8">
          Berdomisili di Tegal, Jawa Tengah, saya bekerja dari home office yang sudah disesuaikan untuk kebutuhan development. Environment ini memungkinkan saya untuk focus pada detail teknis yang kompleks. Untuk project collaboration, saya dapat bekerja secara remote atau on-site sesuai kebutuhan client. Ketika menghadapi problem yang challenging, saya biasanya meluangkan waktu untuk research dan eksplorasi berbagai approach sebelum menentukan solusi terbaik.
        </p>

        <div className="flex space-x-6 text-gray-600">
          <HoverCard>
            <HoverCardTrigger asChild>
              <a 
                href="https://github.com/Erlanda-Prasetio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors cursor-pointer"
              >
                GitHub
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">@Erlanda-Prasetio</h4>
                  <p className="text-sm">
                    Full-stack developer passionate about modern web technologies and open-source contributions.
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      Click to visit GitHub profile
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          <span>—</span>
          <HoverCard>
            <HoverCardTrigger asChild>
              <a href="#" className="hover:text-red-500 transition-colors cursor-pointer">
                LinkedIn
              </a>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
              <div className="flex justify-between space-x-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold">LinkedIn Profile</h4>
                  <p className="text-sm">
                    Professional network and career information - coming soon!
                  </p>
                  <div className="flex items-center pt-2">
                    <span className="text-xs text-muted-foreground">
                      LinkedIn profile under development
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </div>
  )
}
