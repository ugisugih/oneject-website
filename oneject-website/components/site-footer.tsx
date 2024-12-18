import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Image from "next/image"

export function SiteFooter() {
  const certifications = [
    { name: "TKDN Domestic Component Level", src: "https://oneject.co.id/wp-content/uploads/2024/06/logo-kemenperin-1-768x702.png" },
    { name: "WHO", src: "https://oneject.co.id/wp-content/uploads/2024/06/world-health-organization-vector-logo-e1718850652944-980x551.png" },
    { name: "Halal Certification", src: "https://oneject.co.id/wp-content/uploads/2024/06/Logo-Halal-Oneject-480x791.png" },
    { name: "PQS WHO", src: "https://oneject.co.id/wp-content/uploads/2024/06/WHO-PQS-Logo-768x651.png" },
    { name: "CE Mark", src: "https://oneject.co.id/wp-content/uploads/2024/06/Logo-CE0044.png" },
    { name: "ISO 14001, 45001, 50001", src: "https://oneject.co.id/wp-content/uploads/2024/07/mark-of-trust-multi-scheme-14001-45001-50001-logo-En-GB-0720.png" },
    { name: "ISO 13485", src: "https://oneject.co.id/wp-content/uploads/2024/07/mark-of-trust-certified-ISO-13485-quality-management-for-medical-devices-BLACK-logo-En-GB-1019.png" },
    { name: "ISO 11137", src: "/placeholder.svg" },
  ]

  return (
    <footer className="bg-white text-black">
      <div className="border-b border-gray-700">
        <div className="container mx-auto max-w-screen-xl px-4 py-8">
          {/* Certifications */}
          <div className="flex justify-between items-center gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex justify-center items-center">
                <Image
                  src={cert.src}
                  alt={cert.name}
                  width={80}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-screen-xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://oneject.co.id/wp-content/uploads/2024/10/logo-OJI.png"
                alt="Oneject Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="space-y-4 text-[#5B5856]"> {/* Update 1 */}
              <div>
                <h3 className="font-semibold">PT Oneject Indonesia Office / Factory:</h3>
                <div className="mt-2 space-y-4">
                  <div>
                    <h4 className="font-medium">Sentul Factory:</h4>
                    <p className="flex items-start space-x-2">
                      <MapPin className="mt-1 h-5 w-5 shrink-0" />
                      <span>
                        Jl. Olympic Raya Blok B9
                        <br />
                        Kawasan Industri Sentul
                        <br />
                        Bogor 16810, Indonesia
                      </span>
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Bekasi Factory:</h4>
                    <p className="flex items-start space-x-2">
                      <MapPin className="mt-1 h-5 w-5 shrink-0" />
                      <span>
                        Jl. Anggrek VII No. 41
                        <br />
                        Kawasan Industri Terpadu Indonesia China (KITIC)
                        <br />
                        Kab. Bekasi, 17337, Indonesia
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-[#5B5856] hover:text-primary"> {/* Update 2 */}About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-[#5B5856] hover:text-primary"> {/* Update 2 */}Products</Link>
              </li>
              <li>
                <Link href="/news" className="text-[#5B5856] hover:text-primary"> {/* Update 2 */}News</Link>
              </li>
              <li>
                <Link href="/career" className="text-[#5B5856] hover:text-primary"> {/* Update 2 */}Career</Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#5B5856] hover:text-primary"> {/* Update 2 */}Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-[#5B5856] hover:text-primary"> {/* Update 3 */}
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-[#5B5856] hover:text-primary"> {/* Update 3 */}
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://linkedin.com" className="text-[#5B5856] hover:text-primary"> {/* Update 3 */}
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-[#5B5856]"> {/* Update 4 */}
          <p>&copy; {new Date().getFullYear()} PT Oneject Indonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

