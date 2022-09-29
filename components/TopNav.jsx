import { FaMoon,FaSun } from 'react-icons/fa';
import useDarkMode from '../components/useDarkMode';
import { useRouter } from 'next/router'

const TopNavigation = () => {
  return (
    <div className='top-navigation fixed z-50'>
      
      {/* <DanFace />  */}
      <Title />
      <ThemeIcon />
    </div>
  );
};

const ThemeIcon = () => {
  const [darkTheme, setDarkTheme] = useDarkMode();
  const handleMode = () => setDarkTheme(!darkTheme);
  return (
    
    <body onClick={handleMode}>
      {darkTheme ? (
        <div className='top-navigation-icon w-14 group hover:cursor-pointer'>
        <FaMoon size='24' />     
        <div className="top-navigation-tooltip group-hover:scale-100">
        {"Dark Mode"}
        </div>
        </div>
      ) : (
        <div className='top-navigation-icon w-14 group hover:cursor-pointer'>
        <FaSun size='24' />
        <div className="top-navigation-tooltip group-hover:scale-100 ">
        {"Light Mode"}
        </div>
        </div>
      )}
    </body>
    
  );
};

//The above is the source of the hydration errors. Code runs fine but with warnings. No luck fixing so far.

// const DanFace = () => {
//   return (
//     <div className="top-navigation-icon group">
//       <img src="ItsDan.png" className='top-navigation-icon h-14 w-14 rounded-full'  />
//       <div className="top-navigation-tooltip group-hover:scale-100 top-11">
//         {"Hire Me Please :)"}
//         </div>
//         </div>
//   )
// }




const Title = () => {
  const router = useRouter()
  if (router.pathname === "/") {
    return (
    <h5 className='title-text '>Home</h5>
  )}
  if (router.pathname === "/Home") {
    return (
    <h5 className='title-text '>Home</h5>
  )}
  if (router.pathname === "/Previous-Work") {
    return (
    <h5 className='title-text '>Previous Work</h5>
  )}
  if (router.pathname === "/CV") {
    return (
    <h5 className='title-text '>CV</h5>
  )}
  if (router.pathname === "/Contact-Me") {
    return (
    <h5 className='title-text '>Contact Me</h5>
  )}
}

export default TopNavigation;