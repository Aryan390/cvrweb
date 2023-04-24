import React from "react";
import { Card } from "react-bootstrap";
import Sidebar from "./Academics/Sidebar";
const Academics = () => {
	return (
		<div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
			<div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
				<div className="flex flex-[0.95]">
					<Sidebar />
					<Card className="my-3 p-3 rounded">
						<Card.Text as="h1" className="text-center bold height2">
							Major Projects
						</Card.Text>
						<Card.Body>
							<Card.Text as="h1" className="text-center bold height">
								<a href="https://cvr.ac.in/it/IT-B_MAJP16-17.jpg">
									<h3>2016 - 17 IV YEAR IT-B MAJORPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-A_MAJP16-17.jpg">
									<h3>2016 - 17 IV YEAR IT-A MAJORPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-B_MAJP15-16.jpg">
									<h3>2015 - 16 IV YEAR IT-B MAJORPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-A_MAJP15-16.jpg">
									<h3>2015 - 16 IV YEAR IT-A MAJORPROJECTS </h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-B_MAJP14-15.jpg">
									<h3>2014 - 15 IV YEAR IT-B MAJORPROJECTS</h3>
								</a>
								<a href="https://cvr.ac.in/it/IT-A_MAJP14-15.jpg">
									<h3>2014 - 16 IV YEAR IT-B MAJORPROJECTS</h3>
								</a>
							</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default Academics;
