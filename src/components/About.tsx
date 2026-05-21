import { Button } from "./ui/Button";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Raviteja2003",
    icon: Github,
    color: "hover:text-gray-900 hover:bg-gray-100",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/tadikonda-ravi-teja",
    icon: Linkedin,
    color: "hover:text-blue-600 hover:bg-blue-50",
  },
];

const About: React.FC = () => {
  return (
    <div id="about" className="min-h-screen">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="order-2 space-y-8 lg:order-1">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                  👋 Hello there!
                </span>
              </div>
              <h1 className="text-4xl font-bold leading-tight text-gray-900 lg:text-6xl">
                I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-500">
                  Ravi Teja
                </span>
              </h1>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-gray-700 lg:text-2xl">
                  Software Engineer | Full-Stack & Cloud
                </h2>
                <div className="w-20 h-1 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></div>
              </div>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-gray-600">
              I am a passionate full-stack developer with expertise in modern
              web technologies and cloud platforms. Driven by continuous
              learning and innovation, I excel at crafting scalable, secure
              applications that deliver seamless user experiences. I thrive on
              tackling complex challenges and staying updated with emerging
              trends to create impactful digital solutions
            </p>
            {/* Social Links */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full border border-gray-200 text-gray-600 transition-all duration-300 ${social.color} transform hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>
            {/* Action Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg transition-all duration-300 hover:from-blue-600 hover:to-indigo-600 hover:shadow-xl"
                asChild
              >
                <a
                  href="mailto:ravitejat0406@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail size={18} />
                  Get In Touch
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="transition-all duration-300 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50"
                asChild
              >
                <a
                  href="./Tadikonda_Ravi_Teja_Resume.pdf"
                  download="Tadikonda Ravi Teja Resume.pdf"
                  className="flex items-center gap-2"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex items-center justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative p-4 bg-white rounded-full shadow-2xl">
                <img
                  src="/MyImage.jpg"
                  alt="Ravi Teja - Full Stack Developer"
                  className="object-cover border-4 border-white rounded-full shadow-xl w-80 h-80 lg:w-96 lg:h-96"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute p-3 text-white bg-orange-500 rounded-full shadow-lg -top-4 -right-4 animate-bounce">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute p-3 text-white delay-1000 bg-blue-500 rounded-full shadow-lg -bottom-4 -left-4 animate-bounce">
                <span className="text-2xl">☁️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;