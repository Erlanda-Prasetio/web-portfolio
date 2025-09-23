import { PortfolioLayout } from "@/components/portfolio-layout"
import { ContactPage } from "@/components/contact-page"

export default function Contact() {
  return (
    <PortfolioLayout currentPage="contact">
      <ContactPage />
    </PortfolioLayout>
  )
}
