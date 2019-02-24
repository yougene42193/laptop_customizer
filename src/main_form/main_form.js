import React, { Component } from 'react';
import Feature from '../feature/feature';
import FeatureList from '../FeatureList/FeatureList';

class MainForm extends Component {
  render() {
		const features = Object.keys(this.props.features).map(key => {
			const options = this.props.features[key].map((item, index) => {
				const selectedClass =
					item.name === this.props.selected[key].name
						? 'feature__selected'
						: '';
				const featureClass = 'feature__option ' + selectedClass;
				return (
					<FeatureList key={index} featureClassName={featureClass} updateFeature={this.props.updateFeature} updateFeatureKey={key} updateFeatureItem={item} itemName={item.name} itemCost={item.cost}/>
				);
			});

			return <Feature key={key} featureName={key} options={options} />;
		});

		return (
			<section className="main__form">
				<h3>TECH SPECS AND CUSTOMIZATIONS</h3>
				{features}
			</section>
		);
	}
}

export default MainForm;