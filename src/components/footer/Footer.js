import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./footer.css";

const Footer = () => {
	useEffect(() => {
		AOS.init({
			offset: 220,
			delay: 0,
			duration: 400,
			easing: "ease-in-out",
			anchorPlacement: "top-bottom",
		});
	}, []);

	return (
		<div
			className="footer-wrapper"
			// data-aos="fade-up"
			// data-aos-offset="-120"
			// data-aos-delay="5"
			// data-aos-duration="500"
			// data-aos-easing="ease-in-out"
			// data-aos-anchor-placement="top-center"
		>
			<p>
				<span className="marker">I am searching </span>for the next challenge, if you think I can
				fit you and take me to the next level contact me :
			</p>
			<div className="footer-contact">
				<span>054-5222554</span>

				<span>cohenmaoz39@gmail.com</span>
			</div>
		</div>
	);
};

export default Footer;
