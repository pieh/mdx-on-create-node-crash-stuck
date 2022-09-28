var fs = require("fs");

for (let index = 0; index < 1000; index++) {

  var createStream = fs.createWriteStream(`src/content/blog-post-${index}.mdx`);
  createStream.write("---\r\n")
  createStream.write(`slug: blog-post-${index}\r\n`)
  createStream.write(`title: Blog Post ${index}\r\n`)
  createStream.write("---\r\n")
  createStream.write("## An Unexpected Journey\r\n")
  createStream.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue. Venenatis cras sed felis eget velit aliquet sagittis id consectetur. Tellus elementum sagittis vitae et leo. Sit amet consectetur adipiscing elit ut aliquam. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Tristique sollicitudin nibh sit amet commodo nulla facilisi. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Faucibus turpis in eu mi bibendum neque egestas. Non blandit massa enim nec dui nunc mattis enim ut. Hendrerit gravida rutrum quisque non. In est ante in nibh. Sit amet consectetur adipiscing elit ut aliquam. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim. Tristique senectus et netus et malesuada fames. Nibh venenatis cras sed felis eget velit aliquet sagittis.</p>")

  createStream.end()

}