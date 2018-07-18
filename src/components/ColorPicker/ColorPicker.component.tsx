import { BlueRain, BlueRainConsumer, withBlueRain } from '@blueeast/bluerain-os';
import { ChromePicker, SketchPicker } from 'react-color';
import { ColorPickerProperties } from '@blueeast/bluerain-ui-interfaces';
import { styles } from './pickerStyles';
import { Button } from '../Button';
import React from 'react';

export interface BSProps extends ColorPickerProperties {
	value?:{ h?: number, s?: number, l?: number, r?: number, g?: number, b?: number, a?: number } ,
	hs: boolean,
	bluerain: BlueRain;
}

class ColorPicker extends React.Component<BSProps, { color?: { h?: number, s?: number, l?: number, r?: number, g?: number, b?: number, a?: number } | string, displayColorPicker: boolean}> {

	constructor (props:BSProps) {
		super(props);
		this.state= {
			displayColorPicker: false,
			color: this.props.value || 'red',
	};
}

	handleClick = () => {
		this.setState({ displayColorPicker: !this.state.displayColorPicker });
	}

	handleClose = () => {
		this.setState({ displayColorPicker: false });
	}

	handleChangeHsl = (color) => {
		this.setState({ color: color.hsl });
	}

	handleChangeRgb= (color) => {
		this.setState({ color: color.rgb });
	}

	getColorPicker(hs:boolean, backgroundColor:string) {
		if (hs) {
			return <ChromePicker color={backgroundColor} onChange={this.handleChangeHsl} onChangeComplete={this.props.onChange} />;
		}
		return <SketchPicker color={backgroundColor} onChange={this.handleChangeRgb} onChangeComplete={this.props.onChange} />;
	}

	render() {
		const View = this.props.bluerain.Components.get('View');
		const Text = this.props.bluerain.Components.get('Text');

		let backgroundColor = 'blue';
		if (this.props.hs) {
			backgroundColor = 'hsl(20, 100%, 50%)';
			if (this.state.color) {
				if (typeof this.state.color === 'string') {
					backgroundColor = this.state.color;
				}
				else {
					if (!(this.state.color.h)) {
						return (
							<View>
								<Text style={styles.handleError}>{'"Error: Pass prop "value" in hsl format as prop "hs" is true, demanding hsl values."'}</Text>
							</View>)};
					const bgS = (this.state.color.s || 0.5) * 100;
					const bgL = (this.state.color.l || 0.5) * 100;
					backgroundColor = `hsl(${this.state.color.h}, ${bgS}%, ${bgL}%)`;
					}
				}
			}
		else if (this.state.color) {
				backgroundColor = typeof this.state.color === 'string' ? this.state.color : `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
		}

		return (
				<View style={styles.colorControl}>
					<Text>{this.props.label}</Text>
					<View style={styles.onLeft}>
						<View elevation={2} style={[styles.padding5, styles.overflowVisible]}>
							<View
									style={{ display:'flex', justifyContent:'center', backgroundColor, minHeight: 14, maxWidth: 36, width: 36, cursor: 'pointer', borderWidth: 1, borderColor: 'lightgray', borderStyle: 'solid', borderRadius: 2 }}
									onPress={this.handleClick}
							/>
							{ this.state.displayColorPicker ?
							<View style={styles.overflowVisible}>
								<View style={styles.popover}>
									<View style={styles.cover} onPress={this.handleClose} />
									{this.getColorPicker(this.props.hs, backgroundColor)}
								</View>
							</View> : null}
						</View>
				</View>
			</View>
		);

	}
}

export default withBlueRain(ColorPicker);