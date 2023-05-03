import React from "react";


const Blog = () => {
  return (
    <div className="flex w-3/4 mx-auto py-36 space-y-3">
      <div>
        <h1 className="font-semibold">
          1. Tell us the differences between uncontrolled and controlled
          components.
        </h1>
        <p className="ml-5">
          In uncontrolled component the form data is handled by the DOM, instead
          of the component itself.And the component doesn't have access to the
          form data and can't modify it. <br />
          In controlled component the form data is handled by the component
          itself. The component has the access to the form data and it can
          modify it.
        </p>
        <h1 className="font-semibold">
          2. How to validate React props using PropTypes?
        </h1>
        <p className="ml-5">
          PropTypes is a built-in feature in React that allows to validate the
          types of props that a component receives. By defining the types of
          props that a component is expecting.It helps to ensure that the data
          received by a component is of the expected type and shape, and can
          help to prevent errors caused by unexpected input.
        </p>
        <h1 className="font-semibold">
          3. Tell us the difference between nodejs and express js.
        </h1>
        <p className="ml-5">
          Node Js is a javascript runtime that allows to run javascript on
          server side. It provide many features which make it suitable for
          building high performance application. <br />
          Express js is a framework, which is built in nodejs. It provides a set
          of features and tools to build web applications easily. It simplifies
          the process of handling HTTP requests and responses.
        </p>
        <h1 className="font-semibold">
          4.What is a custom hook, and why will you create a custom hook?
        </h1>
        <p className="ml-5">
          Custom hook is a reusable function in react that allows to extract
          component logic into separate function. It can be shared into multiple
          components. <br />
          To keep code clean, readable, maintainable and DRY we can create a
          custom hook.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Blog;
