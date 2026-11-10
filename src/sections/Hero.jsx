import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, } from "lucide-react";
import { FaFacebook, FaLinkedin, FaTelegram } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";


const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "TypeScrip",
    "Tailwndcss",
    "React.js",
    "Rest API",
    "Git",
    "Github",
    "Figma",
]

const socials = [
    { icon: FaFacebook, href: "https://www.facebook.com/share/1F2ebzwYAV/", label: "Facebook" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/chun-menghor-141316445/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B8zaUtIlHTqyHBYbs6HxGqA%3D%3D", label: "LinkedIn" },
    { icon: FaTelegram, href: "https://t.me/+855884745997", label: "Telegram" },
];

const scrollToContact = () => {
    document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
  };

export const Hero = () => {


    return (

        // Background
        <section className="relative min-h-screen flex items-center overflow-hidden">
            <div className="absolute inset-0">
                <img src="projects/hero-bg.jpg" alt="hero image" className="w-full h-full object-cover opacity-40" />
                <div className="absolute inset-0 bg-linear-to-b from-background/20 vai-backgound/80 to-background " />
            </div>

            {/* green dot */}
            <div className="absoute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="container mx-auto pt-32 px-6 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className=" animate-fade-in">
                        {/* Left text-content */}
                        <div className="space-y-8">
                            <span className="inline-flex gap-2 items-center rounded-full px-4 py-2 glass text-sm text-primary">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                Web Developer - React Spacilist
                            </span>
                        </div>
                        {/* heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl sm:text-7xl font-bold animate-fade-in">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                <span>experience with</span>
                                <br />
                                <span className="font-serif italic font-normal text-white">precision</span>

                            </h1>
                            <p className="text-lg max-w-lg text-muted-foreground  animate-fade-in animation-delay-300">
                                Hi, I'm Chun Menghor — a web devoleper with a strong foundation in JavaScript, HTML, and CSS, currently
                                ``                building projects with React and Tailwind CSS. Comfortable
                                debugging, reading documentation, and learning new tools
                                independently. Also have experience with Git and GitHub for
                                version control, project management, and collaborative development.
                                I am continuously improving my skills and learning new technologies to build efficient and high-quality web applications.
                            </p>
                        </div>
                        {/* CTAs */}
                        <div className="flex  flex-wrap py-5 gap-5 animate-fade-in animation-delay-500 items-center ">
                           <a href="#contact">
                            <Button size="lg" className="cursor-pointer px-4">
                                Contact me  <ArrowRight className="w-5 h-5 " />
                            </Button>
                            </a>
                            <AnimatedBorderButton className="">
                                <Download className="w-5 h-5" />
                                <a href="/cv/Chun-Menghor-CV.pdf" download="Chun-Menghor-CV.pdf">
                                    Download CV
                                </a>
                            </AnimatedBorderButton>


                        </div>
                        {/* Social Link */}

                        <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
                            <span className="text-muted-foreground text-sm">Follow Me :</span>
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a key={label} href={href} aria-label={label}
                                    className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                    {/* Right content image */}
                    <div className="relative animate-fade-in animation-delay-400">
                        <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse" />
                        <div className="relative max-w-md mx-auto">
                            <div className="relative glass rounded-3xl glow-border p-2">
                                <img src="projects/myImage.jpg" alt="Chun Menghor"
                                    className="w-full aspect-4/5 object-cover rounded-2xl md:w-full/2" />
                                {/* Available for worl */}
                                <div className="absolute -bottom-4 -right-2 glass rounded-xl p-2 animate-float">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                        <span className="text-sm font-medium">Available for work</span>
                                    </div>
                                </div>
                                {/* stats bode  */}
                                <div className="absolute -top-4 -left-4 glass rounded-xl py-1 px-2 animate-float animation-delay-500">
                                    <div className="text-primary text-2xl font-bold text-center">1+</div>
                                    <div className="text-muted-foreground text-md ">Year exp</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Skill */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-muted-foreground text-center mb-6 ">Technologies I work with</p>
                    <div className="flex animate-marquee">
                        {[...skills, ...skills].map((skill, idx) => (
                            <div key={idx} className="shrink-0 py-8 px-4">
                                <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2  animate-fade-in animation-delay-800">
                <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    )
}