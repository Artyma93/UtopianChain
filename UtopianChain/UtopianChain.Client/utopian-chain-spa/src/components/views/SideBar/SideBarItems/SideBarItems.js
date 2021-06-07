import HomeIcon from "@material-ui/icons/Home";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import EmailIcon from "@material-ui/icons/Email";
import WorkIcon from "@material-ui/icons/Work";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PhotoIcon from "@material-ui/icons/Photo";
import ForumIcon from "@material-ui/icons/Forum";
import TheatersIcon from "@material-ui/icons/Theaters";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";

export const SideBarItems = {
  items: [
    {
      id: "1",
      title: "Создать голосование",
      icon: <AnnouncementIcon />,
      link: "/create-election",
    },
    {
      id: "2",
      title: "Проголосовать",
      icon: <WorkIcon />,
      link: "/voting",
    },
    {
      id: "3",
      title: "Посмотреть результаты",
      icon: <HomeIcon />,
      link: "/voting-list",
    },
    {
      id: "4",
      title: "Цепочка блоков",
      icon: <WorkIcon />,
      link: "/block-chain",
    },
  ],
};
