export default function ProjectCard({ project }) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="mt-2">{project.description}</p>
      </div>
    );
  }
  