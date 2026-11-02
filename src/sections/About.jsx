import { Code2, Lightbulb, Rocket, User } from "lucide-react"



const highlight = [
    {
        icon: Code2,
        title: "Clean code",
        description: "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description: "Optimizing for speed and delivering lightning-fast user experiences",
    },
    {
        icon: User,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
            "Staying ahead with the latest technologies and best practices.",
    },
];


export const About = () => {
    return (
        <section id="about" className="relative py-32 overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Comlumn */}
                    <div className="space-y-8 ">
                        <div className="animate-fade-in">
                            <span className="text-sm text-secondary-foreground font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fate-in animation-delay-100 text-secondary-foreground">
                            Building the futture,
                            <span className="text-white font-serif italic font-normal">one components in a time.</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>Junior Frontend Developer with 1 year of experience in web development and a strong foundation in HTML,
                                CSS, Tailwind CSS, JavaScript, and React.js. Familiar with Git and GitHub for
                                version control and project collaboration. Passionate about building responsive, user-friendly web interfaces
                                and continuously learning new technologies to improve my skills, grow professionally, and develop high-quality
                                web applications.
                            </p>
                            <p>
                                I specialize in React, Next.js, and TypeScript, building
                                everything from sleek landing pages to complex enterprise
                                applications. My approach combines technical excellence with a
                                keen eye for design and user experience.
                            </p>
                            <p className="pb-7">
                                When I'm not coding, you'll find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with
                                the developer community.
                            </p>
                            <div className="glass p-6 rounded-2xl glow-border animate-fade-in animation-delay-300  ">
                                <p className="text-lg  font-medium italic text-foreground">
                                    "My mission is to create digital experiences that are not just
                                    functional, but truly delightful — products that users love to
                                    use and developers love to maintain."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Hilights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlight.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}