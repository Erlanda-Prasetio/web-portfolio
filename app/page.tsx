import { PortfolioLayout } from "@/components/portfolio-layout"
import { HomePage } from "@/components/home-page"

export default function Home() {
  return (
    <PortfolioLayout currentPage="home">
      <HomePage />
    </PortfolioLayout>
  )
}
