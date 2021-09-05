"use strict";

ClassicEditor.create(document.querySelector('#editor'), {
  toolbar: {
    items: ['heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'imageUpload', 'link', 'code']
  },
  language: 'zh',
  image: {
    toolbar: ['imageTextAlternative', 'imageStyle:inline', 'imageStyle:block', 'imageStyle:side']
  },
  table: {
    contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
  },
  licenseKey: ''
}).then(function (editor) {
  window.editor = editor;
})["catch"](function (error) {
  console.error('Oops, something went wrong!');
  console.error('Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:');
  console.warn('Build id: bvqgxne878wi-76t13wj44qu0');
  console.error(error);
});
//# sourceMappingURL=all.js.map
