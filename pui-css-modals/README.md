# pui-css-modals

A CSS modals component that can be installed via this npm package.
This package provides all of the CSS you need to use the component.



## Installation

To install the package from the command line:

```
npm install pui-css-modals
```

## Usage

Note that this requires Bootstrap's JavaScript.

```html
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <h4 class="modal-title" id="myModalLabel">Modal Title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default-alt" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
```


You can find more examples of the modals component in the [pui style guide](http://styleguide.pivotal.io/)


*****************************************

This is a component of Pivotal UI, a collection of [React](https://facebook.github.io/react/) and CSS components for rapidly building and prototyping UIs.

[Styleguide](http://styleguide.pivotal.io)
[Github](https://github.com/pivotal-cf/pivotal-ui)
[npm](https://www.npmjs.com/browse/keyword/pivotal%20ui%20modularized)

(c) Copyright 2017 Pivotal Software, Inc. All Rights Reserved.
