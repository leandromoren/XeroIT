import React from 'react';
import { Linkedin, Twitter, Mail, Users } from 'lucide-react';

const team = [
  {
    name: "Leandro Moren",
    role: "CEO - Founder",
    image: "../../logos/leandro.jpg",
    bio: "Former VP at Goldman Sachs with 15+ years in fintech innovation",
    social: {
      linkedin: "https://www.linkedin.com/in/leandromoren/",
      twitter: "#",
      email: "leandro.moren18@gmail.com"
    }
  },
  {
    name: "Franco Corvalan",
    role: "Co-Founder - QA lead",
    image: "../../logos/francoCorvalan.jpeg",
    bio: "Ex-Google engineer, pioneering AI-driven financial solutions",
    social: {
      linkedin: "https://www.linkedin.com/in/francocorvalan30/",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Lucas Carbajal",
    role: "Co-Founder - Tech Lead",
    image: "../../logos/lucas.jpg",
    bio: "Cybersecurity expert with background in blockchain technology",
    social: {
      linkedin: "https://www.linkedin.com/in/lucas-carbajal-ghiglione/",
      twitter: "#",
      email: "#"
    }
  },
  {
    name: "Lorena Benitez",
    role: "Front-end Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
    bio: "Product visionary with experience at leading fintech startups",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "#"
    }
  }
];

export default function Team() {
  return (
    <section className="relative bg-black py-32">
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-black to-black" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-14 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 p-0.5">
            <div className="h-full w-full rounded-full bg-black flex items-center justify-center">
              <Users className="h-7 w-7 text-yellow-400" />
            </div>
          </div>
        </div>
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-yellow-400 via-purple-500 to-yellow-400 text-transparent bg-clip-text">
            Conoce a nuestros profesionales
          </h2>
          <p className="mt-6 text-xl text-gray-400">
            Impulsados por la innovación, guiados por la experiencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {team.map((member) => (
            <div 
              key={member.name}
              className="group text-center"
            >
              <div className="relative mx-auto mb-8">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                
                {/* Border gradient */}
                <div className="relative h-48 w-48 mx-auto rounded-full bg-gradient-to-r from-yellow-400 to-purple-600 p-1">
                  {/* Image container */}
                  <div className="h-full w-full rounded-full overflow-hidden">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-yellow-400 mb-2">{member.name}</h3>
              <p className="text-sm text-purple-400 mb-3">{member.role}</p>
              <p className="text-sm text-gray-400 mb-4 max-w-xs mx-auto">{member.bio}</p>
              
              <div className="flex justify-center gap-4">
                <a 
                  href={member.social.linkedin} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors p-2 hover:bg-yellow-400/10 rounded-full"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href={member.social.twitter} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors p-2 hover:bg-yellow-400/10 rounded-full"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href={"mailto:"+member.social.email} 
                  className="text-gray-400 hover:text-yellow-400 transition-colors p-2 hover:bg-yellow-400/10 rounded-full"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}