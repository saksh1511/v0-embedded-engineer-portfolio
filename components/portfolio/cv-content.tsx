export function CVContent() {
  return (
    <div className="w-full bg-white text-gray-900 p-8 font-serif">
      {/* Header */}
      <div className="flex justify-between items-start mb-6 border-b-2 border-blue-900 pb-4">
        <div>
          <h1 className="text-4xl font-bold text-blue-900">Sakshi Sharma</h1>
          <div className="mt-2 text-sm text-gray-700">
            <p>LinkedIn: sakshi-sharma-a88231234</p>
            <p>GitHub: github.com/saksh1511</p>
          </div>
        </div>
        <div className="text-right text-sm text-gray-700">
          <p className="font-semibold">Phagwara, Punjab.</p>
          <p>Email: sh.sakshi1511@gmail.com</p>
          <p>Mobile: +91-6307973797</p>
        </div>
      </div>

      {/* Skills */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-blue-900 mb-2">SKILLS</h2>
        <ul className="text-sm space-y-1 text-gray-800">
          <li><span className="font-semibold">Languages:</span> C++, C, Java, Micro Python, Embedded C</li>
          <li><span className="font-semibold">Boards:</span> STM32, ESP32, Arduino</li>
          <li><span className="font-semibold">Tools/Platforms:</span> Proteus, STM32CubeIDE, MATLAB, Arduino IDE, Cisco Packet Tracer, VS Code</li>
          <li><span className="font-semibold">Soft Skills:</span> Problem-Solving, Leadership, Project Management, Adaptability, Critical Thinking</li>
          <li><span className="font-semibold">Protocols:</span> UART, I2C, TCP/IP, FreeRTOS, Interrupts, Timers, PWM, ADC</li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-blue-900 mb-2">EXPERIENCE</h2>
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="font-bold">Lovely Professional University | Certificate</p>
            <p className="text-sm italic">Computer Networking Intern</p>
          </div>
          <span className="text-sm font-semibold">Jul 25</span>
        </div>
        <ul className="text-sm space-y-1 text-gray-800 ml-2">
          <li>• Configured and tested routing, switching, VLANs, and TCP/IP-based networking solutions using Cisco Packet Tracer.</li>
          <li>• Performed network troubleshooting, packet analysis, and connectivity testing to improve network performance.</li>
          <li>• Worked on network automation concepts and monitored communication using standard networking protocols.</li>
          <li><span className="font-semibold">Tech stacks:</span> Cisco Packet Tracer, TCP/IP, Routing, Switching Protocols, VLANs</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-blue-900 mb-2">PROJECTS</h2>
        
        <div className="mb-4">
          <div className="flex justify-between items-start">
            <p className="font-bold">Multitask Dashboard using Free RTOS and STM32</p>
            <span className="text-sm font-semibold">Jun 26</span>
          </div>
          <ul className="text-sm space-y-1 text-gray-800 ml-2">
            <li>• Architected a Free RTOS-based multitasking system on STM32 NUCLEO-F446RE with LED, UART, Counter, and DHT22 sensor.</li>
            <li>• Engineered real-time temperature and humidity monitoring using DHT22 and transmitted live sensor data via UART.</li>
            <li>• Optimized task scheduling for real-time performance, ensuring reliable concurrent execution during testing.</li>
            <li><span className="font-semibold">Tech Stack:</span> STM32 NUCLEO-F446RE, Free RTOS, STM32CubeIDE, UART, PuTTY</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start">
            <p className="font-bold">Smart Helmet with Accident Detection System</p>
            <span className="text-sm font-semibold">Feb 26</span>
          </div>
          <ul className="text-sm space-y-1 text-gray-800 ml-2">
            <li>• Integrated an ESP32-based smart helmet integrating buzzer for real-time accident detection.</li>
            <li>• Implemented sensor fusion to reduce false alerts by ~40% and improve detection accuracy.</li>
            <li>• Improved rider safety by enabling automatic SMS alerts with live GPS coordinates within 5 seconds of impact.</li>
            <li><span className="font-semibold">Tech Stack:</span> ESP32, MPU6050, GSM Module (SIM800L), GPS Module (NEO-6M), Buzzer</li>
          </ul>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start">
            <p className="font-bold">Tourist Tracking and Rescuing System</p>
            <span className="text-sm font-semibold">Sep 25</span>
          </div>
          <ul className="text-sm space-y-1 text-gray-800 ml-2">
            <li>• Developed an IoT-based real-time tourist tracking in crowded and remote locations via wearable devices.</li>
            <li>• Configured RFID checkpoints and wireless communication to improve location identification accuracy by 95% in prototype testing.</li>
            <li>• Deployed a centralized dashboard with automated alerts, reducing emergency response time by ~50%.</li>
            <li><span className="font-semibold">Tech Stack:</span> IoT Devices, ESP32, RFID, Wireless Communication, Real time monitoring</li>
          </ul>
        </div>
      </section>

      {/* Certificates */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-blue-900 mb-2">CERTIFICATES</h2>
        <ul className="text-sm space-y-1 text-gray-800">
          <li>• <span className="font-semibold">Programming in Java</span> | NPTEL <span className="float-right">Apr 26</span></li>
          <li>• <span className="font-semibold">Database Management System</span> | NPTEL <span className="float-right">Aug 25</span></li>
          <li>• <span className="font-semibold">Computer Networking</span> | Centre of Professional Enhancement <span className="float-right">Jul 25</span></li>
          <li>• <span className="font-semibold">Embedded Systems and Robotics IoT</span> | IIT Mandi <span className="float-right">Mar 25</span></li>
        </ul>
      </section>

      {/* Achievements */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-blue-900 mb-2">ACHIEVEMENTS</h2>
        <ul className="text-sm space-y-1 text-gray-800">
          <li>• <span className="font-semibold">Secured National Rank 21st:</span> Among 2,000+ participants in Java Quiz Competition <span className="float-right">Aug 25</span></li>
          <li>• <span className="font-semibold">Participated in Smart India Hackathon 2025:</span> Top 15 finalist team to qualify internal hackathon of SIH 2025 <span className="float-right">Aug 25</span></li>
          <li>• <span className="font-semibold">Xpecto 2025 – IIT Mandi:</span> Participated in LFR, Robo Soccer, and Robo Sumo competitions <span className="float-right">Aug 25</span></li>
          <li>• <span className="font-semibold">Utkansh 2025 – NIT Jalandhar:</span> Participated in Robo Soccer and Robo Sumo competitions <span className="float-right">Aug 25</span></li>
          <li>• <span className="font-semibold">Received letter of appreciation from Mr. Rajnath Singh (Defense Minister of India):</span> For exceptional performance in ISC examinations <span className="float-right">Aug 23</span></li>
        </ul>
      </section>

      {/* Education */}
      <section className="mb-5">
        <h2 className="text-lg font-bold text-blue-900 mb-2">EDUCATION</h2>
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="font-bold">Lovely Professional University</p>
            <p className="text-sm">Bachelor of Technology – Electronics and Communication Engineering; CGPA: 7.87</p>
          </div>
          <span className="text-sm font-semibold">Aug 2023-Present</span>
        </div>
        <div className="flex justify-between items-start mb-2">
          <div>
            <p className="font-bold">City Montessori School</p>
            <p className="text-sm">Intermediate; Percentage: 88.8</p>
          </div>
          <span className="text-sm font-semibold">2021-2022</span>
        </div>
        <div className="flex justify-between items-start">
          <div>
            <p className="font-bold">City Montessori School</p>
            <p className="text-sm">Matriculation; Percentage: 92.4</p>
          </div>
          <span className="text-sm font-semibold">2019-2020</span>
        </div>
      </section>
    </div>
  )
}
