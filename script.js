const getTooltipElement = () => document.querySelector('[role="status"]');

const setTooltip = text => {
  const tooltipElement = getTooltipElement();
  clearTooltip(tooltipElement);
  setTimeout(() => tooltipElement.textContent = text, 50);
};

const clearTooltip = (element = getTooltipElement()) => element.innerHTML = '&nbsp;';

document.addEventListener('click', event => {
  !event.target.title && clearTooltip();
});

const findTooltipText = element => element.title || findTooltipText(element.parentElement);

var controls = {
    undo: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('undo', false, null);
    },
    redo: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('redo', false, null);
    },
    clear: function (event) {
        setTooltip(findTooltipText(event.target));
        document.querySelector('#writing-area').innerHTML = '';
    },
    reset: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('removeFormat', false, null);
    },
    cut: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('cut', false, null);
    },
    copy: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('copy', false, null);
    },
    paste: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('paste', false, null);
    },
    bold: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('bold', false, null);
    },
    italicize: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('italic', false, null);
    },
    underline: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('underline', false, null);
    },    
    setFontFamily: function () {
        var fontFamily = document.getElementById('font-family').value;
        document.execCommand('fontName', false, fontFamily);
    },
    setFontSize: function () {
        var size = document.getElementById('size').value;
        document.execCommand('fontSize', false, size);
    },
    setFontColor: function () {
        var color = document.getElementById('color').value;
        document.execCommand('foreColor', false, color);
    },
    setBackgroundColor: function () {
        var color = document.getElementById('background-color').value;
        document.execCommand('backColor', false, color);
    },
    insertOrderedList: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('insertOrderedList', false, null);
    },
    insertUnorderedList: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('insertUnorderedList', false, null);
    },
    justify: function () {
        var type = document.getElementById('justify').value;
        document.execCommand('justify' + type, false, null);
    },
    strikethrough: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('strikeThrough', false, null);
    },
    subscript: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('subscript', false, null);
    },
    superscript: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('superscript', false, null);
    },
    insertLine: function (event) {
        setTooltip(findTooltipText(event.target));
        document.execCommand('insertHorizontalRule', false, null);
    },
    insertImage: function () {
        var url = document.querySelector('[name="imageUrl"]');
        document.querySelector('insertImage', false, url);
    },
    hyperlink: function () {
        var url = document.querySelector('[name="url"]').value;
        document.execCommand('createLink', false, url);
    },
    unlink: function () {
        document.execCommand('unlink', false, null);
    },
    save: function () {
        var text = document.getElementById('writing-area').innerHTML;
        localStorage.setItem('myDocs', JSON.stringify(text));
    },
    print: function () {
        window.print();
    }
};

(() => {
    const savedText = localStorage.getItem('myDocs');
    if (savedText) {
        document.getElementById('writing-area').innerHTML = JSON.parse(savedText);
    }
})();