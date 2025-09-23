import { PortfolioLayout } from "@/components/portfolio-layout"
import { ProjectsPage } from "@/components/projects-page"

export default function Projects() {
  return (
    <PortfolioLayout currentPage="projects">
      <ProjectsPage />
    </PortfolioLayout>
  )
}
