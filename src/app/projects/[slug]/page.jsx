import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, getProjectBySlug } from "@/data/projects";
import ProjectHero from "@/components/project-details/ProjectHero";
import ProjectOverview from "@/components/project-details/ProjectOverview";
import ProjectFeatures from "@/components/project-details/ProjectFeatures";
import ProjectTechStack from "@/components/project-details/ProjectTechStack";
import ProjectChallenges from "@/components/project-details/ProjectChallenges";
import ProjectLessons from "@/components/project-details/ProjectLessons";
import ProjectGallery from "@/components/project-details/ProjectGallery";
import RelatedProjects from "@/components/project-details/RelatedProjects";

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested portfolio project could not be found.",
    };
  }

  return {
    title: `${project.title} — ${project.subtitle} | Portfolio`,
    description: project.description,
    openGraph: {
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${project.subtitle}`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-on-primary">
      <Navbar />

      <article className="w-full">
        {/* 1. Hero Section */}
        <ProjectHero project={project} />

        {/* 2. Project Overview */}
        <ProjectOverview overview={project.overview} />

        {/* 3. Key Features */}
        <ProjectFeatures features={project.features} />

        {/* 4. Tech Stack */}
        <ProjectTechStack techStack={project.techStack} />

        {/* 5. Challenges & Solutions */}
        <ProjectChallenges challenges={project.challenges} />

        {/* 6. Lessons Learned & 7. Future Improvements */}
        <ProjectLessons
          lessonsLearned={project.lessonsLearned}
          futureImprovements={project.futureImprovements}
        />

        {/* 8. Screenshots Gallery */}
        <ProjectGallery
          screenshots={project.screenshots}
          title={project.title}
        />

        {/* 9. Related Projects */}
        <RelatedProjects currentSlug={project.slug} />
      </article>

      <Footer />
    </main>
  );
}
