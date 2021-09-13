![](StrangerThingsQuotesAPI-Banner.png)

# Stranger Things quotes API

A simple API to retrieve some quotes of Stranger Things!

:globe_with_meridians: Website and demo: **Under development**

## Production host

[https://strangerthings-quotes.herokuapp.com/](https://strangerthings-quotes.herokuapp.com/)

## API

### `GET /v1/quotes`

Get a random quote in this format:

> [https://strangerthings-quotes.herokuapp.com/v1/quotes](https://strangerthings-quotes.herokuapp.com/v1/quotes)

	[
	  {
		"quote": "The gate… I opened it.",
		"author": "Eleven"
      },
	]


### `GET /v1/quotes/{number}`

Returns an array with `{number}` quotes e.g. `GET /v1/quotes/5`.

> [https://lucifer-quotes.herokuapp.com/v1/quotes/5](https://lucifer-quotes.herokuapp.com/v1/quotes/5)

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

If you want to add some quotes, just add them in `quotes.js` file and do a pull request !

## Donate
If you liked this project feel free to donate] me for future awesome projects!</br>
[Paypal](https://paypal.me/diogogaspar123)</br>
[Ko-fi](https://ko-fi.com/shadowoff09)


## Credits

Inspired by [Ron Swanson Quotes](https://github.com/jamesseanwright/ron-swanson-quotes).
