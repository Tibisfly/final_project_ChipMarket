import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

export const Home = () => {
	const items = [
		{
			src:
				"https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80",
			altText: "Slide 1",
			caption: "Slide 1"
		},
		{
			src:
				"https://images.unsplash.com/photo-1509803992307-5ed1ac32efda?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
			altText: "Slide 2",
			caption: "Slide 2"
		},
		{
			src:
				"https://images.unsplash.com/photo-1603056724920-fdecbb3b7d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
			altText: "Slide 3",
			caption: "Slide 3"
		}
	];

	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = newIndex => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map(item => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
				<img src={item.src} alt={item.altText} />
				<CarouselCaption captionText={item.caption} captionHeader={item.caption} />
			</CarouselItem>
		);
	});

	const { store, actions } = useContext(Context);

	return (
		<div className="container ">
			<Carousel activeIndex={activeIndex} next={next} previous={previous}>
				<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
				{slides}
				<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
				<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
			</Carousel>
			<br />
			<div className="card my-3 border-0">
				<div className="row g-0">
					<div className="col-md-3 d-flex justify-content-center">
						<img
							src="https://images.unsplash.com/photo-1585776460744-d32ffc487b3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
							alt="..."
							className="rounded-circle"
							style={{ width: "85%", height: "100%" }}
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">AHORRA TIEMPO Y DINERO</h5>
							<p className="card-text">
								Al alcance de un click podrás conseguir las mejores ofertas cerca de ti. Introduce el
								código postal de la zona y disfruta de los beneficios de ser ChipAddict
							</p>
							<p className="card-text">
								<small className="text-muted">Last updated 3 mins ago</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
