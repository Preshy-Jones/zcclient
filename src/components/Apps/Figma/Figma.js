import React from "react";

const Figma = () => {
	const localHostUrl =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://localhost:3000/figma/authenticate/&scope=file_read&state=state&response_type=code";
	const deployedUrl =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=http://externaltools.zuri.chat/figma/authenticate/&scope=file_read&state=state&response_type=code";
	const herokuURL =
		"https://www.figma.com/oauth?client_id=V2IvPlEApDfBT9uNS5Rbrf&redirect_uri=https://zurichatappfigma.herokuapp.com/figma/authenticate/&scope=file_read&state=state&response_type=code";
	return (
		<div>
			<h2 className="text-lg text-gray-600 font-bold">FIGMA HOME PAGE</h2>
			<div className="mt-6">
				<a
					className="px-4 py-2 bg-gray-700 text-white rounded-sm"
					href={herokuURL}>
					Connect to figma
				</a>
			</div>
		</div>
	);
};

export default Figma;
