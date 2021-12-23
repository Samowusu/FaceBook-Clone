import React from "react";
import Story from "./Story";
import classes from "./StoryReel.module.css";

function StoryReel() {
	return (
		<div className={classes.storyReel}>
			<Story
				title='E-Jay'
				profileImage='https://wallpaperaccess.com/full/1632930.jpg'
				backgroundImage='https://toppng.com/uploads/preview/black-woman-closup-afro-pop-art-115628948192pjhxvesuo.png'
			/>
			<Story
				title='Kong'
				profileImage='https://www.looper.com/img/gallery/every-king-kong-movie-ranked-worst-to-best/intro-1617312244.jpg'
				backgroundImage='https://images.theconversation.com/files/393182/original/file-20210401-19-kx3hwy.jpeg?ixlib=rb-1.1.0&rect=90%2C0%2C1221%2C609&q=45&auto=format&w=668&h=324&fit=crop'
			/>
			<Story
				title='Chromo'
				profileImage='https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg'
				backgroundImage='https://cdn.vox-cdn.com/thumbor/7UxzMXrwy0npx4ltcY36Op0YMyU=/0x0:3840x2010/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22719421/MarvelsAvengers_E3SEP_BlackPanther.jpg'
			/>
			<Story
				title='Pablo'
				profileImage='https://cdn.britannica.com/15/188715-050-94EA4753/Pablo-Escobar-1991.jpg'
				backgroundImage='https://www.azquotes.com/vangogh-image-quotes/82/1/Quotation-Pablo-Escobar-Everyone-has-a-price-the-important-thing-is-to-find-82-1-0119.jpg'
			/>
			<Story
				title='ChopStixs'
				profileImage='https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Praying_mantis_india.jpg/1200px-Praying_mantis_india.jpg'
				backgroundImage='https://cdn.thewirecutter.com/wp-content/media/2020/10/chopsticks-2x1-2048px-9128.jpg?auto=webp&quality=75&crop=2:1&width=1024'
			/>
			<Story
				title='Mantock'
				profileImage='https://qph.fs.quoracdn.net/main-qimg-1dcca3942acf27f3b3a71c6a28fb8af3'
				backgroundImage='https://cdn2.unrealengine.com/fortnite-naruto-sasuke-sakura-and-kakashi-outfits-1920x1080-03fb4a1e5fbc.jpg'
			/>
		</div>
	);
}

export default StoryReel;
