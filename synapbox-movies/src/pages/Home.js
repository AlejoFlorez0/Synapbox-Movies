import React from 'react';

import AppBar from '../components/bar/AppBar';
import ImgMediaCard from '../components/card/ImgMediaCard';

class Home extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
		{
			dataTest:
			[
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				},
				{
					title: "Learn amazing street workout and calisthenics",
					description: "Learn amazing street workout and calisthenics",
					image: "Learn amazing street workout and calisthenics",
					price: "Learn amazing street workout and calisthenics"
				}
			]
		};
	}

	render()
	{
		return(

			<div>
				<AppBar/>

				<div className="container-fluid">

					{
						this.state.dataTest.map((obj) =>
						{
							return(
								<ImgMediaCard
									title={obj.title}
									description={obj.description}
									img = {obj.image}
									price = {obj.price}
								/>
							)
						})
					}

				</div>

			</div>
		)
	}
}

export default Home