import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <img src="/photo1.jpeg" className="h-100 w-full mt-5 mb-10" />
      <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
        <div className="flex-shrink-0 mr-4">
          <img src="/photo1.jpeg" alt="title" className="w-50 h-50 " />
        </div>
        <div>
          <p className="text-sm text-gray-600">
            Shah and Anchor Kutchhi Engineering College was established in 1985
            for the purpose of imparting quality technical education. The
            college is managed by Mahavir Education Trust. The college is
            approved by AICTE, New Delhi and Government of Maharashtra, and is
            affiliated to University of Mumbai. It also has an ISO 9001:2015
            Certification. It offers under graduate courses in Computer
            Engineering, Information Technology, Electronics and Computer
            Science,Electronics & Telecommunication, Artificial Intelligence &
            Data Science, Cyber Security. It also offers Post Graduate Courses
            in Computer Engineering, Information Technology & Electronics
            Engineering. UG Programs in Computer Engineering and Information
            Technology of the college have been awarded accreditation by
            National Board of Accreditation (NBA) from A.Y. 2022-23 for 3 Years.
            Institute is awarded ‘A’ (3.16 CGPA) Grade by National Assessment
            and Accreditation Council (NAAC) w.e.f. 20-10-2021
          </p>
          <Link href="https://www.sakec.ac.in/wp-content/uploads/2023/04/ARIIA-_AtalRankingOfInstitutionsOnInnovation-Achievements.pdf">
            Click here to view the ARIIA report
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 border border-gray-300 rounded-lg">
        
        <p className="text-sm text-gray-600">
          Education is a lifelong learning process which meets a variety of
          needs across industries, businesses and communities. It includes
          skills training or upgrading of skills and acquiring knowledge through
          competency based education. We live in a world where everything is
          changing. However, there are two things which are a constant, change
          and the process of learning. In this everchanging and evergrowing
          industrial world, education is required for everyone to stay current
          with the latest trends, developments, skills, and new technologies
          required in various fields. We offer students myriad experiences and
          also encourage them to participate in various activities to help them
          build a thought process, independent of apprehensions and one that
          develops a sensitivity within themselves.
        </p>
        <div className="flex-shrink-0 ml-4">
          <img src="/photo2.jpg" alt="title" className="w-50 h-50 "/>
        </div>
      </div>
    </>
  );
}
