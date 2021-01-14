import React from "react";
import "./employ.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Employ = () => {
	AOS.init();

	return (
		<div
			className="employ-wrapper"
			data-aos="fade-up"
			data-aos-offset="-20"
			data-aos-delay="1"
			data-aos-duration="400"
			data-aos-easing="ease"
			data-aos-once="true"
			data-aos-anchor-placement="top-center"
		>
			<h2 className="employ-title">Employment History</h2>
			<div className="jobs-container" data-aos-offset="-107" data-aos="fade">
				<div className="job-info">
					<span className="job-years">2017-2019</span>
					<span className="job-name">Studio Librus</span>
				</div>
				<div className="job-description">
					<p>
						Led the entire design process from concept to production, researched and analyzed for
						user needs. worked with world wide suppliers, refined products, and improved work flows
						and production processes. designed UX and UI for numerous products, both physically and
						graphically.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Employ;
