import React, { useContext } from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { myContext } from "../store/appContext";

export const CharacterCard = props => {
	const { actions } = useContext(myContext);

	return (
		<div className="card p-0 me-3 mb-4" style={{ minWidth: "18rem", maxWidth: "18rem", minHeight: "22rem" }}>
			<img
				src="https://i.gadgets360cdn.com/large/skywalker_saga_1588526257979.jpeg"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body p-3">
				<h5 className="card-title text-center px-3 py-0">{props.card_character.name}</h5>
				<p className="card-text">Gender: {props.card_character.gender}</p>
				<p className="card-text">Hair Color: {props.card_character.hair_color}</p>
				<p className="card-text">Eye Color: {props.card_character.eye_color}</p>
				<div className="d-flex justify-content-between">
					<Link to={`/detailscharacters/${props.index}`}>
						<button href="#" className="btn btn-primary">
							Learn more!
						</button>
					</Link>
					<button
						href="#"
						className="btn btn-warning"
						onClick={() => actions.addFavorites(props.card_character.name)}>
						<i className="fas fa-heart" />
					</button>
				</div>
			</div>
		</div>
	);
};

CharacterCard.propTypes = {
	card_character: PropType.object,
	index: PropType.number
};
