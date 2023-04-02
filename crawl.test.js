const { normalizeURL } = require('./crawl.js');
const {test , expect } = require('@jest/globals');

test('Normalized URL by removing https protocol',()=>{
    const input = 'https://sap.com/pankaj';
    const actual = normalizeURL(input);
    const expected = 'sap.com/pankaj';
    expect(actual).toEqual(expected);
});

test('Normalized URL by trimming trailing slashes('/')',()=>{
    const input = 'https://sap.com/pankaj';
    const actual = normalizeURL(input);
    const expected = 'sap.com/pankaj';
    expect(actual).toEqual(expected);
});

test('Normalized URL by converting upper case to lower.',()=>{
    const input = 'https://SAP.com/PanKaJ';
    const actual = normalizeURL(input);
    const expected = 'sap.com/pankaj';
    expect(actual).toEqual(expected);
});

test('Normalized URL by removing http protocol',()=>{
    const input = 'https://SAP.com/PanKaJ';
    const actual = normalizeURL(input);
    const expected = 'sap.com/pankaj';
    expect(actual).toEqual(expected);
});

