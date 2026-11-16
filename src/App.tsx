import { motion } from "motion/react";
import { 
  Mail, 
  Linkedin, 
  Instagram, 
  ExternalLink, 
  Camera, 
  Video, 
  FileText, 
  Menu, 
  X, 
  ChevronRight,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Trophy,
  HelpCircle,
  Sparkles,
  Play
} from "lucide-react";
import { useState, useEffect } from "react";

interface ArticleSection {
  type: "paragraph" | "heading" | "quote";
  text: string;
}

interface PortfolioItem {
  type: "video" | "written" | "photography";
  categoryLabel?: string;
  id?: string;
  title: string;
  date: string;
  description: string;
  link?: string;
  videoSrc?: string;
  isVertical?: boolean;
  thumbnail?: string;
  customThumbnail?: "first-to-11";
  details?: {
    stakes: string;
    viewerHelp: string;
    uniqueAngle: string;
  };
  content?: {
    byline: string;
    date: string;
    location: string;
    lead: string;
    photoCaption?: string;
    body: ArticleSection[];
  };
}

function FirstTo11Graphic() {
  return (
    <div className="w-full h-full bg-[#141414] relative flex items-center justify-center overflow-hidden transition-transform duration-700 group-hover:scale-105">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.14)_0%,rgba(18,18,18,0.96)_72%)]" />
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="First to 11 ping-pong match illustration"
      >
        {/* Table outline & center net */}
        <rect
          x="36"
          y="42"
          width="328"
          height="216"
          rx="4"
          stroke="#D4AF37"
          strokeOpacity="0.28"
          strokeWidth="1.5"
        />
        <line
          x1="200"
          y1="42"
          x2="200"
          y2="258"
          stroke="#D4AF37"
          strokeOpacity="0.45"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line
          x1="36"
          y1="150"
          x2="364"
          y2="150"
          stroke="#FFFFFF"
          strokeOpacity="0.08"
          strokeWidth="1"
        />

        {/* Ball trajectory arc */}
        <path
          d="M118 168 Q 200 84 282 138"
          stroke="#D4AF37"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />

        {/* Left Paddle */}
        <g transform="translate(106 162) rotate(-28)">
          <rect x="-5" y="22" width="10" height="32" rx="3" fill="#D4AF37" fillOpacity="0.7" />
          <ellipse cx="0" cy="0" rx="28" ry="31" fill="#1E1E1E" stroke="#D4AF37" strokeWidth="2.5" />
          <ellipse cx="0" cy="0" rx="22" ry="25" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1" />
        </g>

        {/* Right Paddle */}
        <g transform="translate(294 146) rotate(28)">
          <rect x="-5" y="22" width="10" height="32" rx="3" fill="#D4AF37" fillOpacity="0.7" />
          <ellipse cx="0" cy="0" rx="28" ry="31" fill="#1E1E1E" stroke="#D4AF37" strokeWidth="2.5" />
          <ellipse cx="0" cy="0" rx="22" ry="25" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1" />
        </g>

        {/* Ping-Pong Ball */}
        <circle cx="200" cy="112" r="10" fill="#F5F0E1" />
        <circle cx="197" cy="109" r="3" fill="#FFFFFF" />
        <circle cx="200" cy="112" r="15" stroke="#D4AF37" strokeOpacity="0.35" strokeWidth="1" />

        {/* Scoreboard Tag */}
        <rect x="138" y="210" width="124" height="28" rx="2" fill="#121212" stroke="#D4AF37" strokeOpacity="0.4" />
        <text
          x="200"
          y="228"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="11"
          fontWeight="700"
          letterSpacing="3"
          fontFamily="sans-serif"
        >
          FIRST TO 11
        </text>
      </svg>
    </div>
  );
}

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    type: "video",
    categoryLabel: "Social Video",
    title: "Times Square Eats: J-School Vox Pop",
    date: "October 30, 2026",
    description: "A quick social vox pop asking Craig Newmark Graduate School of Journalism students where they like to eat around Times Square—featuring Class of 2026 student Amanda Barret on her go-to Midtown Thai spot, Sai Tong Thai.",
    videoSrc: "./assets/aistudio/Amanda_Voxpop_Final_Cut_2521c442.mp4",
    isVertical: true,
  },
  {
    type: "video",
    title: "First to 11",
    date: "July 13, 2026",
    description: "An observational video feature following two beginners in a casual ping-pong match inside PingPod in Downtown Brooklyn. What starts as lighthearted fun builds into a tense, competitive game, capturing connection and release through candid, unscripted moments.",
    link: "https://drive.google.com/file/d/1EB1iF3qZ_7xAG-I4GPHPMulQ-d0jLOrt/view?usp=share_link",
    customThumbnail: "first-to-11",
    details: {
      stakes: "Although the match is casual, the stakes build through the game itself: who will reach 11 first? As beginners, each missed shot, lucky point, and small victory raises the tension.",
      viewerHelp: "This story highlights how everyday movement, like playing a simple game, can hold narrative weight and meaning. It encourages viewers to see competition and connection between friends/individuals, making the experience feel engaging and cinematic.",
      uniqueAngle: "Rather than focusing on skilled players, this story centers specifically on beginner/entry-level players to show mistakes, building connections, and humor. The feature reframes ping pong not as a sport but as a shared experience where tension can emerge naturally."
    }
  },
  {
    type: "written",
    title: "No Longer a Contradiction",
    date: "May 18, 2026",
    description: "Across Central Brooklyn, queer Caribbean New Yorkers are reshaping what masculinity, identity, and community can look like within the diaspora.",
    thumbnail: new URL("./assets/images/brooklyn_pride_center_1783963895831.jpg", import.meta.url).href,
    content: {
      byline: "Carlton Coakley Jr.",
      date: "May 18, 2026",
      location: "Central Brooklyn",
      lead: "Across Central Brooklyn, queer Caribbean New Yorkers are reshaping what masculinity, identity, and community can look like within the diaspora.",
      photoCaption: "A welcoming sign at the Brooklyn Community Pride Center in Crown Heights, Central Brooklyn, capturing the inclusive spirit of local spaces. Photo credit: Carlton Coakley Jr.",
      body: [
        {
          type: "paragraph",
          text: "Men lean forward in their chairs, voices low but steady, as they begin to say things out loud many of them once avoided saying out loud. Stories move across the room about family, silence, religion, and the careful calculation of when to speak and when to stay invisible. Heads nod in recognition. A few slip between patois and English as the conversation deepens."
        },
        {
          type: "paragraph",
          text: "“I didn’t even know how to say it out loud at first,” said Anju Gregory, a 32-year-old Jamaican immigrant who now lives in Brooklyn. The gathering, held at Brooklyn Community Pride Center in Crown Heights, brings together men from across the Caribbean diaspora. Some come to listen, others to share. For Gregory, it is one of the few spaces where he does not feel the need to separate his cultural identity from his sexuality."
        },
        {
          type: "paragraph",
          text: "In Central Brooklyn, where Caribbean communities shape neighborhoods like Flatbush and Crown Heights, expectations around masculinity and sexuality, often rooted in cultural tradition, religion, and long-standing social norms, remain deeply embedded. For many queer Caribbean men, belonging can come at the cost of visibility. But across these neighborhoods, a younger generation is pushing back, building networks of support, redefining masculinity, and expanding what it means to exist within the Caribbean diaspora. In doing so, they are not abandoning their culture, but actively reshaping it."
        },
        {
          type: "paragraph",
          text: "For Gregory, that tension between culture and identity did not disappear when he moved to New York; it followed him. In Jamaica, he learned early what masculinity was supposed to look like: controlled, stoic, unquestioned. “I was always told by the male figures in my life that a man is expected to protect, show no emotion, lead, and assert dominance,” he said."
        },
        {
          type: "paragraph",
          text: "Moving to New York did not erase those expectations, especially in neighborhoods where Caribbean culture remains central to daily life. They continued to shape how Gregory spoke and carried himself, reinforced by the same cultural and religious values he grew up with. Raised in a Christian household, he spent years hearing that queerness was something to be corrected or concealed. Coming out meant confronting not only his family, but a belief system that had long defined his understanding of himself. When his father struggled to accept him, the distance between them grew, eventually leading Gregory to step away from that relationship entirely."
        },
        {
          type: "quote",
          text: "“It’s about being understood without having to explain where you come from too,” Gregory said."
        },
        {
          type: "paragraph",
          text: "Omar Martinez, 26, a Dominican American who split his upbringing between the Dominican Republic and Flatbush, said he learned early how to navigate expectations around masculinity."
        },
        {
          type: "paragraph",
          text: "“You don’t talk about it. You don’t show it,” he said. “You just learn how to move a certain way so nobody asks.” Even in New York City, where queer visibility is more accepted, that self-monitoring doesn’t fully disappear. “It’s like you’re free, but not fully. There’s always a part of you watching yourself.”"
        },
        {
          type: "paragraph",
          text: "Martinez said living openly has brought both confidence and scrutiny. “I’m a feminine man. People stare, give me looks, avoid me,” he said. “But that also made me more comfortable in who I am. There are moments where masculinity feels like something you have to perform.”"
        },
        {
          type: "paragraph",
          text: "For 30-year-old Ahmed Louis, an American-born son of Haitian immigrants living in Crown Heights, that tension once felt absolute. “I didn’t think the two could exist together. Growing up in a Caribbean household, homosexuality was always looked down on and scorned,” he said."
        },
        {
          type: "paragraph",
          text: "In a family of Catholics, Louis said expectations around gender and identity were rarely questioned. “I felt like I had to choose. Either be Haitian and be the man my parents expected, or be myself.” While he has found more freedom within the city, he said fully reconciling both parts of his identity remains a process. “You’re constantly figuring out where you fit. Not just within the queer community, but in your own culture too.”"
        },
        {
          type: "paragraph",
          text: "For Louis, that process has meant slowly unlearning the idea that those identities must exist in opposition."
        },
        {
          type: "paragraph",
          text: "Across interviews, several themes emerged: of silence learned early, masculinity narrowly defined, and a persistent sense that visibility comes with risk begin to surface. That tension is not incidental. It is rooted in a broader cultural framework that has defined gender and sexuality across Caribbean communities."
        },
        {
          type: "quote",
          text: "“Ideas about masculinity in many Caribbean societies are deeply influenced by colonial history, religion, and the rigid gender roles those communities live in,” said Rosamond King."
        },
        {
          type: "paragraph",
          text: "Rosamond King, a professor at CUNY Brooklyn College whose work focuses on Caribbean identity and gender studies, added: “Those expectations don’t disappear in the diaspora. They travel with people, shaping how individuals see themselves and how communities respond to them.”"
        },
        {
          type: "paragraph",
          text: "But for many of the men navigating these expectations in Brooklyn, those norms are not simply inherited, they are actively being challenged."
        },
        {
          type: "paragraph",
          text: "Across Central Brooklyn, that pushback is taking shape through both formal organizations and informal networks built within the community. Organizations like the Caribbean Equality Project have created spaces where queer Caribbean immigrants can connect, share experiences, and access resources that are often absent in traditional family or cultural settings."
        },
        {
          type: "quote",
          text: "“For many people, this is the first time they can exist fully as both Caribbean and queer,” said Mohamed Q. Amin."
        },
        {
          type: "paragraph",
          text: "Mohamed Q. Amin, founder of the Caribbean Equality Project, explained: “We’re not just creating safe spaces, we’re building community and visibility.” Founded in 2015, the Caribbean Equality Project organizes support groups, advocacy campaigns, and public events centered on LGBTQ+ Caribbean immigrants across New York City. Amin said the organization's work is not about rejecting Caribbean culture, but creating room within it for people who have historically been excluded."
        },
        {
          type: "paragraph",
          text: "This shift is also generational. According to a 2025 Gallup report, more than one in five Gen Z adults, those born between 1997 and 2006, identify as LGBTQ+, a significantly higher percentage than older generations. The findings reflect a broader cultural shift toward openness and visibility among younger people who are increasingly willing to claim identities that previous generations concealed."
        },
        {
          type: "paragraph",
          text: "In Brooklyn, that shift is visible in the spaces younger queer Caribbean New Yorkers are building for themselves, where Caribbean identity and queerness are not treated as contradictions. For many of the men at the Crown Heights gathering, masculinity is no longer defined through emotional dominance but through vulnerability and self-expression."
        },
        {
          type: "quote",
          text: "“Growing up, being masculine meant never showing weakness. Now, it takes more strength to be honest about who you are,” Martinez said."
        },
        {
          type: "paragraph",
          text: "That redefinition happens collectively. Spaces like the Brooklyn Community Pride Center and the Caribbean Equality Project provide more than affirmation; for many, they function as a form of chosen family after years of rejection and isolation."
        },
        {
          type: "paragraph",
          text: "Back at the gathering, the conversation continues. Dancehall music hums quietly through the room as men linger, exchanging Instagram handles and laughing softly. For Gregory, the room represents something he once believed he would never find: a place where no part of himself has to be left outside the door."
        }
      ]
    }
  },
  {
    type: "video",
    title: "The Last Safe Space",
    date: "March 20, 2026",
    description: "In a shifting NYC nightlife, independent queer spaces are vanishing. This story follows the organizers sustaining ballroom culture—a vital sanctuary for performance and belonging in an increasingly unaffordable city.",
    link: "https://drive.google.com/file/d/1jDR5DC2OpqFgvErIue7mKC6H5T0OChXB/view?usp=share_link",
    thumbnail: "https://drive.google.com/thumbnail?id=1_kjN-7TpWu9V8sgPEDPD2lKGA2452SX2&sz=w1000",
  },
  {
    type: "written",
    title: "The Body Speaks: Felix Luar’s Ballroom Journey",
    date: "March 17, 2026",
    description: "Felix Luar transforms voguing into more than dance. For him, it builds his chosen family and creates self-expression as he teaches queer and immigrant performers how to exist in their bodies.",
    thumbnail: "https://drive.google.com/thumbnail?id=1Xc8SN0XUBDnmwbrEc3yfPrli1gFkI81y&sz=w1000",
    link: "https://docs.google.com/document/d/1WkZuIJLvrF_3nyut_-EHrPyz88yRTIVy6BUYDKBPBkM/preview",
    content: {
      byline: "Carlton Coakley Jr.",
      date: "March 17, 2026",
      location: "New York City",
      lead: "Felix Luar transforms voguing into more than dance. For him, it builds his chosen family and creates self-expression as he teaches queer and immigrant performers how to exist in their bodies.",
      photoCaption: "Felix Luar, ballroom vogue dancer, poses outside Abolitionist Place Park in Downtown Brooklyn on March 13, 2026. Photo credit: Carlton Coakley Jr.",
      body: [
        {
          type: "paragraph",
          text: "At a bar in Downtown Brooklyn, Felix Luar gestures as he talks, walking me through what happens in a ballroom practice."
        },
        {
          type: "paragraph",
          text: "The music hits first; fast, percussive, impossible to ignore. Hands slice through the air. A dancer drops into a duckwalk. Another spins before freezing into a sharp pose. In the corner, someone stretches against the wall while Luar calls out corrections, his voice cutting through the pulse of the track. But before anyone moves, he tells beginners one thing."
        },
        {
          type: "quote",
          text: "“Voguing isn’t just movement,” he says. “It’s a feeling that transmits through your body.”"
        },
        {
          type: "paragraph",
          text: "At 26, Luar has built his life around that feeling. As a voguing instructor and founder of the Haus of Luar - a cultural collective supporting Latinx and immigrant performers, he uses voguing not just as a performance, but as a practice: a way to teach discipline, confidence, and self-expression through movement."
        },
        {
          type: "paragraph",
          text: "Long before he was teaching dancers how to command a room, Luar’s life unfolded far from the ballroom culture of New York. Born Albert Felix, he spent much of his childhood in San Francisco de Macorís, a city in the Dominican Republic, before immigrating to New York City at the age of 12."
        },
        {
          type: "paragraph",
          text: "The move placed him in Washington Heights, where the density and noise of the city felt worlds away from the quieter rhythm of his early life. Still, the challenges of immigrant life were constant. “We grew up very low-income,” Luar says. “For years, I shared a twin bed with my brother. We all lived in one room.”"
        },
        {
          type: "paragraph",
          text: "School brought another challenge: navigating a system his parents had never known. When it came time to apply to college, he had to figure out financial aid, applications, and scholarships entirely on his own. “My parents didn’t know how it worked. I had to learn all of that myself.”"
        },
        {
          type: "paragraph",
          text: "At the same time, he was navigating yet another part of his identity. “I was closeted through high school and college,” he says."
        },
        {
          type: "paragraph",
          text: "Those overlapping realities of immigrant life, financial hardship, and being a queer Latinx man would later shape how Luar approached voguing and the kind of community he hoped to build within it."
        },
        {
          type: "paragraph",
          text: "The first time Luar stepped into a ballroom, it hit him like a storm. The bass thumped through the floor. Mirrors multiplied every flick of a wrist, every drop into a dip. Sequins caught the light, and the air smelled of sweat and excitement as dancers sliced across the floor, turning categories into battlegrounds."
        },
        {
          type: "quote",
          text: "“I had never seen anything like it,” he says. “ It wasn’t just dancing. It was life. Every fear, joy, and triumph, condensed into a movement.”"
        },
        {
          type: "paragraph",
          text: "For a moment, he felt out of place, unsure where he belonged. Ballroom demanded stamina, courage, and boldness. But he was captivated. From that night, voguing became more than performance. It became a language of self-expression, a way to claim space, and a discipline he would devote his body to."
        },
        {
          type: "paragraph",
          text: "Early on, Luar stumbled, awkwardly trying moves, learning the slang, and laughing off mistakes. But his determination carried him forward. Each practice became a step towards mastery. Eventually, he moved from student to teacher, mentoring the next generation and creating a space of his own. What began as personal discovery grew into something larger, a space where dancers could take up room, refine their craft, and see themselves reflected in one another."
        },
        {
          type: "paragraph",
          text: "Today, that philosophy plays out in the rooms he teaches."
        },
        {
          type: "paragraph",
          text: "As a City College of New York alumnus, Luar leads ballroom workshops across CUNY campuses, introducing students to voguing, performance, and self-expression. During sessions, he moves with a careful eye, stopping dancers in between elements to adjust a hand, a posture, a pause. He pushes them past hesitation, asking for more intention."
        },
        {
          type: "quote",
          text: "\"Don't just do the move,” he tells them. “Feel it.”"
        },
        {
          type: "paragraph",
          text: "Many arrive unsure of their bodies, unfamiliar with ballroom altogether. “They come in shy,” Luar says. “But by the end, they’re more confident. They’re opening up.”"
        },
        {
          type: "paragraph",
          text: "For him, that transformation is the point."
        },
        {
          type: "paragraph",
          text: "“Ballroom saved me in a lot of ways. Being able to bring that into these spaces, especially for queer students, for students of color, it means everything,” he says."
        },
        {
          type: "paragraph",
          text: "Behind the workshops and performances in balls, the work is repetitive and physical. Luar spends hours drilling movements, stretching and preparing his body, pushing through strain to refine each gesture until it lands with precision. Dips, spins, catwalks, and duckwalks all demand control, and the toll builds over time."
        },
        {
          type: "paragraph",
          text: "Back at the bar, Luar leans forward, his hands moving instinctively, tracing the rhythm of what he’s been describing."
        },
        {
          type: "paragraph",
          text: "Even here, practice lingers. It lives in the way he moves, and in the way he teaches others to move. For him, voguing is about learning how to exist fully in his own body as well as helping others do the same."
        }
      ]
    }
  },
  {
    type: "photography",
    id: "tattoo-artist",
    title: "Ink & Identity",
    date: "March 3, 2026",
    description: "A visual study of tattoo artist Shaniya Basora in her Greenpoint studio, capturing the meticulous process and intimate atmosphere of Brooklyn's tattoo culture.",
    thumbnail: "https://drive.google.com/thumbnail?id=1cietGeV0fl-dqs_FscE8JGTC-JvdPVMw&sz=w1000",
  },
  {
    type: "video",
    title: "Selling Sentiment",
    date: "February 28, 2026",
    description: "Can nostalgia pay the rent in Midtown Manhattan? Tommy’s Figz is more than a toy store—it’s an archive of childhood. This piece explores whether sentiment can survive the high-stakes reality of Columbus Circle real estate.",
    link: "https://drive.google.com/file/d/1TrDB9XwdRYSy_yyztOVNb7pNsBX-f63g/view?usp=share_link",
    thumbnail: "https://drive.google.com/thumbnail?id=1AgqhXKXy4wrGWkgzP46Ff1nh1dY-5Z1N&sz=w1000",
  },
  {
    type: "video",
    title: "Subway Safety: The Perception Gap",
    date: "December 18, 2025",
    description: "While official data showed a sharp drop in subway crime last December, many riders reported a growing sense of unease, highlighting a stark divide between statistics and lived experience.",
    link: "https://drive.google.com/file/d/16lNJtt_PkNU9EpLfS-n6M0wEwcO_oYC1/view?usp=sharing",
    thumbnail: "https://drive.google.com/thumbnail?id=1-p6j6VNZKuSniz1Bw6NHzWC06A3huZnZ&sz=w1000",
  },
  {
    type: "written",
    title: "New Yorkers turn grief into remembrance",
    date: "October 9, 2025",
    description: "New Yorkers express grief and pay tribute to lives lost in Gaza and Israel through public acts of remembrance.",
    thumbnail: "https://drive.google.com/thumbnail?id=1uqpUE3c0K9U03oM2t3KfaYknDMSHv_ZK&sz=w1000",
    link: "https://saraganim.substack.com/p/new-yorkers-turn-grief-into-remembrance?r=6gmrov&utm_medium=ios&triedRedirect=true",
  },
];

const TATTOO_GALLERY = [
  {
    url: "https://drive.google.com/thumbnail?id=1FkFO5ECpCprpUWUy9PugfKyr5dVYiB7q&sz=w1000",
    caption: "A photobook of small tattoo designs sits on a coffee table inside tattoo artist Shaniya Basora’s workspace in Greenpoint, Brooklyn, on March 3, 2026. Photo by: Carlton Coakley Jr."
  },
  {
    url: "https://drive.google.com/thumbnail?id=1cietGeV0fl-dqs_FscE8JGTC-JvdPVMw&sz=w1000",
    caption: "Tattoo artist Shaniya Basora, 25, poses in her studio before a tattoo session in Greenpoint, Brooklyn, on March 3, 2026. Photo by: Carlton Coakley Jr."
  },
  {
    url: "https://drive.google.com/thumbnail?id=1TUDr0RPXSvrMfcdyQA07o-vAoQhzE34c&sz=w1000",
    caption: "Shaniya Basora, prepares client for tattoo session by applying the stencils to her client's arm in Greenpoint, Brooklyn, on March 3, 2026. Photo by: Carlton Coakley Jr."
  },
  {
    url: "https://drive.google.com/thumbnail?id=1KFHj0ZWc9PexQvGDIrdDArn-Fplp8il4&sz=w1000",
    caption: "Tattoo artist Shaniya Basora works on a client’s tattoo at her workspace in Greenpoint, Brooklyn, Brooklyn, on March 3, 2026. Photo by: Carlton Coakley Jr."
  },
  {
    url: "https://drive.google.com/thumbnail?id=1wzUuUKMPdLrq09NX2atMd1kD5fFjZRRH&sz=w1000",
    caption: "close up of client's tattoo design. Photo by: Carlton Coakley Jr"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<PortfolioItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getEmbedUrl = (url: string) => {
    return url.replace('/view', '/preview').replace('?usp=share_link', '');
  };

  return (
    <div className={`min-h-screen font-sans bg-[#121212] text-[#e5e5e5] ${(selectedGallery || selectedVideo || selectedArticle) ? 'overflow-hidden' : ''}`}>
      {/* Video Modal */}
      {selectedVideo && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto flex flex-col items-center py-12 px-4 md:px-8"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close button */}
          <button 
            onClick={() => setSelectedVideo(null)}
            className="fixed top-6 right-6 md:top-8 md:right-8 z-[110] bg-black/50 hover:bg-black/80 text-white/50 hover:text-[#D4AF37] p-2 rounded-full transition-all border border-white/5"
            aria-label="Close video player"
          >
            <X size={28} />
          </button>

          <div
            className="w-full max-w-5xl mt-8 space-y-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Player */}
            {selectedVideo.videoSrc ? (
              <div
                className={`${
                  selectedVideo.isVertical
                    ? "w-full max-w-[380px] aspect-[9/16] mx-auto"
                    : "w-full aspect-video"
                } bg-black rounded-sm overflow-hidden shadow-2xl border border-white/10`}
              >
                <video
                  src={selectedVideo.videoSrc}
                  className="w-full h-full object-contain bg-black"
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            ) : selectedVideo.link ? (
              <div className="w-full aspect-video bg-black rounded-sm overflow-hidden shadow-2xl border border-white/10">
                <iframe 
                  src={getEmbedUrl(selectedVideo.link)} 
                  className="w-full h-full" 
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                ></iframe>
              </div>
            ) : null}

            {/* YouTube style info section */}
            <div className="space-y-8 bg-[#121212]/80 p-6 md:p-8 rounded-sm border border-white/5 backdrop-blur-sm">
              {/* Title & Date */}
              <div className="border-b border-white/10 pb-6">
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] font-bold text-[#D4AF37] mb-3">
                  <span>{selectedVideo.categoryLabel || "Video Story"}</span>
                  <span className="text-gray-600">•</span>
                  <span>{selectedVideo.date}</span>
                </div>
                <h2 className="font-sans text-3xl md:text-5xl font-black text-white tracking-tight">
                  {selectedVideo.title}
                </h2>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-sm uppercase tracking-widest font-bold text-gray-400">Background & Synopsis</h3>
                <p className="text-gray-300 leading-relaxed text-base md:text-lg font-light">
                  {selectedVideo.description}
                </p>
              </div>

              {/* Optional rich metadata like Stakes, Help, Angle */}
              {selectedVideo.details && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  {/* Stakes */}
                  <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <Trophy size={18} />
                      <h4 className="text-xs uppercase tracking-widest font-bold">The Stakes</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {selectedVideo.details.stakes}
                    </p>
                  </div>

                  {/* How it helps */}
                  <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <HelpCircle size={18} />
                      <h4 className="text-xs uppercase tracking-widest font-bold">Viewer Impact</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {selectedVideo.details.viewerHelp}
                    </p>
                  </div>

                  {/* Unique Angle */}
                  <div className="bg-[#1a1a1a] p-6 rounded-sm border border-white/5 space-y-3">
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <Sparkles size={18} />
                      <h4 className="text-xs uppercase tracking-widest font-bold">Unique Angle</h4>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">
                      {selectedVideo.details.uniqueAngle}
                    </p>
                  </div>
                </div>
              )}

              {/* Back to portfolio button */}
              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="text-[#D4AF37] hover:text-white uppercase tracking-widest text-xs font-bold transition-colors flex items-center gap-2"
                >
                  Close Player <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Photo Gallery Modal */}
      {selectedArticle && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-[#0a0a0a] overflow-y-auto pt-20 pb-32 px-6"
        >
          <button 
            onClick={() => setSelectedArticle(null)}
            className="fixed top-8 right-8 z-[110] text-white/50 hover:text-[#D4AF37] transition-colors"
          >
            <X size={40} />
          </button>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#D4AF37] uppercase tracking-[0.4em] text-xs font-bold mb-6">Feature Story</p>
              <h2 className="font-sans text-4xl md:text-7xl font-black text-white mb-8 leading-[1.1] tracking-tighter">
                {selectedArticle.title}
              </h2>
              <div className="flex flex-col items-center gap-2">
                <p className="text-white/80 font-medium tracking-wide">By {selectedArticle.content?.byline || "Carlton Coakley Jr."}</p>
                <p className="text-gray-500 uppercase tracking-widest text-xs">{selectedArticle.date}</p>
              </div>
            </div>

            <div className="mb-16">
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-white/10">
                <img 
                  src={selectedArticle.thumbnail} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              {selectedArticle.content?.photoCaption && (
                <p className="mt-4 text-xs text-gray-500 italic font-light tracking-wide leading-relaxed">
                  {selectedArticle.content.photoCaption}
                </p>
              )}
            </div>

            {selectedArticle.content?.lead && (
              <div className="mb-16 border-l-4 border-[#D4AF37] pl-8 py-2">
                <p className="text-xl md:text-2xl text-white font-medium leading-relaxed italic opacity-90">
                  {selectedArticle.content.lead}
                </p>
              </div>
            )}

            <div className="prose prose-invert prose-lg max-w-none">
              {selectedArticle.content?.body.map((section: any, idx: number) => {
                if (section.type === 'paragraph') {
                  return (
                    <p key={idx} className="text-gray-300 leading-relaxed mb-8 text-base md:text-lg font-light">
                      {idx === 0 && (
                        <span className="float-left text-6xl md:text-8xl font-black text-[#D4AF37] mr-4 mt-2 leading-none">
                          {section.text.charAt(0)}
                        </span>
                      )}
                      {idx === 0 ? section.text.slice(1) : section.text}
                    </p>
                  );
                }
                if (section.type === 'heading') {
                  return (
                    <h3 key={idx} className="text-2xl md:text-3xl font-bold text-white mt-16 mb-6 tracking-tight">
                      {section.text}
                    </h3>
                  );
                }
                if (section.type === 'quote') {
                  return (
                    <blockquote key={idx} className="my-12 border-l-0 pl-0 text-center">
                      <p className="text-2xl md:text-4xl font-black text-white italic tracking-tight leading-tight mb-4">
                        {section.text}
                      </p>
                      <div className="w-12 h-px bg-[#D4AF37] mx-auto"></div>
                    </blockquote>
                  );
                }
                return null;
              })}
            </div>

            <div className="mt-24 pt-12 border-t border-white/10 text-center">
              <button 
                onClick={() => setSelectedArticle(null)}
                className="group flex items-center gap-3 mx-auto text-[#D4AF37] uppercase tracking-[0.3em] text-sm font-bold hover:text-white transition-colors"
              >
                <ChevronRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
                Back to Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {selectedGallery === 'tattoo-artist' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-black/95 overflow-y-auto pt-20 pb-32 px-6"
        >
          <button 
            onClick={() => setSelectedGallery(null)}
            className="fixed top-8 right-8 z-[110] text-white/50 hover:text-[#D4AF37] transition-colors"
          >
            <X size={40} />
          </button>

          <div className="max-w-5xl mx-auto space-y-24">
            <div className="text-center mb-20">
              <h2 className="font-sans text-4xl md:text-6xl font-black text-[#D4AF37] mb-4">Ink & Identity</h2>
              <p className="text-gray-500 uppercase tracking-widest text-sm">Greenpoint, Brooklyn — March 3, 2026</p>
            </div>

            {TATTOO_GALLERY.map((photo, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="aspect-video overflow-hidden rounded-sm border border-white/5">
                  <img 
                    src={photo.url} 
                    alt={`Tattoo Gallery ${idx + 1}`} 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-gray-400 text-sm md:text-base italic leading-relaxed max-w-3xl mx-auto text-center">
                  {photo.caption}
                </p>
              </motion.div>
            ))}

            <div className="text-center pt-20">
              <button 
                onClick={() => setSelectedGallery(null)}
                className="border border-[#D4AF37] text-[#D4AF37] px-10 py-4 uppercase tracking-widest font-bold hover:bg-[#D4AF37] hover:text-black transition-all"
              >
                Back to Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-[#121212]/90 backdrop-blur-md py-4 shadow-lg border-b border-white/5" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="font-sans text-2xl font-bold tracking-tight text-[#D4AF37]">
            Carlton Coakley Jr.
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm uppercase tracking-widest font-medium hover:text-[#D4AF37] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-[#D4AF37]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 bg-[#1a1a1a] border-b border-white/5 p-6 md:hidden"
          >
            <div className="flex flex-col space-y-6">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium hover:text-[#D4AF37]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 bg-[#121212]">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/50 to-[#121212]"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tighter leading-tight font-black text-[#D4AF37]">
              Multimedia <br /> Journalist
            </h1>
            <div className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-gray-400">
              <span>Video</span>
              <span className="text-gray-600">•</span>
              <span>Photography</span>
              <span className="text-gray-600">•</span>
              <span>Audio</span>
              <span className="text-gray-600">•</span>
              <span>Written Storytelling</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-[#D4AF37]/50"></div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-sans text-3xl md:text-4xl mb-4 italic text-[#D4AF37]/60 font-bold leading-tight">
                "Stories don't wait. <br /> Neither do I."
              </h2>
              <div className="h-px w-20 bg-[#D4AF37] mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
                Carlton Coakley Jr. is a multimedia journalist pursuing his Master's in Journalism at the CUNY Craig Newmark Graduate School of Journalism, specializing in Arts & Culture. His work spans across video, photography, audio and written pieces, all focused on capturing authentic moments and voices of underrepresented communities & queer space.
              </p>
              
              <div className="mt-10 space-y-4 text-sm md:text-base text-gray-400 font-medium">
                <div className="flex items-center space-x-3">
                  <div className="text-[#D4AF37]/80">
                    <MapPin size={18} />
                  </div>
                  <span>New York City area</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-[#D4AF37]/80">
                    <GraduationCap size={18} />
                  </div>
                  <span>CUNY Craig Newmark Graduate School of Journalism - Class 2026</span>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold mb-4">Production</h3>
                  <ul className="text-sm text-gray-400 space-y-2 font-light">
                    <li>Canon C200 & DSLR</li>
                    <li>Adobe Premiere Pro</li>
                    <li>Pro Tools & AVID</li>
                    <li>Audio Field Recording</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#D4AF37] uppercase tracking-widest text-xs font-bold mb-4">Photo & Visuals</h3>
                  <ul className="text-sm text-gray-400 space-y-2 font-light">
                    <li>DSLR Photography</li>
                    <li>Adobe Lightroom</li>
                    <li>Adobe Bridge</li>
                    <li>Visual Storytelling</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full shadow-2xl border-4 border-[#D4AF37]">
              <img 
                src="https://drive.google.com/thumbnail?id=1LYio-hyMF5rPzBoEdHD_ZYnKdLxA4fu8&sz=w1000" 
                alt="Carlton Coakley Jr." 
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 px-6 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-sans text-4xl md:text-6xl mb-4 tracking-tight font-black text-[#D4AF37] leading-tight">Portfolio</h2>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-gray-500">Selected Clips</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#121212] overflow-hidden rounded-sm border border-white/5 cursor-pointer"
                onClick={() => {
                  if (item.type === 'photography' && item.id) {
                    setSelectedGallery(item.id);
                  } else if (item.type === 'video' && (item.videoSrc || item.link)) {
                    setSelectedVideo(item);
                  } else if (item.type === 'written') {
                    if (item.content) {
                      setSelectedArticle(item);
                    } else if (item.link) {
                      window.open(item.link, '_blank');
                    }
                  }
                }}
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-[#141414]">
                  {item.customThumbnail === "first-to-11" ? (
                    <FirstTo11Graphic />
                  ) : item.videoSrc && !item.thumbnail ? (
                    <video
                      src={`${item.videoSrc}#t=0.5`}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105 grayscale opacity-75 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  ) : (
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  {item.videoSrc && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-black/70 border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black group-hover:scale-110 transition-all duration-300 shadow-xl">
                        <Play size={22} className="ml-0.5 fill-current" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-[#D4AF37]/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-black">
                    {item.type === 'video' ? <Video size={18} /> : item.type === 'photography' ? <Camera size={18} /> : <FileText size={18} />}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-1 gap-3">
                    <h3 className="font-sans text-xl font-bold leading-tight text-[#D4AF37]">{item.title}</h3>
                    {item.videoSrc ? (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedVideo(item);
                        }}
                        aria-label={`Watch ${item.title}`}
                        className="text-gray-500 hover:text-[#D4AF37] transition-colors shrink-0"
                      >
                        <Play size={18} />
                      </button>
                    ) : item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-[#D4AF37] transition-colors shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowUpRight size={20} />
                      </a>
                    ) : null}
                  </div>
                  {item.date && (
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mb-4">
                      {item.date}
                    </p>
                  )}
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-gray-500">
                    <span className="mr-2">{item.categoryLabel || item.type}</span>
                    <ChevronRight size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="font-sans text-4xl md:text-6xl mb-8 tracking-tight font-black text-[#D4AF37] leading-tight">Get in Touch</h2>
              <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12">
                Available for freelance assignments, editorial commissions, and collaborations. Based in NYC — willing to travel.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-full text-[#D4AF37]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Business Email</p>
                    <a href="mailto:c.coakleyjr@journalism.cuny.edu" className="text-lg hover:text-[#D4AF37] hover:underline decoration-[#D4AF37]/30 underline-offset-4">
                      c.coakleyjr@journalism.cuny.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-full text-[#D4AF37]">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">Personal Email</p>
                    <a href="mailto:carltoncoakleyjr@gmail.com" className="text-lg hover:text-[#D4AF37] hover:underline decoration-[#D4AF37]/30 underline-offset-4">
                      carltoncoakleyjr@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="bg-[#1a1a1a] p-4 rounded-full text-[#D4AF37]">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold text-gray-500 mb-1">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/carlton-coakley-jr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-lg hover:text-[#D4AF37] hover:underline decoration-[#D4AF37]/30 underline-offset-4"
                    >
                      carlton-coakley-jr
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a] p-10 rounded-sm border border-white/5">
              <form 
                className="space-y-6" 
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  
                  const mailtoLink = `mailto:carltoncoakley11@gmail.com?subject=${encodeURIComponent(subject as string || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  window.location.href = mailtoLink;
                }}
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Name</label>
                    <input 
                      name="name"
                      type="text" 
                      required
                      className="w-full bg-[#121212] border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Email</label>
                    <input 
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-[#121212] border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors text-white" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Subject</label>
                  <input 
                    name="subject"
                    type="text" 
                    required
                    className="w-full bg-[#121212] border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors text-white" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-gray-500">Message</label>
                  <textarea 
                    name="message"
                    rows={6} 
                    required
                    className="w-full bg-[#121212] border border-white/10 p-4 focus:outline-none focus:border-[#D4AF37] transition-colors resize-none text-white"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black py-5 uppercase tracking-[0.2em] font-bold text-sm hover:bg-[#C5A059] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#121212]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Carlton Coakley Jr. All rights reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-[#D4AF37] transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
