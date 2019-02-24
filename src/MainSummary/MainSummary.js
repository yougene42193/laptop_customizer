import React, { Component } from 'react';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';
import './MainSummary.css';

class MainSummary extends Component {
	render() {
		const summary = Object.keys(this.props.selected).map(key => (
			<SummaryOption
				key={key}
				optionLabel={key}
				optionValue={this.props.selected[key].name}
				optionCost={this.props.selected[key].cost}
			/>
		));

		return (
			<section className="main__summary">
				<h3>NEW GREENLEAF 2018</h3>
				{summary}
				<SummaryTotal selected={this.props.selected} />
			</section>
		);
	}
}

export default MainSummary;