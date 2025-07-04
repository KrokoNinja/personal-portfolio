import { Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import Link from "next/link";

const infoData =[
  {
    icon: <User2 />,
    text: "Lennert Pfundtner",
  },
  {
    icon: <PhoneCall />,
    text: "+49 170 8918770",
  },
  {
    icon: <MailIcon />,
    text: "lenni.pfundtner@gmail.com",
  },
  {
    icon: <Calendar />,
    text: "14.05.2001",
  },
  {
    icon: <GraduationCap />,
    text: "Abitur 2019",
  },
  {
    icon: <HomeIcon />,
    text: "Witten, Germany",
  }
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: "IU Internationale Hochschule",
        degree: "Bisher ohne Abschluss",
        years: "2023 - Heute",
      },
      {
        university: "Ruhr-Univarität Bochum",
        degree: "Ohne Abschluss",
        years: "2020 - 2023",
      },
      {
        university: "Fachhochschule für Finanzen",
        degree: "Ohne Abschluss",
        years: "2019 - 2020",
      }
    ]
  },
  {
    title: 'work experience',
    data: [
      {
        company: "E/D/E GmbH",
        role: "Software Entwickler",
        years: "04.2025 - Heute",
        link: "https://www.ede.de/"
      },
      {
        company: "Optimerch GmbH",
        role: "Web Developer",
        years: "04.2023 - 03.2025",
        link: "https://www.optimerch.de/"
      },
      {
        company: 'dm drogerie markt',
        role: "Mitarbeiter im Wareneingang",
        years: "04.2021 - 03.2023",
        link: "https://www.dm.de/"
      },
    ]
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: "HTML",
        imgPath: "/about/html.svg"
      },
      {
        name: "CSS",
        imgPath: "/about/css.svg"
      },
      {
        name: "JavaScript",
        imgPath: "/about/js.svg"
      },
      {
        name: "React",
        imgPath: "/about/react.svg"
      },
      {
        name: "Next.js",
        imgPath: "/about/nextjs.svg"
      },
      {
        name: "Tailwind CSS",
        imgPath: "/about/tailwind.svg"
      },
      {
        name: "Python",
        imgPath: "/about/python.svg"
      }
    ]
  },
  {
    title: 'tools',
    data: [
      {
        name: "VS Code",
        imgPath: "/about/vscode.svg"
      },
      {
        name: "WordPress",
        imgPath: "/about/wordpress.svg"
      }
    ]
  }
]

type InfoType = {
    icon: JSX.Element;
    text: string;
};

type QualificationDataType = {
  title: string;
  data: {
    university?: string;
    degree?: string;
    years?: string;
    company?: string;
    role?: string;
    link?: string;
  }[];
};

type SkillDataType = {
  title: string;
  data: {
    name?: string;
    imgPath?: string;
  }[];
};


export default function About() {

    const getData = (arr:(QualificationDataType|SkillDataType)[], title:string) => {
        return arr.find((item:QualificationDataType|SkillDataType) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24 xl:mb-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none py-3 xl:py-0">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Persönliche Infos</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifikationen</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Das bin ich!</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">Nachdem ich lange Zeit nicht wusste, was ich nach dem Abi machen soll, hab ich nun endlich gefunden was mir Spaß macht. Webentwicklung!</p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12 justify-center">
                                          {infoData.map((item:InfoType, index:number) => {
                                            return (
                                              <div className="flex w-full items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                <div className="text-primary">{item.icon}</div>
                                                <div>{item.text}</div>
                                              </div>
                                            )
                                          })}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                          <div className="text-primary">Sprachen</div>
                                          <div className="border-b border-border w-full md:w-2/4 mx-auto xl:w-full"></div>
                                          <div>Deutsch (Muttersprache), Englisch (C1)</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">
                                  <div>
                                    <h3 className="h3 mb-8 text-center xl:text-left">Mein bisheriger Werdegang</h3>
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                      {/* work experience*/}
                                      <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                          <Briefcase />
                                          <h4 className="capitalize font-medium">
                                            {getData(qualificationData, 'work experience')?.title}
                                          </h4>
                                        </div>
                                        <div className="flex flex-col gap-y-8">
                                          {getData(qualificationData, 'work experience')?.data.map((item, index) => {
                                            if ('company' in item) {
                                              return (
                                                <div className="flex gap-x-8 group" key={index}>
                                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                  </div>
                                                  <Link href={item.link || ''} target="_blank" className="hover:text-primary">
                                                    <div className="font-semibold text-xl leading-none mb-2">{item.company}</div>
                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{item.role}</div>
                                                    <div className="text-base font-medium">{item.years}</div>
                                                  </Link>
                                                </div>
                                              );
                                            }
                                            return null;
                                          })}
                                        </div>
                                      </div>
                                      {/* education */}
                                      <div className="flex flex-col gap-y-6">
                                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                          <GraduationCap />
                                          <h4 className="capitalize font-medium">
                                            {getData(qualificationData, 'education')?.title}
                                          </h4>
                                        </div>
                                        <div className="flex flex-col gap-y-8">
                                          {getData(qualificationData, 'education')?.data.map((item, index) => {
                                            if ('university' in item) {
                                              return (
                                                <div className="flex gap-x-8 group" key={index}>
                                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                  </div>
                                                  <div>
                                                    <div className="font-semibold text-xl leading-none mb-2">{item.university}</div>
                                                    <div className="text-lg leading-none text-muted-foreground mb-4">{item.degree}</div>
                                                    <div className="text-base font-medium">{item.years}</div>
                                                  </div>
                                                </div>
                                              );
                                            }
                                            return null;
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                  <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                                    <div className="mb-16">
                                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                      <div className="border-b border-border mb-4"></div>
                                      {/*skill list*/}
                                      <div className="flex flex-row gap-x-6 gap-y-4 justify-center flex-wrap xl:justify-start">
                                        {getData(skillData, 'skills')?.data.map((item, index) => {
                                          if ('name' in item) {
                                          return (
                                            <div className="flex flex-col items-center gap-y-2" key={index}>
                                              <Image src={item.imgPath || ''} height={48} width={48} alt="" />
                                              <p className="font-medium">{item.name}</p>
                                            </div>
                                          )
                                          }
                                        })}
                                      </div>
                                    </div>
                                    <div>
                                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                      <div className="border-b border-border mb-4"></div>
                                      {/*tool list*/}
                                      <div className="flex gap-x-8 justify-center xl:justify-start">
                                        {getData(skillData, 'tools')?.data.map((item, index) => {
                                          if ('imgPath' in item && item.imgPath) {
                                            return (
                                              <div className="flex flex-col items-center gap-y-2" key={index}>
                                                <Image src={item.imgPath} height={48} width={48} alt="" />
                                                <p className="font-medium">{item.name}</p>
                                              </div>
                                            )
                                          }
                                        })}
                                      </div>
                                    </div>
                                  </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
            {/* <div className="flex w-full justify-center mt-12 items-center">
              <Link href="/about">
                <Button className="mx-auto group gap-x-4">
                  Mehr über mich
                  <ArrowRightIcon size={18} className="group-hover:translate-x-2 transition-all" />
                </Button>
              </Link>
            </div> */}
        </section>
    );
}