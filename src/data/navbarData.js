import { FiUser, FiGitBranch, FiTerminal, FiLayers} from "react-icons/fi";
import { VscHome } from "react-icons/vsc";

export const navigationItems = [
  {linkName: 'Home', href: '#home', icon: VscHome},
  {linkName: 'About', href: '#about', icon: FiUser},
  {linkName: 'Experience', href: '#experience', icon: FiGitBranch},
  {linkName: 'Projects', href: '#projects', icon: FiTerminal},
  {linkName: 'Toolkit', href: '#toolkit', icon: FiLayers}
];