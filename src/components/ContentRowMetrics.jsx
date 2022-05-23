import React from 'react';
import PropTypes from 'prop-types';



function ContentRowMovies(props){	
  return (
    <div className="row">
					{props.carProps.map((item,index) => (
						<div className="col-md-4 mb-4" key={index}>
							<div className={`card border-left-${item.borderColor} shadow h-100 py-2`}>
								<div className="card-body">
									<div className="row no-gutters align-items-center">
										<div className="col mr-2">
											<div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{item.title}</div>
											<div className="h5 mb-0 font-weight-bold text-gray-800">{item.quantity}</div>
										</div>
										<div className="col-auto">
											<i className={`fas ${item.icon} fa-2x text-gray-300`}></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
		</div>
  );
}

ContentRowMovies.prototype = {
	title:PropTypes.string.isRequired,
	borderColor:PropTypes.string.isRequired,
	icon:PropTypes.oneOf(['primary', 'success', 'warning']).isRequired,
	quantity:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
}

ContentRowMovies.defaultProps = {
	title:'Title N/A',
	borderColor:'primary',
	icon:'fa-question',
	quantity:0
}
export default ContentRowMovies;