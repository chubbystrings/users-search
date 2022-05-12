import hash from "../../assets/svg/mymoji.jpeg";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer fixed bottom-0 bg-gray-700 text-primary-content footer-center">
        <div >
            <img src={hash} alt="" className="rounded-full w-5 h-5" />
            <small>Built with love by Soft Code {footerYear}</small>
        </div>
    </footer>
  )
}

export default Footer