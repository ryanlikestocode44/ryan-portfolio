import Navbar from "@/components/common/Navbar";

const Projects = () => {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-lg">Here are some of my projects.</p>
        {/* Add project details here */}
      </div>
    </div>
  );
};

export default Projects;
