# pui-css-tabs

A CSS tabs component that can be installed via this npm package.
This package provides all of the CSS you need to use the component.



## Installation

To install the package from the command line:

```
npm install pui-css-tabs
```

## Usage

Note: this requires Boostrap's JavaScript.

```html
<div class="tab-highlight">
  <div class="row">
    <div class="col-md-8">
      <h1>Service Plans</h1>
      <ul class="nav nav-stacked">
        <li class="active">
          <a data-toggle="tab" href="#home">
            <div class="row">
              <div class="col-md-10 tab-title">Spark</div>
              <div class="col-md-14">Free</div>
            </div>
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#profile">
            <div class="row">
              <div class="col-md-10 tab-title">Boost</div>
              <div class="col-md-14">$10/month</div>
            </div>
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#messages">
            <div class="row">
              <div class="col-md-10 tab-title">Amp</div>
              <div class="col-md-14">$50/month</div>
            </div>
          </a>
        </li>
        <li>
          <a data-toggle="tab" href="#settings">
            <div class="row">
              <div class="col-md-10 tab-title">
                Shockingly long plan name is important to test
              </div>
              <div class="col-md-14">$1000/month</div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-md-16">
      <h1>Plan Features</h1>
      <div class="tab-content">
        <div class="tab-pane fade in active" id="home">Content 1</div>
        <div class="tab-pane fade" id="profile">Content 2</div>
        <div class="tab-pane fade" id="messages">Content 3</div>
        <div class="tab-pane fade" id="settings">Content 4</div>
      </div>
    </div>
  </div>
</div>
```


You can find more examples of the tabs component in the [pui style guide](http://styleguide.pivotal.io/)


*****************************************

This is a component of Pivotal UI, a collection of [React](https://facebook.github.io/react/) and CSS components for rapidly building and prototyping UIs.

[Styleguide](http://styleguide.pivotal.io)
[Github](https://github.com/pivotal-cf/pivotal-ui)
[npm](https://www.npmjs.com/browse/keyword/pivotal%20ui%20modularized)

(c) Copyright 2016 Pivotal Software, Inc. All Rights Reserved.
