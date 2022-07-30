export default function handler(req, res) {
  res.status(200).json([
    {
      id: "1",
      name: "React-Native-App",
      content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Etiam posuere lacus quis dolor. Etiam bibendum elit eget erat. Etiam neque. Nulla pulvinar eleifend sem. Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nullam rhoncus aliquam metus. Etiam posuere lacus quis dolor. Etiam bibendum elit eget erat. Etiam neque. Nulla pulvinar eleifend sem. Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nullam rhoncus aliquam metus. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Etiam posuere lacus quis dolor. Etiam bibendum elit eget erat. Etiam neque. Nulla pulvinar eleifend sem. Phasellus et lorem id felis nonummy placerat. Proin pede metus, vulputate nec, fermentum fringilla, vehicula vitae, justo. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nullam rhoncus aliquam metus.",
      createdAt: "2020-01-01T00:00:00.000Z",
      image: "https://picsum.photos/700/200",
    },
    {
      id: "2",
      name: "X",
      content: "x",
    },
  ]);
}
