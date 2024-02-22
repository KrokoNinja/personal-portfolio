import { Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

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
    text: "A-Levels 2019 at Schiller-Gymnasium Witten",
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
        university: "Fachhochschule für Finanzen",
        degree: "No degree",
        years: "2019 - 2020",
      },
      {
        university: "Ruhr-Univarität Bochum",
        degree: "No degree",
        years: "2020 - 2023",
      },
      {
        university: "IU Internationale Hochschule",
        degree: "No degree yet",
        years: "2023 - Today",
      }
    ]
  },
  {
    title: 'work experience',
    data: [
      {
        company: "Optimerch GmbH",
        qualification: "Web Developer",
        years: "2023 - Today",
      }
    ]
  }
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: "HTML, CSS"
      },
      {
        name: "JavaScript"
      },
      {
        name: "React"
      },
      {
        name: "Next.js"
      },
      {
        name: "Tailwind CSS"
      },
    ]
  },
  {
    title: 'tools',
    data: [
      {
        imgPath: "/about/vscode.svg"
      },
      {
        imgPath: "/about/wordpress.svg"
      },
      {
        imgPath: "/about/notions.svg"
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
      qualification?: string;
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
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative" />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div>
                                        <h3>Unmatched Service Quality for Over 10 Years</h3>
                                        <p>I specialize crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences</p>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualifications">qualifications</TabsContent>
                                <TabsContent value="skills">skills</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
}