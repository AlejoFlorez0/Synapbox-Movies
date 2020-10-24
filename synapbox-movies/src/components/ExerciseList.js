import React from 'react';

import Card from './Card';

function ExerciseList(props)
{
	return(
		<div>
		{
			props.exercises.map((exersice) =>
			{
				return(
					<Card
						key={exersice.id}
						title={exersice.title}
						description={exersice.description}
						img = {exersice.img}
						leftColor = {exersice.leftColor}
						rightColor = {exersice.rightColor}
					/>
				)
			})
		}
		</div>
	)
}

export default ExerciseList