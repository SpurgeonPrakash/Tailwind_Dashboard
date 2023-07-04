import {
  faPencil,
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import AboutBox from "../AboutBox/AboutBox";
import ActionDashboardButton from "../../../shared/components/ActionDashboardButton/ActionDashboardButton";
const About = () => {
  const aboutSections = [
    {
      id: "lkjhsfljkhfs",
      heading: "Experience",
      aboutContent: [
        {
          id: "kjhgsbfkjgdk",
          icon: faBriefcase,
          title: "Crisis Invention Specialist",
          date: "January 2023 - Present",
          location: "Icoderz - Ahmedabad - India",
          about:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaequam earum tempore enim laudantium quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, aliquam! consectetur adipisicing elit. Quibusdam, aliquam!.",
        },
      ],
    },
    {
      id: "lkjhsfljkhft",
      heading: "Education",
      aboutContent: [
        {
          id: "kjhgsbfkjgdj",
          icon: faGraduationCap,
          title: "BE Electronics and Telecommunication Engg",
          date: "Augest 2015 - June 2019",
          location: "SBJITMR - Nagpur - India",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="border-b border-solid border-gray-400 p-4 flex justify-around">
        <p className="w-11/12 text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas,
          deleniti quasi eaque possimus, aperiam eveniet, debitis illum illo
          assumenda iusto nam modi impedit voluptatibus natus nobis blanditiis
          nulla facilis soluta! Quibusdam, aliquam! consectetur adipisicing
          elit. Quibusdam, aliquam!.
        </p>
        <ActionDashboardButton icon={faPencil} />
      </div>
      {aboutSections.map((as) => (
        <div key={as.id} className="border-b border-solid border-gray-400">
          <h3 className="font-bold pt-4 pl-4 pb-2">{as.heading}</h3>
          <AboutBox content={as.aboutContent} />
        </div>
      ))}
    </div>
  );
};

export default About;
