import "./footer.css"

function createFooterItem(innerText) {
	const p     = document.createElement('p')
	p.innerText = innerText
	return p
}

const top = createFooterItem("Top of footer")

const bottom = (() => {
	const p = createFooterItem("Bottom of footer")
	p.setAttribute('class', 'footer-bottom')
	return p
})();

const footer = (() => {
	const footer = document.createElement('footer')
	footer.appendChild(top)
	footer.appendChild(bottom)
	return footer
})();

export {top, bottom, footer};
