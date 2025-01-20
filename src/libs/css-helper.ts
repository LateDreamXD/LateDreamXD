export interface CSSobj {
	url: string,
	sri: string,
	origin: string,
	referrer: boolean
}

export function injectCSS({url, sri, origin, referrer}: CSSobj) {
	const link = document.createElement('link');
	link.rel ='stylesheet';
	link.href = url;
	link.integrity = sri;
	link.crossOrigin = origin;
	if(!referrer) link.referrerPolicy = 'no-referrer';
	document.head.appendChild(link);
}
