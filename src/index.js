import nav from "./nav";
import {footer} from "./footer";
import makeButton from "./button";
import {makeColorStyle} from "./button-styles";
import randomImageUrl from './random.jpeg';
import makeImage from './make-image'

const image = makeImage(randomImageUrl);

const button = makeButton("My first button!")

document.body.appendChild(button)
document.body.appendChild(footer)
document.body.appendChild(image)

console.log(
	nav(),
	makeColorStyle("cyan")
);
