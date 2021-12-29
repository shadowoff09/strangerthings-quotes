![](src/public/images/banner.png)</br>
[![Licence](https://img.shields.io/github/license/shadowoff09/strangerthings-quotes)](https://github.com/shadowoff09/strangerthings-quotes/blob/main/LICENSE)
[![Deployments](https://img.shields.io/github/deployments/shadowoff09/strangerthings-quotes/strangerthings-quotes)](https://github.com/shadowoff09/strangerthings-quotes)
[![Commits](https://img.shields.io/github/last-commit/shadowoff09/strangerthings-quotes)](https://github.com/shadowoff09/strangerthings-quotes/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/shadowoff09/strangerthings-quotes)](https://github.com/shadowoff09/strangerthings-quotes)
[![Quotes](https://img.shields.io/badge/quotes-100-blue)](https://github.com/shadowoff09/strangerthings-quotes/blob/main/quotes.js)
[![Paypal](https://img.shields.io/badge/Paypal-Donate-blue)](https://paypal.me/diogogaspar123)
[![Ko-Fi](https://img.shields.io/badge/Ko--Fi-Donate-ff69b4)](https://ko-fi.com/shadowoff09)

# Stranger Things quotes API

A simple API to retrieve some quotes of Stranger Things!

:globe_with_meridians: Website: [https://strangerthings-quotes.vercel.app](https://strangerthings-quotes.vercel.app/)

## API Documentation

### `GET /api/quotes`

Get a random quote in this format:

> [https://strangerthings-quotes.vercel.app/api/quotes](https://strangerthings-quotes.vercel.app/api/quotes)

	[
	  {
		"quote": "The gate… I opened it.",
		"author": "Eleven"
      },
	]



### `GET /api/quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /api/quotes/5`.

> [https://strangerthings-quotes.vercel.app/api/quotes/5](https://strangerthings-quotes.vercel.app/api/quotes/5)

	[
	  {
	    "quote": "We’re just friends.",
        "author": "Robin Buckley"
	  },
	  {
	    "quote": "Our children don’t live here anymore. You didn’t know that?",
        "author": "Ted Wheeler"
	  },
	  {
	    "quote": "I felt this evil like it was looking at me.",
        "author": "Will Byers"
	  },
	  {
	    "quote": "The demogorgon – it got me. See you tomorrow.",
        "author": "Will Byers"
	  },
	  {
	    "quote": "This is finger lickin’ good.",
        "author": "Steve Harrington"
	  }
	]



## Contributing

If you want to add some quotes, just add them in `src/quotes.js` file and do a pull request !

## Donate
If you liked this project feel free to donate me for future awesome projects!</br>
[Paypal](https://paypal.me/diogogaspar123)</br>
[Ko-fi](https://ko-fi.com/shadowoff09)


## Authors

- [@shadowoff09](https://www.github.com/shadowoff09)
