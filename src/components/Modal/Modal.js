import React from 'react';
import './Modal.css';

function Modal() {
	return (
		<div className="instructionsModal">
			<div className="modal-content">
				<h4 className="center">Game Instructions</h4>
				<ol>
					<li>Start the game by clicking an image.</li>
					<li>After Each click the images will randomize.</li>
					<li>You loose if you click an image 2 times!</li>
					<li>Click all 12 images without repeating, and you win!</li>
				</ol>
			</div>
			<br />
			<div className="modal-footer white-text center">
			<a className="waves-effect waves-light btn" onClick={() => {
				document.getElementsByClassName('instructionsModal')[0].classList.add('hide');
			}}>Let's Play the Game!!!</a>
			</div>
			</div>
		
	)
}
export default Modal;