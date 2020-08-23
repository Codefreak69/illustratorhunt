import React , {useEffect} from 'react';





const RectangleAdd = (props) => {
	const {currentPath} = props
	useEffect(() => {
		window.adsbygoogle = window.adsbygoogle || [];
		window.adsbygoogle.push({})
	},[currentPath])

	return (
		<div key={currentPath}>
			<ins className="adsbygoogle"
     style={{display:"block",marginTop:'10%'}}
     data-ad-client="ca-pub-2352333389468696"
     data-ad-slot="2018907147"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
		</div>
		)
}


export default RectangleAdd