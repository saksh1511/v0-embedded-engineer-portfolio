export function CVContent() {
  return (
    <div className="w-full bg-white text-gray-900 p-4 font-serif text-xs overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-2 border-b border-blue-900 pb-2">
        <div>
          <h1 className="text-xl font-bold text-blue-900">Sakshi Sharma</h1>
          <div className="mt-1 text-xs text-gray-700 leading-tight">
            <p>LinkedIn: sakshi-sharma-a88231234</p>
            <p>GitHub: github.com/saksh1511</p>
          </div>
        </div>
        <div className="text-right text-xs text-gray-700 leading-tight">
          <p className="font-semibold">Phagwara, Punjab.</p>
          <p>Email: sh.sakshi1511@gmail.com</p>
          <p>Mobile: +91-6307973797</p>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-2">
        <h2 className="text-sm font-bold text-blue-900 mb-1">SKILLS</h2>
        <ul className="text-xs space-y-0.5 text-gray-800 leading-tight">
          <li><span className="font-semibold">Languages:</span> C++, C, Java, MicroPython, Embedded C</li>
          <li><span className="font-semibold">Boards:</span> STM32, ESP32, Arduino</li>
          <li><span className="font-semibold">Tools:</span> Proteus, STM32CubeIDE, MATLAB, Cisco Packet Tracer, VS Code</li>
          <li><span className="font-semibold">Protocols:</span> UART, I2C, TCP/IP, FreeRTOS, PWM, ADC</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-2">
        <h2 className="text-sm font-bold text-blue-900 mb-1">EXPERIENCE</h2>
        <div className="flex justify-between items-start mb-0.5">
          <div>
            <p className="font-bold text-xs">Lovely Professional University | Computer Networking Intern</p>
          </div>
          <span className="text-xs font-semibold">Jul 25</span>
        </div>
        <ul className="text-xs space-y-0.5 text-gray-800 ml-2 leading-tight">
          <li>• Configured routing, switching, VLANs using Cisco Packet Tracer</li>
          <li>• Performed network troubleshooting and packet analysis</li>
          <li><span className="font-semibold">Stack:</span> Cisco Packet Tracer, TCP/IP, Routing, VLANs</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-2">
        <h2 className="text-sm font-bold text-blue-900 mb-1">PROJECTS</h2>
        
        <div className="mb-1">
          <div className="flex justify-between items-start">
            <p className="font-bold text-xs">Multitask Dashboard using Free RTOS and STM32</p>
            <span className="text-xs font-semibold">Jun 26</span>
          </div>
          <ul className="text-xs space-y-0.5 text-gray-800 ml-2 leading-tight">
            <li>• Architected Free RTOS-based multitasking system on STM32 with DHT22 sensor</li>
            <li><span className="font-semibold">Stack:</span> STM32, Free RTOS, STM32CubeIDE, UART</li>
          </ul>
        </div>

        <div className="mb-1">
          <div className="flex justify-between items-start">
            <p className="font-bold text-xs">Smart Helmet with Accident Detection System</p>
            <span className="text-xs font-semibold">Feb 26</span>
          </div>
          <ul className="text-xs space-y-0.5 text-gray-800 ml-2 leading-tight">
            <li>• ESP32-based smart helmet with real-time accident detection and GPS alerts</li>
            <li><span className="font-semibold">Stack:</span> ESP32, MPU6050, GSM Module, GPS Module</li>
          </ul>
        </div>

        <div className="mb-1">
          <div className="flex justify-between items-start">
            <p className="font-bold text-xs">Tourist Tracking and Rescuing System</p>
            <span className="text-xs font-semibold">Sep 25</span>
          </div>
          <ul className="text-xs space-y-0.5 text-gray-800 ml-2 leading-tight">
            <li>• IoT-based real-time tourist tracking with RFID checkpoints and automated alerts</li>
            <li><span className="font-semibold">Stack:</span> ESP32, RFID, Wireless Communication</li>
          </ul>
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-2">
        <h2 className="text-sm font-bold text-blue-900 mb-1">CERTIFICATES</h2>
        <ul className="text-xs space-y-0.5 text-gray-800 leading-tight">
          <li>• Programming in Java | NPTEL • Database Management System | NPTEL</li>
          <li>• Computer Networking | LPU • Embedded Systems IoT | IIT Mandi</li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-2">
        <h2 className="text-sm font-bold text-blue-900 mb-1">ACHIEVEMENTS</h2>
        <ul className="text-xs space-y-0.5 text-gray-800 leading-tight">
          <li>• National Rank 21 in Java Quiz (2,000+ participants) • SIH 2025 Top 15 Finalist</li>
          <li>• Xpecto 2025 (LFR, Robo Soccer, Robo Sumo) • Utkansh 2025 (Robo Soccer, Robo Sumo)</li>
          <li>• Letter of appreciation from Defense Minister (ISC examinations)</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-bold text-blue-900 mb-1">EDUCATION</h2>
        <ul className="text-xs space-y-0.5 text-gray-800 leading-tight">
          <li><span className="font-bold">Lovely Professional University</span> – B.Tech ECE, CGPA: 7.87 (Aug 2023-Present)</li>
          <li><span className="font-bold">City Montessori School</span> – Intermediate: 88.8% • Matriculation: 92.4%</li>
        </ul>
      </section>
    </div>
  )
}
