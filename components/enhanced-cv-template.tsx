'use client';
import { Mail, Phone, MapPin, Linkedin, Github, Printer } from 'lucide-react'
import { useState } from 'react'
import { Button } from './button'
import { Input } from './input'
import { Label } from './label'

export default function EnhancedCVTemplate() {
  const [profileImage, setProfileImage] = useState<string | null>(null)

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="max-w-5xl mx-auto p-8 bg-gray-50 shadow-lg print:shadow-none">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-t-lg print:break-inside-avoid">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">Joel Moran</h1>
            <p className="text-xl mt-2">Full Stack web Developer</p>
          </div>
          <div className="relative w-32 h-32">
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-gray-600">No Image</span>
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="absolute inset-0 opacity-0 cursor-pointer"
              title="Upload profile picture"
            />
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4">
          <div className="flex items-center">
            <Mail className="w-4 h-4 mr-2" />
            joelmoran.ph@gmail.com
          </div>
          <div className="flex items-center">
            <Phone className="w-4 h-4 mr-2" />
            +49 178 3849 515
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2" />
            Hinterweiler, RLP Germany
          </div>
          <div className="flex items-center">
            <Linkedin className="w-4 h-4 mr-2" />
            www.linkedin.com/in/joel-moran-ph
          </div>
          <div className="flex items-center">
            <Github className="w-4 h-4 mr-2" />
            https://github.com/joelmoran101/joelmoran101
          </div>
        </div>
      </header>

      <div className="flex gap-6 p-6 bg-white rounded-b-lg">
        <aside className="w-1/3 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Education</h2>
            <div>
              <h3 className="text-lg font-medium text-gray-800">AB Philosophy (undergraduate)</h3>
              <p className="text-gray-600">University of the Philippines, Los Banos | 1978 - 1982</p>
              <p className="text-gray-600">Beta Kappa Fraternity member</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'MongoDB', 'express', 'node', 'Formik'].map((skill) => (
                <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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
        </aside>

        <main className="w-2/3 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">Professional Summary</h2>
            <p className="text-gray-600">
            A results-oriented and adaptable professional with a combined background in materials management, SAP expertise, and full-stack web development training. Possesses strong analytical and problem-solving skills, honed through experience in streamlining warehouse operations and implementing new systems. Passionate about continuous learning and thrives in finding solutions for complex issues.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Work Experience</h2>
            {[1, 2].map((job) => (
              <div key={job} className="mb-4">
                <h3 className="text-xl font-medium text-gray-800">Warehouse Distribution Stream Expert (Alliance Team)</h3>
                <p className="text-gray-600">Givaudan Deutschland GmbH | April 2021 – June 2023</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Led the training of warehouse and distribution personnel on SAP integration for newly acquired companies.</li>
                  <li>Ensured smooth integration by collaborating with various departments and providing technical support.</li>
                  <li>Suported one site in France a team with 15 people. Two sites in the UK. One in Germany, another in Vietnam and in the Netherlands </li>
                </ul>
                <h3 className="text-xl font-medium text-gray-800">Materials Management & Planning/Implementation, Key-User (SCM) for the Flex /Comarch ERM</h3>
                <p className="text-gray-600">Josef Meeth GmbH & Co. KG | Feb 2018 – March 2021</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Restructured the warehouse layout and processes to optimize efficiency.</li>
                  <li>Oversaw inbound deliveries and maintained quality control of raw materials.</li>
                  <li>Part of the team responsible for the planning and implementation of the Flex/Comarch ERM</li>
                </ul>
                <h3 className="text-xl font-medium text-gray-800">SAP Power-User / 1st Level Support (DIS) and Warehouse Supervisor</h3>
                <p className="text-gray-600">Givaudan Deutschland GmbH | June 2005 – Jan 2018</p>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                  <li>Provided 1st line support for SAP users in the Distribution and Logistics department.</li>
                  <li>Supervised warehouse operations, ensuring efficient inventory management and adherence to safety protocols.</li>
                  <li>Actively participated in various SAP-related projects and global implementations.</li>
                  <li>Contributed to process improvement by authoring job aids and participating in Kaizen (LEAN) initiatives.</li>
                  <li>Led the implementation of a new VNA warehouse system for increased efficiency.</li>
                </ul>
              </div>
            ))}
          </section>
        </main>
      </div>

      <Button
        onClick={handlePrint}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors print:hidden"
      >
        <Printer className="w-4 h-4 inline-block mr-2" />
        Print CV
      </Button>
    </div>
  )
}