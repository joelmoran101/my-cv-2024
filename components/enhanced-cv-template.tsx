'use client';
import { Mail, Phone, MapPin, Linkedin, Github, Printer } from 'lucide-react'
import { Button } from './button'
import Image from 'next/image'
import profileImageSrc from '../public/assets/images/Profile Picture.jpg'
import './style.css'

export default function EnhancedCVTemplate() {

  const handlePrint = () => {
    window.print()
  }


  return (
    <div className="max-w-5xl mx-auto p-container p-8 bg-gray-50 shadow-lg print:shadow-none">
      <header className="bg-gradient-to-r from-blue-800 to-blue-300 text-white p-6 rounded-t-lg print:break-inside-avoid">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold p-name">Joel Moran</h1>
            <p className="text-xl mt-2">Full Stack Web Developer</p>
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
            <a href="mailto:joelmoran.ph@gmail.com">joelmoran.ph@gmail.com</a>
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            <a href="tel:+491783849515">+49 178 3849 515</a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Hinterweiler, RLP Germany
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2" />
            <a href="http://www.linkedin.com/in/joel-moran-ph">www.linkedin.com/in/joel-moran-ph</a>
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2" />
            <a href="https://github.com/joelmoran101/joelmoran101">https://github.com/joelmoran101/joelmoran101</a>
          </div>
        </div>
      </header>

      <div className={`overflow-y-auto transition-all duration-500`}>
        <div className="flex gap-6 p-6 bg-white rounded-b-lg">
          <aside className="w-1/3 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Education</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-800">• Completed significant coursework towards a degree in AB Philosophy</h3>
                <p className="text-gray-600">   • University of the Philippines, Los Banos | 1978 - 1982</p>
                <p className="text-gray-600">Beta Kappa Fraternity member</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">• Pursued further studies in Eastern Philosophy and Theology to enhance understanding of life’s principles</h3>
                <p className="text-gray-600">   • Notre Dame University, Cotabato City Philippines | 1983 - 1984</p>
                <p className="text-gray-600">Junior Oblates of Mary Immaculate, Missionary Congregation</p>
                <p className="text-gray-600">   • One Year Immersion in Eastern Philosophy at different Ashrams in India | 1984 - 1985</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {['Frontend Technologies: HTML, JavaScript, CSS, React, Tailwind, Redux, Formik', 'Backend Technologies: Node, Express', 'Databases: MongoDB, Cloudinary', 'CMS: WordPress & Joomla', 'Testing Tools: vitest, jest', 'Git: Github', 'typescript', 'Next.js', 'GIMP',].map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Certificates</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>LEAN Yellow Belt</li>
                <li>First Aid</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Community Volunteer Work</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Digital Botschafter</h3>
                <p className="text-gray-600">Digital Botschafter RLP | active since 2020</p>
                <p className="text-gray-600">Help Others, especially senior citizens, use the internet and other digital technologies</p>
              </div>
            </section>
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Environmental Protection and Sustainable Development NGO Involvements</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Luntiang Alyansa para sa Bundok Banahaw(LABB), Quezon Province PH | 1991 - 2001</h3>
                <p className="text-gray-600">Co-Initiator of the NGO, helped as community Organizer and Trainer </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800">Manitou Foundation, Crestone CO, USA | 1986 - 1990</h3>
                <p className="text-gray-600">Guest co-coordinator for a summer camp for difficult teenagers</p>
              </div>
            </section>
          </aside>

          <main className="w-2/3 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-2">Professional Summary</h2>
              <p className="text-gray-600">
              A results-oriented and adaptable professional with fresh training in full-stack web development and plenty of experience in SAP integration. Highly skilled in warehouse operations and digital transformation projects. Thrives on learning new technologies and resolving complex challenges in dynamic environments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">Work Experience</h2>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-800">Warehouse Distribution Stream Expert (Alliance Team)</h3>
                <p className="text-gray-600">Givaudan Deutschland GmbH | April 2021 – June 2023</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Led the training of warehouse and distribution personnel on SAP integration for newly acquired companies.</li>
                  <li>Ensured smooth integration by collaborating with various departments and providing technical support.</li>
                  <li>Assisted the team with SAP integration across one site in France and multiple locations in the UK, Germany, Vietnam, and the Netherlands.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-800">Materials Management & Planning/Implementation, Key-User (SCM) for the Flex /Comarch ERM</h3>
                <p className="text-gray-600">Josef Meeth GmbH & Co. KG | Feb 2018 – March 2021</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Restructured the warehouse layout and processes to optimize efficiency.</li>
                  <li>Oversaw inbound deliveries and maintained quality control of raw materials.</li>
                  <li>Part of the team responsible for the planning and implementation of the Flex/Comarch ERM</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-800">SAP Power-User / 1st Level Support (DIS) and Warehouse Supervisor</h3>
                <p className="text-gray-600">Givaudan Deutschland GmbH | June 2005 – Jan 2018</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Provided 1st line support for SAP users in the Distribution and Logistics department.</li>
                  <li>Supervised warehouse operations, ensuring efficient inventory management and adherence to safety protocols.</li>
                  <li>Actively participated in various SAP-related projects and global implementations.</li>
                  <li>Contributed to process improvement by authoring job aids and participating in Kaizen (LEAN) initiatives.</li>
                  <li>Led the implementation of a new VNA warehouse (Very Narrow Alley)system for increased efficiency.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-800">Small Business Owner/Manager</h3>
                <p className="text-gray-600">Heidi's Raibadachi (Bacolod City, Philippines)  | May 2002 – March 2004</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Created a business plan for the company.</li>
                  <li>Supervised purchasing as well as personnel operations, ensuring efficient inventory management and adherence to safety protocols.</li>
                  <li>Actively participated in various daily activities including customer service.</li>
                  <li>Organized and participated in team-building activities.</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-medium text-gray-800">Warehouse Employee - Forklift Operator</h3>
                <p className="text-gray-600">Givaudan Deutschland GmbH | May 2001 – April 2002</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Worked as a forklift operator.</li>
                  <li>Handled inbound and outbound deliveries, and inventory management.</li>
                  <li>Assisted in supervising warehouse operations, ensuring efficient inventory management and adherence to safety protocols.</li>
                </ul>
              </div>
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
          Print CV
        </Button>   
      </div>
    </div>
  )
}