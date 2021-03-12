import { Component } from 'react';
import { DrawLine } from './DrawLine';
import { FillBucket } from './FillBucket';
import { DrawRect } from './DrawRect';
import { checkCanvas, constructCanvas } from './Canvas';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			drawingArray: [],
		};
	}

	drawElement = (key) => {
		switch (key) {
			case '-':
				return '-';
			case '|':
				return '|';
			case '1':
				return 'X';
			case '0':
				return ' ';

			default:
				return key;
		}
	};

	handleChange = (e) => {
		this.setState({ command: e.target.value });
	};

	processCommand = (command) => {
		const { drawingArray } = this.state;
		const spr = command.trim().split(' ');
		const key = spr[0];

		switch (key) {
			case 'C':
				if (checkCanvas(drawingArray)) {
					alert('Canvas exists');
				} else {
					return constructCanvas({ w: spr[1], h: spr[2] });
				}
				break;
			case 'L':
				if (checkCanvas(drawingArray))
					return DrawLine({
						x1: parseInt(spr[1]),
						y1: parseInt(spr[2]),
						x2: parseInt(spr[3]),
						y2: parseInt(spr[4]),
						arr: drawingArray,
					});
				alert("Canvas Does't exists");
				break;
			case 'R':
				if (checkCanvas(drawingArray))
					return DrawRect({
						x1: parseInt(spr[1]),
						y1: parseInt(spr[2]),
						x2: parseInt(spr[3]),
						y2: parseInt(spr[4]),
						arr: drawingArray,
					});
				alert("Canvas Does't exists");
				break;
			case 'B':
				if (checkCanvas(drawingArray))
					return FillBucket({
						x: parseInt(spr[1]),
						y: parseInt(spr[2]),
						c: spr[3],
						arr: drawingArray,
					});
				alert("Canvas Does't exists");
				break;
			case 'Q':
				return [];

			default:
				return 'Invalid command.';
		}
		return [];
	};

	click = () => {
		const { command } = this.state;
		const resp = this.processCommand(command);
		if (typeof resp === 'string') {
			alert(resp);
		} else {
			this.setState({
				drawingArray: resp,
			});
		}
	};

	render() {
		const { drawingArray } = this.state;
		return (
			<div className="App">
				<input
					type="text"
					onChange={this.handleChange}
					placeholder="Enter command here"
				/>
				<input type="button" value="Click Here" onClick={this.click} />
				{drawingArray.map((eachRow, i) => {
					return (
						<p key={i}>
							{eachRow.map((eachElement, j) => {
								const element = this.drawElement(eachElement);
								return (
									<span key={j} className="cell">
										{element}
									</span>
								);
							})}
						</p>
					);
				})}
			</div>
		);
	}
}

export default App;
