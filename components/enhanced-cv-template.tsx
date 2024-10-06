'use client';
import { Mail, Phone, MapPin, Linkedin, Github, Printer } from 'lucide-react'
import { Button } from './button'
import Image from 'next/image'
import profileImageSrc from '../public/assets/images/Profile Picture.jpg'
import './style.css'
import { useLanguage } from './LanguageContext';

const translations = {
  en: {
    fullName: "Joel Moran",
    title: "Full Stack Web Developer",
    education: "Education",
    skills: "Skills",
    certificates: "Certificates",
    communityWork: "Community Volunteer Work",
    environmentalWork: "Environmental Protection and Sustainable Development NGO Involvements",
    professionalSummary: "Professional Summary",
    workExperience: "Work Experience",
    printCV: "Print CV",
    email: "joelmoran.ph@gmail.com",
    phone: "+49 178 3849 515",
    location: "Hinterweiler, RLP Germany",
    linkedin: "www.linkedin.com/in/joel-moran-ph",
    github: "https://github.com/joelmoran101/joelmoran101",
    educationDetails: [
      {
        title: "Completed significant coursework towards a degree in AB Philosophy",
        institution: "University of the Philippines, Los Banos",
        years: "1978 - 1982",
        details: "Beta Kappa Fraternity member"
      },
      {
        title: "Pursued further studies in Eastern Philosophy and Theology to enhance understanding of life's principles",
        institution: "Notre Dame University, Cotabato City Philippines",
        years: "1983 - 1984",
        details: "Junior Oblates of Mary Immaculate, Missionary Congregation"
      },
      {
        title: "One Year Immersion in Eastern Philosophy at different Ashrams in India",
        years: "1984 - 1985"
      }
    ],
    skillsList: ['Frontend Technologies: HTML, JavaScript, CSS, React, Tailwind, Redux, Formik', 'Backend Technologies: Node, Express', 'Databases: MongoDB, Cloudinary', 'CMS: WordPress & Joomla', 'Testing Tools: vitest, jest', 'Git: Github', 'typescript', 'Next.js', 'GIMP'],
    certificatesList: ['LEAN Yellow Belt', 'First Aid'],
    communityWorkDetails: {
      title: "Digital Botschafter",
      organization: "Digital Botschafter RLP",
      years: "active since 2020",
      description: "Help Others, especially senior citizens, use the internet and other digital technologies"
    },
    environmentalWorkDetails: [
      {
        organization: "Luntiang Alyansa para sa Bundok Banahaw(LABB), Quezon Province PH",
        years: "1991 - 2001",
        description: "Co-Initiator of the NGO, helped as community Organizer and Trainer"
      },
      {
        organization: "Manitou Foundation, Crestone CO, USA",
        years: "1986 - 1990",
        description: "Guest co-coordinator for a summer camp for difficult teenagers"
      }
    ],
    professionalSummaryText: "A results-oriented and adaptable professional with fresh training in full-stack web development and plenty of experience in SAP integration. Highly skilled in warehouse operations and digital transformation projects. Thrives on learning new technologies and resolving complex challenges in dynamic environments.",
    workExperienceTitle: "Work Experience",
    workExperienceData: [
      {
        title: "Warehouse Distribution Stream Expert (Alliance Team)",
        company: "Givaudan Deutschland GmbH",
        period: "April 2021 – June 2023",
        responsibilities: [
          "Led the training of warehouse and distribution personnel on SAP integration for newly acquired companies.",
          "Ensured smooth integration by collaborating with various departments and providing technical support.",
          "Assisted the team with SAP integration across one site in France and multiple locations in the UK, Germany, Vietnam, and the Netherlands."
        ]
      },
      {
        title: "Materials Management & Planning/Implementation, Key-User (SCM) for the Flex /Comarch ERM",
        company: "Josef Meeth GmbH & Co. KG",
        period: "Feb 2018 – March 2021",
        responsibilities: [
          "Restructured the warehouse layout and processes to optimize efficiency.",
          "Oversaw inbound deliveries and maintained quality control of raw materials.",
          "Part of the team responsible for the planning and implementation of the Flex/Comarch ERM"
        ]
      },
      {
        title: "SAP Power-User / 1st Level Support (DIS) and Warehouse Supervisor",
        company: "Givaudan Deutschland GmbH",
        period: "June 2005 – Jan 2018",
        responsibilities: [
          "Provided 1st line support for SAP users in the Distribution and Logistics department.",
          "Supervised warehouse operations, ensuring efficient inventory management and adherence to safety protocols.",
          "Actively participated in various SAP-related projects and global implementations.",
          "Contributed to process improvement by authoring job aids and participating in Kaizen (LEAN) initiatives.",
          "Led the implementation of a new VNA warehouse (Very Narrow Alley)system for increased efficiency."
        ]
      },
      {
        title: "Small Business Owner/Manager",
        company: "Heidi's Raibadachi (Bacolod City, Philippines)",
        period: "May 2002 – March 2004",
        responsibilities: [
          "Created a business plan for the company.",
          "Supervised purchasing as well as personnel operations, ensuring efficient inventory management and adherence to safety protocols.",
          "Actively participated in various daily activities including customer service.",
          "Organized and participated in team-building activities."
        ]
      },
      {
        title: "Warehouse Employee - Forklift Operator",
        company: "Givaudan Deutschland GmbH",
        period: "May 2001 – April 2002",
        responsibilities: [
          "Worked as a forklift operator.",
          "Handled inbound and outbound deliveries, and inventory management.",
          "Assisted in supervising warehouse operations, ensuring efficient inventory management and adherence to safety protocols."
        ]
      }
    ]
  },
  de: {
    fullName: "Joel Moran",
    title: "Fullstack-Webentwickler",
    education: "Ausbildung",
    skills: "Fähigkeiten",
    certificates: "Zertifikate",
    communityWork: "Ehrenamtliche Arbeit",
    environmentalWork: "Umweltschutz und nachhaltige Entwicklung NGO-Beteiligungen",
    professionalSummary: "Berufliches Profil",
    workExperience: "Berufserfahrung",
    printCV: "Lebenslauf drucken",
    email: "joelmoran.ph@gmail.com",
    phone: "+49 178 3849 515",
    location: "Hinterweiler, RLP Deutschland",
    linkedin: "www.linkedin.com/in/joel-moran-ph",
    github: "https://github.com/joelmoran101/joelmoran101",
    educationDetails: [
      {
        title: "Bedeutende Kurse im Rahmen eines Studiums der AB Philosophie abgeschlossen",
        institution: "Universität der Philippinen, Los Banos",
        years: "1978 - 1982",
        details: "Mitglied der Beta Kappa Bruderschaft"
      },
      {
        title: "Weiterführende Studien in östlicher Philosophie und Theologie zur Vertiefung des Verständnisses von Lebensprinzipien",
        institution: "Notre Dame Universität, Cotabato City Philippinen",
        years: "1983 - 1984",
        details: "Junior Oblaten der Unbefleckten Empfängnis, Missionskongregation"
      },
      {
        title: "Einjährige Immersion in östlicher Philosophie in verschiedenen Ashrams in Indien",
        years: "1984 - 1985"
      }
    ],
    skillsList: ['Frontend-Technologien: HTML, JavaScript, CSS, React, Tailwind, Redux, Formik', 'Backend-Technologien: Node, Express', 'Datenbanken: MongoDB, Cloudinary', 'CMS: WordPress & Joomla', 'Test-Tools: vitest, jest', 'Git: Github', 'TypeScript', 'Next.js', 'GIMP'],
    certificatesList: ['LEAN Gelber Gürtel', 'Erste Hilfe'],
    communityWorkDetails: {
      title: "Digitalbotschafter",
      organization: "Digitalbotschafter RLP",
      years: "aktiv seit 2020",
      description: "Unterstützung anderer, insbesondere Senioren, bei der Nutzung des Internets und anderer digitaler Technologien"
    },
    environmentalWorkDetails: [
      {
        organization: "Luntiang Alyansa para sa Bundok Banahaw(LABB), Quezon Provinz PH",
        years: "1991 - 2001",
        description: "Mitbegründer der NGO, tätig als Community Organizer und Trainer"
      },
      {
        organization: "Manitou Stiftung, Crestone CO, USA",
        years: "1986 - 1990",
        description: "Gast-Koordinator für ein Sommercamp für schwierige Jugendliche"
      }
    ],
    professionalSummaryText: "Ein ergebnisorientierter und anpassungsfähiger Profi mit frischer Ausbildung in Full-Stack-Webentwicklung und umfangreicher Erfahrung in SAP-Integration. Hochqualifiziert in Lageroperationen und digitalen Transformationsprojekten. Begeistert sich für das Erlernen neuer Technologien und die Lösung komplexer Herausforderungen in dynamischen Umgebungen.",
    workExperienceTitle: "Berufserfahrung",
    workExperienceData: [
      {
        title: "Experte für Lagerverteilung (Alliance Team)",
        company: "Givaudan Deutschland GmbH",
        period: "April 2021 – Juni 2023",
        responsibilities: [
          "Leitete die Schulung von Lager- und Vertriebspersonal zur SAP-Integration für neu erworbene Unternehmen.",
          "Gewährleistete eine reibungslose Integration durch Zusammenarbeit mit verschiedenen Abteilungen und technische Unterstützung.",
          "Unterstützte das Team bei der SAP-Integration an einem Standort in Frankreich und mehreren Standorten in Großbritannien, Deutschland, Vietnam und den Niederlanden."
        ]
      },
      {
        title: "Materialmanagement & Planung/Implementierung, Key-User (SCM) für das Flex /Comarch ERM",
        company: "Josef Meeth GmbH & Co. KG",
        period: "Feb 2018 – März 2021",
        responsibilities: [
          "Restrukturierte das Lagerlayout und die Prozesse zur Optimierung der Effizienz.",
          "Überwachte eingehende Lieferungen und führte Qualitätskontrollen von Rohmaterialien durch.",
          "Teil des Teams, das für die Planung und Implementierung des Flex/Comarch ERM verantwortlich war"
        ]
      },
      {
        title: "SAP Power-User / 1st Level Support (DIS) und Lagerleiter",
        company: "Givaudan Deutschland GmbH",
        period: "Juni 2005 – Jan 2018",
        responsibilities: [
          "Bot First-Line-Support für SAP-Benutzer in der Vertriebs- und Logistikabteilung.",
          "Überwachte Lageroperationen, sicherte effizientes Bestandsmanagement und Einhaltung von Sicherheitsprotokollen.",
          "Aktive Teilnahme an verschiedenen SAP-bezogenen Projekten und globalen Implementierungen.",
          "Trug zur Prozessverbesserung bei durch Erstellung von Arbeitsanweisungen und Teilnahme an Kaizen (LEAN) Initiativen.",
          "Leitete die Implementierung eines neuen VNA-Lagersystems (Very Narrow Aisle) für erhöhte Effizienz."
        ]
      },
      {
        title: "Kleinunternehmer/Manager",
        company: "Heidi's Raibadachi (Bacolod City, Philippinen)",
        period: "Mai 2002 – März 2004",
        responsibilities: [
          "Erstellte einen Geschäftsplan für das Unternehmen.",
          "Überwachte Einkauf sowie Personaloperationen, sicherte effizientes Bestandsmanagement und Einhaltung von Sicherheitsprotokollen.",
          "Aktive Teilnahme an verschiedenen täglichen Aktivitäten einschließlich Kundenservice.",
          "Organisierte und nahm an Teambuilding-Aktivitäten teil."
        ]
      },
      {
        title: "Lagerarbeiter - Gabelstaplerfahrer",
        company: "Givaudan Deutschland GmbH",
        period: "Mai 2001 – April 2002",
        responsibilities: [
          "Arbeitete als Gabelstaplerfahrer.",
          "Handhabte ein- und ausgehende Lieferungen und Bestandsmanagement.",
          "Unterstützte bei der Überwachung von Lageroperationen, sicherte effizientes Bestandsmanagement und Einhaltung von Sicherheitsprotokollen."
        ]
      }
    ]
  }
};

export default function EnhancedCVTemplate() {
  const { language } = useLanguage();
  const t = translations[language];

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-5xl mx-auto p-container p-8 bg-gray-50 shadow-lg print:shadow-none">
      <header className="bg-gradient-to-r from-blue-800 to-blue-300 text-white p-6 rounded-t-lg print:break-inside-avoid">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold p-name">{t.fullName}</h1>
            <p className="text-xl mt-2">{t.title}</p>
          </div>
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={profileImageSrc}
                alt="Profile"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            <a href={`mailto:${t.email}`}>{t.email}</a>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <a href={`tel:${t.phone}`}>{t.phone}</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            {t.location}
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2" />
            <a href={`http://${t.linkedin}`}>{t.linkedin}</a>
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2" />
            <a href={t.github}>{t.github}</a>
          </div>
        </div>
      </header>

      <div className={`overflow-y-auto transition-all duration-500`}>
        <div className="flex gap-6 p-6 bg-white rounded-b-lg">
          <aside className="w-1/3 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.education}</h2>
              {t.educationDetails.map((edu, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-gray-800">{edu.title}</h3>
                  {edu.institution && <p className="text-gray-600">{edu.institution} | {edu.years}</p>}
                  {!edu.institution && <p className="text-gray-600">{edu.years}</p>}
                  {edu.details && <p className="text-gray-600">{edu.details}</p>}
                </div>
              ))}
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.skills}</h2>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.certificates}</h2>
              <ul className="list-disc list-inside text-gray-600">
                {t.certificatesList.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.communityWork}</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-800">{t.communityWorkDetails.title}</h3>
                <p className="text-gray-600">{t.communityWorkDetails.organization} | {t.communityWorkDetails.years}</p>
                <p className="text-gray-600">{t.communityWorkDetails.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">{t.environmentalWork}</h2>
              {t.environmentalWorkDetails.map((work, index) => (
                <div key={index}>
                  <h3 className="text-lg font-medium text-gray-800">{work.organization} | {work.years}</h3>
                  <p className="text-gray-600">{work.description}</p>
                </div>
              ))}
            </section>
          </aside>

          <main className="w-2/3 space-y-6">
          <section>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">{t.workExperienceTitle}</h2>
          {t.workExperienceData.map((job, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-medium text-gray-800">{job.title}</h3>
              <p className="text-gray-600">{job.company} | {job.period}</p>
              <ul className="list-disc list-inside text-gray-600 mt-2">
                {job.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
              ))}
            </section>
          </main>
        </div>
      </div>
      <div className="fixed bottom-0 left-8 p-4 print:hidden">
        <Button
          onClick={handlePrint}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          <Printer className="w-4 h-4 inline-block mr-2" />
          {t.printCV}
        </Button>   
      </div>
    </div>
  )
}