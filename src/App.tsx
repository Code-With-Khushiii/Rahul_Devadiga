import { useState, useEffect } from 'react';
import { ChevronDown, Atom, BookOpen, ClipboardCheck, FlaskConical, Heart, ShieldCheck, Monitor, GraduationCap, Mail, Phone, Menu, Linkedin, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'achievements', ...(projects.length > 0 ? ['projects'] : []), 'skills', 'education', ...(papers.length > 0 ? ['papers'] : []), ...(certifications.length > 0 ? ['certifications'] : []), 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Data Analyst and Analytics Platform Engineer with 4+ years of experience across business intelligence, advanced analytics, data engineering, and AI-assisted analytics solutions. I use SQL, Python, Snowflake, AWS, and Power BI to turn complex data into practical business insight. My work has improved forecasting accuracy by 30%, delivered 30+ executive reports quarterly, and supported governed data repositories adopted across 10+ departments.";

  const experience = [
    {
      company: "IllumiFi Advisory Ltd",
      role: "Data Analyst & Analytics Platform Engineer",
      location: "London, United Kingdom",
      dates: "Jun 2025 – Present",
      highlights: [
        "Engineered AWS and Snowflake data integration and ETL workflows, consolidating multi-source e-commerce data into centralized warehouses for BI, KPI reporting, and operational analytics.",
        "Developed Amazon QuickSight dashboards using SPICE and dimensional data models, translating business needs into standardized KPIs, executive reports, and financial visualizations.",
        "Implemented source-to-target mapping, transformation, and data quality validation to improve consistency, reporting reliability, and governance across analytics pipelines.",
        "Built predictive analytics and machine learning prototypes with Python and Amazon SageMaker to advance forecasting and data-driven analysis.",
        "Expanded the analytics platform to a second e-commerce brand by reusing governed datasets, KPI definitions, and dashboard templates, meeting delivery milestones ahead of schedule.",
        "Led structured UAT, dashboard validation, and stakeholder reporting with finance and operations teams, turning requirements into production-ready BI solutions."
      ]
    },
    {
      company: "Media Logic",
      role: "Data Analyst",
      location: "Dubai, UAE",
      dates: "Aug 2022 – Sep 2024",
      highlights: [
        "Built predictive analytics and demand forecasting models using real-time operational data, improving forecast accuracy by approximately 30% and reducing inventory stock-outs.",
        "Delivered 30+ executive reports quarterly on sales trends, operational KPIs, and business performance to support C-suite reporting and strategic decisions.",
        "Introduced data quality checks and validation controls across reporting pipelines, improving accuracy and reducing errors and manual reconciliation.",
        "Standardized KPI definitions, reporting frameworks, and analytical processes across business functions to strengthen sales and operational performance reporting."
      ]
    },
    {
      company: "Digital Qatalyst",
      role: "Senior Transformation Platform Architect",
      location: "Dubai, UAE",
      dates: "Jun 2022 – Sep 2023",
      highlights: [
        "Architected a centralized data repository integrating enterprise datasets across 10+ departments, establishing a governed source of truth for analytics and reporting.",
        "Designed Power BI and Tableau dashboards combining operational KPIs and business performance metrics for executive reporting.",
        "Automated data analysis and reporting with Ardoq Gremlin graph filters and calculated fields, reducing manual errors and streamlining validation.",
        "Established data governance frameworks and documented 18 IT SOPs aligned with SAFe, COBIT, ITIL, and IT4IT."
      ]
    }
  ];

  const achievements = [
    "Improved demand forecasting accuracy by approximately 30%, helping reduce inventory stock-outs.",
    "Produced 30+ executive reports each quarter for leadership decision-making.",
    "Established centralized, governed data repositories adopted across 10+ departments.",
    "Documented 18 IT standard operating procedures aligned with SAFe, COBIT, ITIL, and IT4IT.",
    "Expanded a governed analytics platform to a second e-commerce brand ahead of schedule."
  ];

  const projects: {
    title: string; subtitle: string; category: string; introduction: string; problem: string;
    objective: string; methodology: string[]; results: string[]; conclusion: string;
  }[] = [];

  const skillCategories = [
    {
      icon: Atom,
      title: 'Programming & Analytics',
      skills: ['SQL', 'Python', 'R', 'Pandas', 'NumPy', 'SciPy', 'Exploratory Data Analysis', 'Statistical Analysis', 'Data Cleaning', 'Data Transformation', 'Data Validation']
    },
    {
      icon: BookOpen,
      title: 'BI & Visualization',
      skills: ['Power BI', 'Tableau', 'Amazon QuickSight', 'Dashboard Development', 'KPI Reporting', 'Data Visualization', 'Executive Reporting', 'Business Intelligence', 'Data Storytelling']
    },
    {
      icon: ClipboardCheck,
      title: 'Databases & Cloud',
      skills: ['Snowflake', 'AWS', 'Microsoft SQL Server', 'Google BigQuery', 'Databricks', 'Data Warehousing', 'Dimensional Data Modeling', 'Database Management']
    },
    {
      icon: FlaskConical,
      title: 'Data Engineering',
      skills: ['ETL', 'Data Integration', 'Data Pipelines', 'Source-to-Target Mapping', 'Data Quality Management', 'Data Governance', 'Metadata Management', 'Semantic Modeling']
    },
    {
      icon: Heart,
      title: 'Machine Learning',
      skills: ['Scikit-learn', 'Regression Analysis', 'Predictive Modeling', 'Time Series Forecasting', 'Demand Forecasting', 'Feature Engineering', 'Model Validation', 'Amazon SageMaker']
    },
    {
      icon: ShieldCheck,
      title: 'Business Analysis',
      skills: ['Requirements Gathering', 'Business Process Analysis', 'Performance Metrics', 'Data Reconciliation', 'Reporting Automation', 'User Acceptance Testing', 'Stakeholder Reporting']
    },
    {
      icon: Monitor,
      title: 'AI Tools & Development',
      skills: ['Claude Code', 'OpenAI Codex', 'AI-Assisted SQL Development', 'Data Modelling', 'Dashboard Building']
    }
  ];

  const education = [
    {
      school: "University of Salford",
      degree: "Master of Science (MSc) in Data Science",
      location: "Manchester, United Kingdom",
      dates: "2024 – 2025",
      details: ""
    },
    {
      school: "Shree L. R. Tiwari College of Engineering, University of Mumbai",
      degree: "Bachelor of Engineering (BEng) in Computer Science",
      location: "Mumbai, India",
      dates: "2018 – 2022",
      details: ""
    }
  ];
  const papers: { title: string; publication: string; year: string; link: string }[] = [];

  const certifications: { title: string; platform: string; description: string; link: string }[] = [
    { title: "Google Data Analytics Professional Certificate", platform: "Google", description: "", link: "" },
    { title: "Machine Learning for All", platform: "University of London", description: "", link: "" },
    { title: "Programming for Everybody (Python)", platform: "University of Michigan", description: "", link: "" },
    { title: "Python Data Structures", platform: "University of Michigan", description: "", link: "" },
    { title: "Career Essentials in Data Analysis", platform: "Microsoft & LinkedIn", description: "", link: "" }
  ];

  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">

          <div className="relative flex items-center justify-center">

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 flex-shrink-0">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'achievements', label: 'Achievements' },
                ...(projects.length > 0 ? [{ id: 'projects', label: 'Projects' }] : []),
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black font-medium"
                    : "text-brown hover:text-black"
                    }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Hamburger */}
            <button
              className="absolute right-0 md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>

          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col space-y-4 border-t border-brown/20 pt-4">

              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'achievements', label: 'Achievements' },
                ...(projects.length > 0 ? [{ id: 'projects', label: 'Projects' }] : []),
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                ...(papers.length > 0 ? [{ id: 'papers', label: 'Papers' }] : []),
                ...(certifications.length > 0 ? [{ id: 'certifications', label: 'Certifications' }] : []),
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className="text-left text-brown hover:text-black transition"
                >
                  {item.label}
                </button>
              ))}

            </div>
          )}

        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <div className="mb-12">
              <img
                src="images/image.png"
                alt="Rahul Devadiga"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-black mb-6 tracking-wide leading-tight break-words">
              RAHUL DEVADIGA
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
              Data Analyst · Business Intelligence · Advanced Analytics · AI Engineering
            </div>
            <div className="text-sm uppercase tracking-[0.18em] sm:tracking-[0.3em] text-brown/80 mb-1">
              LONDON, UNITED KINGDOM
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🚀 VIEW EXPERIENCE
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'ANALYTICS EXPERIENCE', value: '4+ yrs', detail: 'BI, Advanced Analytics & Data Engineering' },
              { label: 'FORECAST ACCURACY', value: '30%', detail: 'Improvement through predictive analytics' },
              { label: 'DATA REPOSITORY', value: '10+', detail: 'Departments supported' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Analytics engineering and business intelligence for clearer, trusted, data-driven decisions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Atom,
                title: 'Business Intelligence',
                detail: 'Build Power BI, Tableau, and QuickSight dashboards that turn business requirements into clear KPIs and executive reporting.'
              },
              {
                icon: Heart,
                title: 'Advanced Analytics',
                detail: 'Apply Python, statistical analysis, and predictive modeling to uncover trends and improve demand forecasting accuracy.'
              },
              {
                icon: GraduationCap,
                title: 'Data Platforms & Governance',
                detail: 'Develop governed Snowflake and AWS data pipelines, quality controls, and shared repositories that support trusted analysis.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Delivering governed data platforms, predictive analytics, and executive BI across e-commerce and enterprise environments.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">SELECTED ACHIEVEMENTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
            <ul className="space-y-3">
              {achievements.map((item, i) => (
                <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                  <span className="text-brown mr-3">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {projects.length > 0 && (
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Academic and industry projects in airport operations, general aviation, and aerospace supply chain strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Interested in detailed methodology or technical documentation?
              <button
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for comprehensive project details.
              </button>
            </p>
          </div>
        </div>
      </section>

      )}

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-8 tracking-wide leading-tight break-words">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Analytics, data platforms, machine learning, and stakeholder reporting expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{edu.school}</h3>
                    <p className="text-brown font-medium">{edu.degree}</p>
                  </div>
                  {(edu.location || edu.dates) && (
                    <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                      {edu.location}{edu.location && edu.dates ? ' · ' : ''}{edu.dates}
                    </div>
                  )}
                </div>
                {edu.details && (
                  <p className="text-brown leading-relaxed font-light">
                    {edu.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Papers Published Section */}
      {papers.length > 0 && (
      <section id="papers" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">PAPERS PUBLISHED</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Research and publications in AI, machine learning, and technology.
            </p>
          </div>
          <div className="space-y-8">
            {papers.map((paper, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-xl font-display text-black tracking-wide mb-2">{paper.title}</h3>
                <p className="text-brown font-medium mb-2">{paper.publication} · {paper.year}</p>
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brown font-light hover:text-black transition-colors hover:underline inline-flex items-center"
                >
                  View Paper <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Certifications Section */}
      {certifications.length > 0 && (
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-6 tracking-wide leading-tight break-words">CERTIFICATIONS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10">
                <h3 className="text-2xl font-display text-black tracking-wide">{cert.title}</h3>
                <p className="text-brown font-medium">{cert.platform}</p>
                {cert.description && <p className="text-brown leading-relaxed font-light">{cert.description}</p>}
                {cert.link && (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-brown leading-relaxed font-light hover:text-black transition-colors hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-2 inline-block" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 tracking-wide leading-tight break-words">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s discuss data analytics, business intelligence, and analytics engineering opportunities.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a
                href="tel:+447463977818"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +44 7463 977818
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a
                href="https://www.linkedin.com/in/rahul-devadiga/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a
                href="mailto:rahuldevadiga83@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                rahuldevadiga83@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2026 Rahul Devadiga · Data Analytics & Business Intelligence.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
