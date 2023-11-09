# Accordion

Accordion developed with pure JavaScript ES6, HTML, and CSS (Sass), no libraries or frameworks were used.

Accordion items are locked until a previous one is opened.

## JSON Data

Uses a JSON file to populate the accordion.

```bash
js/content-json.json
```

## Usage

Currently, the number of accordion items is predefined by the HTML Structure, but adjustments can be made according to the number of elements in the JSON object.

The following code would need to be modified:

```
jsonData.sections.forEach((section, index) => {
    const selector = `.accordion-item[data-index="${index}"]`;
    const header = document.querySelector(`${selector} button`);
    const content = document.querySelector(`${selector} .accordion-body`);

    header.innerHTML = section.title.value;
    content.innerHTML = `<p>${section.panel.value}</p>
                         <img src="${section.panel.image.src}" alt="${section.panel.image.title}">`;
  });

```

## Demo Online

[Go to Demo Online](https://hectorguedea.com/accordion/)

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.


## Author

[Héctor Guedea](https://hectorguedea.com)

## License

[MIT](https://choosealicense.com/licenses/mit/)